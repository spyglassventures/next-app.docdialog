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

        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1');
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
