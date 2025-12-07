export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: 'code' | 'layout' | 'cpu' | 'database' | 'globe';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
}