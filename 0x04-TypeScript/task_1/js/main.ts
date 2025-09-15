export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// separate type for the destructured parameter
type NameParams = {
  firstName: string;
  lastName: string;
};

export function printTeacher({ firstName, lastName }: NameParams): string {
  return `${firstName}. ${lastName}`;
}

/* ---------- Interfaces for StudentClass ---------- */
// Describes the constructor signature
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Describes the instance (the methods/properties)
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/* ---------- Implementation ---------- */
export class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
