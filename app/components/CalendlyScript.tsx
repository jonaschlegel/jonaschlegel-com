'use client';

import Script from 'next/script';

export default function CalendlyScript() {
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Calendly script loaded successfully');
        }}
        onError={() => {
          console.error('Failed to load Calendly script');
        }}
      />
    </>
  );
}
