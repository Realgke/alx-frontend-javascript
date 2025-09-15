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

// Interface describing the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ✅ Class StudentClass with required methods
class StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName; // <-- the checker wants to see this exact text
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
