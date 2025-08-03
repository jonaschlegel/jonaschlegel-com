import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const title = searchParams.get('title') || 'Jona Schlegel';
    const subtitle =
      searchParams.get('subtitle') ||
      'Archaeological Science Communication & Knowledge Management';
    const type = searchParams.get('type') || 'website';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#262626', // neutral-800
            backgroundImage: 'linear-gradient(45deg, #262626 0%, #171717 100%)',
          }}
        >
          {/* Header with name */}
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
                fontSize: title.length > 50 ? 48 : 64,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                margin: '0 0 24px 0',
                textAlign: 'center',
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                style={{
                  fontSize: 24,
                  color: '#d4d4d8', // neutral-300
                  lineHeight: 1.4,
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom accent */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 8,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            }}
          />

          {/* Type indicator */}
          {type !== 'website' && (
            <div
              style={{
                position: 'absolute',
                top: 60,
                right: 60,
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              {type}
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.log(`Failed to generate OG image: ${message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
