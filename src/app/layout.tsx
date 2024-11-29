"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; // Import usePathname for Next.js routing
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Use usePathname to get the current route
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  useEffect(() => {
    // Automatically show header and footer if the page is /intern
    if (pathname === '/intern') {
      setShowHeaderFooter(false);
    }
  }, [pathname]);

  return (
    <html suppressHydrationWarning lang="de">
      <head>
        <script
          async
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="98bb2639-135c-41cd-ad90-cd6bbea245ef"
          data-blockingmode="auto"
          type="text/javascript">
        </script>

        {/* Google Ads (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-955937831"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-955937831');
            `,
          }}
        />

        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-18RG2WZD43"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-18RG2WZD43');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-WSW5M6P8');`,
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '284230399020241');
              fbq('track', 'PageView');
            `,
          }}
        />

      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSW5M6P8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=284230399020241&ev=PageView&noscript=1"
          />
        </noscript>


        <Providers>
          {/* The toggle switch is hidden and only renders header/footer based on state */}
          {showHeaderFooter && <Header />}
          {children}
          {showHeaderFooter && <Footer />}
          <Analytics mode={'production'} />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
