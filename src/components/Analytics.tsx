// This component handles analytics tracking
// You can integrate with services like Google Analytics, Fathom, Plausible, etc.

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Example tracking ID - replace with your actual ID
const GA_TRACKING_ID = "G-XXXXXXXXXX";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track page views in production
    if (process.env.NODE_ENV !== "production") return;
    
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    // Track page view
    window.gtag?.("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// You can also add these utility functions

// Track specific events
export function trackEvent(action: string, category: string, label: string, value?: number) {
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Track user actions
export function trackUserAction(action: string, additionalData = {}) {
  window.gtag?.("event", action, additionalData);
}