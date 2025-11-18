import { ecosystemPods } from "@/lib/content/homepage";

export const EcosystemSection = () => (
  <section
    id="cases"
    className="grid gap-6 rounded-[36px] border border-white/20 bg-white/5 p-8 text-white md:grid-cols-[1.3fr_1fr]"
  >
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">
        API · Federation · Event Sourcing
      </p>
      <h2 className="mt-3 text-3xl font-semibold">
        Экосистема сайтов синхронизирована через GraphQL Federation и Yandex API Gateway.
      </h2>
      <ul className="mt-6 space-y-4 text-sm text-white/80">
        <li>
          JWT/OAuth2 авторизация едина для всех сайтов и приложений. Токены освежаются через
          Yandex Identity Platform.
        </li>
        <li>
          Глобальная схема данных описана в GraphQL SDL и собирается федерацией — удобно подключать
          новые Pods без даунтайма.
        </li>
        <li>
          Все события (лиды, оплаты, монтаж) пишутся в Event Store и раздаются через NATS/RabbitMQ
          с idempotency keys.
        </li>
      </ul>
    </div>
    <div className="space-y-4">
      {ecosystemPods.map((pod) => (
        <article
          key={pod.title}
          className="glass-panel rounded-3xl border border-white/15 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.3)]"
        >
          <h3 className="text-xl font-semibold">{pod.title}</h3>
          <p className="mt-2 text-sm text-white/80">{pod.description}</p>
        </article>
      ))}
    </div>
  </section>
);

EcosystemSection.displayName = "EcosystemSection";
