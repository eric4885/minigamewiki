import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GSC_ID = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

/** Inject GA4 only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set at build time. */
export function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

export function getGoogleSiteVerification(): string | undefined {
  return GSC_ID || undefined;
}
