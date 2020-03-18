export { fetchMembers  } from "./fetchMembers";
export { setPage } from "./setPage";
export * from './clearMembers';

export interface BaseAction {
    type: string;
    payload: any;
  }