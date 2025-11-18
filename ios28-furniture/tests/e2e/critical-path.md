# TailorGlass E2E · Critical Continuity Path

## Goal
Validate that a visitor can continue с iPhone сценария, изучить шоурум и отправить заявку, пока все аналитические хуки отрабатывают.

## Happy Path (Playwright / Ya.Browser)
1. **Load landing** at `/` with `VITE_YANDEX_METRICA_ID` stubbed → assert `ym` init request.
2. **Hero continuity check**: move pointer across hero-device → expect CSS vars `--continuity-x/y` to update (read via `page.evaluate`).
3. **CTA primary**: click «Рассчитать проект», intercept `ym(..., 'reachGoal', 'cta_primary')`.
4. **Showcase**: scroll to `#showcase`, ensure at least 3 cards visible, capture screenshot for design QA (iOS28 glass).
5. **Process timeline**: verify `Dень 14` stage text, ensuring GraphQL copy present.
6. **Form redirect**: click final CTA, confirm new tab with Yandex Forms URL, assert `target=_blank`.

## Resilience Cases
- Simulate `prefers-reduced-motion` → parallax vars should stay `0`.
- Force `window.ym` undefined → UI still usable, ads slot shows placeholder label.

## Instrumentation
- Capture `performance.getEntriesByType('resource')` to ensure `https://mc.yandex.ru/metrika/tag.js` loaded under 500 ms.
- Emit `dataLayer` snapshot for each CTA (attach to report artifact).
