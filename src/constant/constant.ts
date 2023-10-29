import { Bootstrap5, Tailwind } from './templates';

export const Template = {
  tailwind: {
    content: (html: string) => Tailwind(html),
  },
  bootstrap: {
    content: (html: string) => Bootstrap5(html),
  },
};
