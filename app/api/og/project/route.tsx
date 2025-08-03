import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const title = searchParams.get('title') || 'Project';
    const description =
      searchParams.get('description') ||
      'Archaeological project by Jona Schlegel';
    const services = searchParams.get('services') || '';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#262626', // neutral-800
            backgroundImage:
              'linear-gradient(135deg, #262626 0%, #171717 50%, #0f0f0f 100%)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '40px 60px',
              borderBottom: '2px solid #404040',
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: 'white',
              }}
            >
              Jona Schlegel
            </div>
            <div
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '8px 20px',
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              PROJECT
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              padding: '60px',
            }}
          >
            <h1
              style={{
                fontSize: title.length > 30 ? 52 : 64,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.1,
                margin: '0 0 32px 0',
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: 24,
                color: '#d4d4d8', // neutral-300
                lineHeight: 1.4,
                margin: '0 0 32px 0',
                maxWidth: '80%',
              }}
            >
              {description}
            </p>

            {services && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 12,
                }}
              >
                {services.split(',').map((service: string) => (
                  <span
                    key={`service-${service.trim().replace(/\s+/g, '-')}`}
                    style={{
                      backgroundColor: '#404040',
                      color: '#d4d4d8',
                      padding: '8px 16px',
                      borderRadius: 20,
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {service.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom accent */}
          <div
            style={{
              height: 8,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.log(`Failed to generate project OG image: ${message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
