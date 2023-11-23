import { RoutesConstants } from '@Constants/Core';
import { LinkType } from '@Utils/types';

export const headerOptions: LinkType[] = [
  { path: RoutesConstants.LandingPage, name: 'header.links.home', sessionRequired: false },
  { path: RoutesConstants.Library, name: 'header.links.library', sessionRequired: false },
  { path: RoutesConstants.Chat, name: 'header.links.chat', sessionRequired: true },
  { path: RoutesConstants.Dashboard, name: 'header.links.dashboard', sessionRequired: true },
];
