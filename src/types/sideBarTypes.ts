
export type children = {
  title?: string;
  navigationTo?: string;
}

export type userDetails = {
  profileImage?: string;
  userName?: string;
}
export type MenuItems = {
  title: string;
  navigationTo: string;
  icon: string;
  children: children[];
}
