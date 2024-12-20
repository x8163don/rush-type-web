import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Legal',
      links: [
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://chromewebstore.google.com/detail/rushtype/mdiaogojdgljpfapolbgdlflobbagned', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
};
