import { brand } from "@/lib/brand";

export const HeaderBar = () => (
  <header className="glass-panel mx-auto mb-10 flex w-full max-w-6xl items-center justify-between rounded-[30px] border border-white/20 px-6 py-4 text-sm text-white">
    <div>
      <span className="text-xs uppercase tracking-[0.4em] text-white/50">
        {brand.tagline}
      </span>
      <p className="text-lg font-semibold text-white">{brand.name}</p>
    </div>
    <nav aria-label="Main" className="hidden gap-6 text-white/70 md:flex">
      <a href="#flow" className="hover:text-white">
        Flow
      </a>
      <a href="#cases" className="hover:text-white">
        Cases
      </a>
      <a href="#yandex" className="hover:text-white">
        Yandex
      </a>
    </nav>
    <a
      href="tel:+78007006050"
      className="ios-spring rounded-full bg-white/20 px-4 py-2 text-sm"
    >
      +7 800 700-60-50
    </a>
  </header>
);

HeaderBar.displayName = "HeaderBar";
