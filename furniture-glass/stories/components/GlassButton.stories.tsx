import type { Meta, StoryObj } from "@storybook/react";

import { GlassButton } from "@/components/atoms/GlassButton";

const meta: Meta<typeof GlassButton> = {
  title: "Atoms/GlassButton",
  component: GlassButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof GlassButton>;

export const Primary: Story = {
  args: {
    label: "Записаться",
    href: "https://wa.me/79999999999",
  },
};

export const Ghost: Story = {
  args: {
    label: "Получить мудборд",
    href: "#",
    variant: "ghost",
  },
};
