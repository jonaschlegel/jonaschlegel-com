import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#262626', // neutral-800
            backgroundImage: 'linear-gradient(45deg, #262626 0%, #171717 100%)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '40px 60px',
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: 'white',
              }}
            >
              Jona Schlegel
            </div>
            <div
              style={{
                backgroundColor: '#10b981', // emerald-500
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              CV
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              textAlign: 'center',
              padding: '0 60px',
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.1,
                margin: '0 0 32px 0',
              }}
            >
              Curriculum Vitae
            </h1>

            <p
              style={{
                fontSize: 28,
                color: '#d4d4d8', // neutral-300
                lineHeight: 1.4,
                margin: '0 0 48px 0',
                maxWidth: '80%',
              }}
            >
              Archaeological Research • Science Communication • Academic
              Excellence
            </p>

            {/* Key areas */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 24,
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  backgroundColor: '#374151',
                  color: '#d4d4d8',
                  padding: '16px 24px',
                  borderRadius: 8,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                📚 Publications
              </div>
              <div
                style={{
                  backgroundColor: '#374151',
                  color: '#d4d4d8',
                  padding: '16px 24px',
                  borderRadius: 8,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                🎓 Education
              </div>
              <div
                style={{
                  backgroundColor: '#374151',
                  color: '#d4d4d8',
                  padding: '16px 24px',
                  borderRadius: 8,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                💼 Experience
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            style={{
              height: 8,
              background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6)',
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
    console.log(`Failed to generate CV OG image: ${message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
