import { ImageResponse } from 'next/og';

export const runtime = 'edge';

/** Generates an Open Graph image for the Impact dashboard page. */
export function GET() {
  try {
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1C1F23',
          backgroundImage: 'linear-gradient(135deg, #1C1F23 0%, #0d0f11 100%)',
        }}
      >
        {/* Header */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 60,
            display: 'flex',
            alignItems: 'center',
            fontSize: 32,
            fontWeight: 600,
            color: 'white',
          }}
        >
          Jona Schlegel
        </div>

        {/* Type badge */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 60,
            backgroundColor: '#009D6F',
            color: 'white',
            padding: '8px 16px',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'uppercase',
          }}
        >
          Impact Dashboard
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          <h1
            style={{
              fontSize: 56,
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
              textAlign: 'center',
            }}
          >
            Academic & Professional Impact
          </h1>
          <p
            style={{
              fontSize: 24,
              color: '#d4d4d8',
              lineHeight: 1.4,
              margin: 0,
              textAlign: 'center',
            }}
          >
            Publications • Citations • Science Communication • Community
          </p>
        </div>

        {/* Bottom accent with primary-green */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #009D6F, #42CBB3, #E6D67C)',
          }}
        />
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.log(`Failed to generate OG image: ${message}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
