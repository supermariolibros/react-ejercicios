
import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  memberList: string;
  member: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  memberList: '/memberList',
  member: '/member/:username',
};

type NavigationFunction = (username: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'member'> {
  member: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  member: username => generatePath(switchRoutes.member, { username }),
};