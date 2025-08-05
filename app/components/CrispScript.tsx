'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function CrispScript() {
  useEffect(() => {
    try {
      console.log('Initializing Crisp chat...');
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = '1f275037-ca55-460f-841b-a7c70d5d03b6';

      // Enable safe mode to avoid warnings about shims
      window.$crisp.push(['safe', true]);

      const script = document.createElement('script');
      script.src = 'https://client.crisp.chat/l.js';
      script.async = true;
      script.onload = () => {
        console.log('Crisp chat loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Crisp chat script');
      };

      document.getElementsByTagName('body')[0]?.appendChild(script);
    } catch (error) {
      console.error('Error initializing Crisp:', error);
    }
  }, []);

  return null;
}
