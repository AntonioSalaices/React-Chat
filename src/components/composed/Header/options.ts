import { LinkType } from '@Utils/types';

export const headerOptions: LinkType[] = [
  { path: '/landing-page', name: 'header.links.home', sessionRequired: false },
  { path: 'library', name: 'header.links.library', sessionRequired: false },
  { path: 'chat', name: 'header.links.chat', sessionRequired: true },
  { path: '', name: 'header.links.dashboard', sessionRequired: true },
];
