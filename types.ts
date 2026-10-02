
export enum Page {
  HOME = 'home',
  APPS = 'apps',
  PRIVACY = 'privacy',
  TERMS = 'terms'
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}
