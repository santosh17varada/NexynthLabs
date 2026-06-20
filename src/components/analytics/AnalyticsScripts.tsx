import Script from "next/script";
import { getPublicAnalyticsConfig } from "@/lib/analytics/config";

/**
 * Loads third-party analytics snippets only when public env IDs are set.
 * No scripts render when all IDs are missing.
 */
export function AnalyticsScripts() {
  const config = getPublicAnalyticsConfig();

  if (!config.hasAnyProvider) {
    return null;
  }

  const { googleAnalytics, googleTagManager, metaPixel, linkedInInsight } =
    config;

  return (
    <>
      {googleTagManager.enabled && googleTagManager.containerId && (
        <Script id="nexynth-gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManager.containerId}');`}
        </Script>
      )}

      {googleAnalytics.enabled && googleAnalytics.measurementId && (
        <>
          <Script
            id="nexynth-ga-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="nexynth-ga-config" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${googleAnalytics.measurementId}',{send_page_view:true});`}
          </Script>
        </>
      )}

      {metaPixel.enabled && metaPixel.pixelId && (
        <Script id="nexynth-meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${metaPixel.pixelId}');fbq('track','PageView');`}
        </Script>
      )}

      {linkedInInsight.enabled && linkedInInsight.partnerId && (
        <Script id="nexynth-linkedin-insight" strategy="afterInteractive">
          {`_linkedin_partner_id='${linkedInInsight.partnerId}';
window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}var s=document.getElementsByTagName('script')[0];
var b=document.createElement('script');b.type='text/javascript';b.async=true;
b.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';
s.parentNode.insertBefore(b,s);})(window.lintrk);`}
        </Script>
      )}
    </>
  );
}
