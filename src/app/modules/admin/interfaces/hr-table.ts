export interface HrTable {
  name: string;
  email: string;
  technology: string;
  updated: Date;
  active: boolean;
  employee: Employee;
}

export interface Employee {
  firstName: string;
  lastName: string;
  designation: string;
}
