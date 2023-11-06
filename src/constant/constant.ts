import { Bootstrap5, Tailwind, TailwindExport } from './templates';

export const Template = {
  tailwind: {
    content: (html: string) => Tailwind(html),
  },
  tailwindExport: {
    content: (html: string) => TailwindExport(html),
  },
  bootstrap: {
    content: (html: string) => Bootstrap5(html),
  },
};
