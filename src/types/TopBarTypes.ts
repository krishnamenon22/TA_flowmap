export interface DropdownOption {
  label: string;
  value: string;
}

export interface Notification {
  count: number;
}

export interface TopNavProps {
  companyName: string;
  dropdownOptions: DropdownOption[];
  notification: Notification;
}
