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
