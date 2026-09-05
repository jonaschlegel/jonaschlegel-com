import Script from 'next/script';

const crispWebsiteId = '1f275037-ca55-460f-841b-a7c70d5d03b6';

/** Loads Crisp chat during browser idle time without blocking the page. */
export default function CrispScript() {
  return (
    <>
      <Script id="crisp-configuration" strategy="afterInteractive">
        {`window.$crisp = window.$crisp || []; window.CRISP_WEBSITE_ID = '${crispWebsiteId}'; window.$crisp.push(['safe', true]);`}
      </Script>
      <Script
        id="crisp-chat"
        src="https://client.crisp.chat/l.js"
        strategy="lazyOnload"
      />
    </>
  );
}
