export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}
