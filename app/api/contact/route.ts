import { NextResponse } from 'next/server';

const MAX_FIELD_LENGTH = 5_000;

type ContactResponseBody = { ok: true } | { error: string };

const clean = (value: unknown) =>
  typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : '';

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"]/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[character] ??
      character,
  );

/** Delivers project enquiries without exposing mail credentials to the client. */
export async function POST(
  request: Request,
): Promise<NextResponse<ContactResponseBody>> {
  const payload: unknown = await request.json().catch(() => null);
  if (!payload || typeof payload !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const website = clean(data.website);
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(data.name);
  const email = clean(data.email);
  const projectType = clean(data.projectType);
  const timeline = clean(data.timeline);
  const description = clean(data.description);

  if (
    !name ||
    !projectType ||
    !timeline ||
    !description ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { error: 'Please complete every required field.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: 'Email delivery is not configured.' },
      { status: 503 },
    );
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Project enquiry: ${projectType}`,
      html: `
        <h1>New project enquiry</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
        <h2>Project description</h2>
        <p>${escapeHtml(description).replaceAll('\n', '<br />')}</p>
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'The message could not be delivered.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
