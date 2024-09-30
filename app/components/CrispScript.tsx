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
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '1f275037-ca55-460f-841b-a7c70d5d03b6';
    (() => {
      const script = document.createElement('script');
      script.src = 'https://client.crisp.chat/l.js';
      script.async = true;
      document.getElementsByTagName('body')[0]!.appendChild(script);
    })();
  }, []);

  return null;
}
