# 🤝 Руководство для разработчиков

## Архитектура проекта

### Atomic Design принцип

Все компоненты организованы по методологии Atomic Design:

#### Atoms (Атомы)
Базовые компоненты, которые нельзя разделить дальше:
- `Button` - кнопки с iOS стилем
- `Card` - glassmorphism карточки
- `Input` - поля ввода
- `Badge` - бейджи и лейблы

#### Molecules (Молекулы)
Комбинации атомов:
- `ProductCard` - карточка товара (Card + Button + Badge)
- `Navigation` - навигационное меню
- `Hero` - героическая секция
- `ContactForm` - форма контактов (Inputs + Button)

#### Organisms (Организмы)
Сложные компоненты из молекул и атомов:
- `CatalogSection` - раздел каталога
- `AboutSection` - раздел о компании
- `ContactsSection` - раздел контактов
- `Footer` - подвал сайта

### TypeScript Guidelines

#### Строгая типизация
```typescript
// ✅ Хорошо
interface Product {
  id: string;
  name: string;
  price: number;
}

// ❌ Плохо
const product: any = { ... }
```

#### Props типизация
```typescript
// ✅ Хорошо
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

// ❌ Плохо
export interface ButtonProps {
  variant?: string;
  size?: string;
}
```

### Стайл гайд

#### Именование компонентов
```typescript
// ✅ Хорошо
export const ProductCard = () => { ... }

// ❌ Плохо
export const product_card = () => { ... }
export const productCard = () => { ... }
```

#### Организация импортов
```typescript
// 1. React и внешние библиотеки
import { useState } from 'react';
import { motion } from 'framer-motion';

// 2. Внутренние компоненты
import { Button } from '@/components/atoms/Button';

// 3. Утилиты и типы
import { cn } from '@/lib/utils';
import type { Product } from '@/types';

// 4. Стили (если нужны)
import styles from './Component.module.css';
```

#### Структура компонента
```typescript
/**
 * @fileoverview Описание компонента
 * @version 1.0.0
 */

'use client'; // Если нужно

import { ... } from '...';

export interface ComponentProps {
  // Props типы
}

/**
 * Описание компонента в JSDoc
 */
export const Component = ({ prop1, prop2 }: ComponentProps) => {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. Handlers
  const handleClick = () => { ... };
  
  // 3. Effects
  useEffect(() => { ... }, []);
  
  // 4. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

## Работа с анимациями

### Framer Motion паттерны

#### Базовая анимация появления
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

#### Анимация при скролле
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### iOS-style кнопка
```typescript
<motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
  Click me
</motion.button>
```

### Timing functions для iOS эффектов

```css
/* Плавное замедление (iOS default) */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Spring эффект */
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

/* Резкое начало, плавное окончание */
transition: all 0.4s cubic-bezier(0.4, 0, 1, 1);
```

## Glassmorphism эффекты

### Базовый glass эффект
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}
```

### Темный glass эффект
```css
.glass-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Интенсивный blur
```css
.glass-intense {
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
}
```

## Performance оптимизация

### Image оптимизация
```typescript
// ✅ Хорошо - используйте Next.js Image
import Image from 'next/image';

<Image
  src="/product.jpg"
  alt="Product"
  width={800}
  height={800}
  priority={false} // true для hero images
  quality={85}
/>

// ❌ Плохо
<img src="/product.jpg" alt="Product" />
```

### Lazy loading компонентов
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Если не нужен SSR
});
```

### Мемоизация
```typescript
// Для дорогих вычислений
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Для функций-коллбэков
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// Для компонентов
const MemoizedComponent = memo(Component);
```

## Accessibility (A11y)

### Обязательные атрибуты
```typescript
// Кнопки
<button
  type="button"
  aria-label="Закрыть меню"
  aria-expanded={isOpen}
>
  X
</button>

// Изображения
<img src="..." alt="Описание изображения" />

// Формы
<label htmlFor="name">Имя</label>
<input id="name" type="text" />

// Навигация
<nav aria-label="Основная навигация">
  ...
</nav>
```

### Keyboard navigation
```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeModal();
  }
  if (e.key === 'Enter' || e.key === ' ') {
    handleAction();
  }
};
```

## Testing (будущее)

### Unit тесты
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByText('Click').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Git workflow

### Branch naming
```
feature/add-product-page
fix/navigation-mobile
refactor/optimize-images
docs/update-readme
```

### Commit messages
```
feat: добавлена страница товара
fix: исправлена навигация на мобильных
refactor: оптимизированы изображения
docs: обновлен README
style: форматирование кода
test: добавлены тесты для Button
chore: обновлены зависимости
```

### Pull Request template
```markdown
## Описание
Краткое описание изменений

## Тип изменения
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Код прошел линтер
- [ ] Добавлены типы TypeScript
- [ ] Компоненты документированы
- [ ] Проверено на мобильных
- [ ] Оптимизирована производительность
```

## Code Review Guidelines

### Что проверять:

1. **TypeScript типы** - все ли типизировано?
2. **Performance** - нет ли ненужных ререндеров?
3. **Accessibility** - доступен ли компонент?
4. **Responsive** - работает ли на всех экранах?
5. **Animations** - плавные ли переходы?
6. **Code style** - соответствует ли стайл-гайду?

### Комментарии в PR:

```
✅ LGTM (Looks Good To Me) - одобрено
💭 Suggestion - предложение
❓ Question - вопрос
🐛 Bug - обнаружен баг
⚠️ Warning - предупреждение
```

## Полезные команды

```bash
# Проверка типов
npm run type-check

# Линтинг
npm run lint

# Форматирование
npx prettier --write .

# Анализ bundle size
npm run build && npm run analyze

# Проверка производительности
npm run lighthouse
```

## Ресурсы

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

---

**Happy Coding! 🚀**
