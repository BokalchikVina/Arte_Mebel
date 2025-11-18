import { brand } from "@/lib/brand";

export const FooterCTA = () => (
  <footer className="mt-16 flex flex-col items-center gap-4 rounded-[28px] border border-white/15 bg-white/5 p-6 text-center text-white">
    <p className="text-xs uppercase tracking-[0.4em] text-white/50">
      Синхронизируйтесь с {brand.name}
    </p>
    <p className="text-2xl font-semibold">
      Передайте нам свой мудборд, и мы вернём смету с анимациями iOS.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="mailto:hey@atelierflow.ru"
        className="ios-spring rounded-full bg-white/20 px-6 py-3 text-sm"
      >
        hey@atelierflow.ru
      </a>
      <a
        href="https://t.me/atelierflow"
        target="_blank"
        rel="noreferrer"
        className="ios-spring rounded-full border border-white/30 px-6 py-3 text-sm"
      >
        Telegram
      </a>
    </div>
  </footer>
);

FooterCTA.displayName = "FooterCTA";
