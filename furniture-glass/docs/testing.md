# Тестовый комплект

## 1. Unit · `GlassButton`

```ts
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GlassButton } from "@/components/atoms/GlassButton";

describe("GlassButton", () => {
  it("renders primary button with label", () => {
    const { getByRole } = render(
      <GlassButton label="CTA" href="https://atelierflow.ru" />,
    );
    expect(getByRole("link", { name: "CTA" })).toBeVisible();
  });

  it("validates href formats (hash)", () => {
    expect(() => render(<GlassButton label="Scroll" href="#flow" />)).not.toThrow();
  });

  it("supports tel links", () => {
    const { getByRole } = render(
      <GlassButton label="Позвонить" href="tel:+78007006050" />,
    );
    expect(getByRole("link").getAttribute("href")).toBe("tel:+78007006050");
  });
});
```

## 2. Integration skeleton · `Flow`

```ts
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("Flow section exposes 3 timeline steps", () => {
  render(<Home />);
  const flow = screen.getByRole("region", { name: /Flow/i });
  expect(flow.querySelectorAll("[data-testid='timeline-step']")).toHaveLength(3);
});
```

> TODO: добавить `data-testid` в `TimelineStep` при подключении RTL.

## 3. E2E сценарий · критический путь

**Инструмент**: Playwright

1. `user.goto("/")`
2. Проверить видимость `HeroSection` и что `hero_impression` уходит (intercept `/api/telemetry`).
3. Клик по CTA «Запустить проект» → новая вкладка WhatsApp.
4. Свайпнуть (scroll) до блока «Экосистема» и убедиться, что карточки pods видны.
5. Перейти по ссылке «Посмотреть шоурум в Yandex Maps» и проверить редирект `maps.yandex.ru`.
