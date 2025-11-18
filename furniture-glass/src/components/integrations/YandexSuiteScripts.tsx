"use client";

import Script from "next/script";

import { brand } from "@/lib/brand";

export const YandexSuiteScripts = () => (
  <>
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j=0;j<document.scripts.length;j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0];
            k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(${brand.metrikaId}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `,
      }}
    />
    <noscript>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://mc.yandex.ru/watch/${brand.metrikaId}`}
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
    <Script
      id="yandex-direct-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,t){
            w[t]=w[t]||function(){(w[t].n=w[t].n||[]).push(arguments);};
            var f = d.getElementsByTagName(s)[0], k = d.createElement(s);
            k.async=1; k.src="https://mc.yandex.ru/metrika/tag.js";
            f.parentNode.insertBefore(k,f);
          })(window, document, "script", "yacounter");
          yacounter("${brand.directPixelId}", "hit");
        `,
      }}
    />
  </>
);

YandexSuiteScripts.displayName = "YandexSuiteScripts";
