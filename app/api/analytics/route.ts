import { NextRequest, NextResponse } from 'next/server';

// Simple server-side analytics endpoint as a fallback
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, parameters, url, userAgent } = body;

    // Get visitor info from headers
    const visitorInfo = {
      ip:
        request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip') ||
        'unknown',
      userAgent: request.headers.get('user-agent') || userAgent,
      referer: request.headers.get('referer'),
      timestamp: new Date().toISOString(),
    };

    // Store analytics data (in production, send to your preferred analytics service)
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', {
        event,
        parameters,
        url,
        visitor: visitorInfo,
      });
    }

    // You could also send this to external analytics services here
    // For example, send to Google Analytics Measurement Protocol
    if (process.env.GA_MEASUREMENT_ID && event) {
      try {
        const measurementId = process.env.GA_MEASUREMENT_ID;
        const apiSecret = process.env.GA_API_SECRET;

        if (apiSecret) {
          const payload = {
            client_id: generateClientId(visitorInfo.ip, visitorInfo.userAgent),
            events: [
              {
                name: event,
                params: parameters || {},
              },
            ],
          };

          await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
            {
              method: 'POST',
              body: JSON.stringify(payload),
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
        }
      } catch (error) {
        // Silent fail in production
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to send to GA Measurement Protocol:', error);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Analytics endpoint error:', error);
    }
    return NextResponse.json(
      { error: 'Failed to process analytics' },
      { status: 500 },
    );
  }
}

// Generate a consistent client ID from IP and user agent
function generateClientId(ip: string, userAgent: string): string {
  // Simple hash function for generating consistent client ID
  const str = `${ip}-${userAgent}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString();
}
