// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string; // can only be set when object is created
  readonly lastName: string; // can only be set when object is created
  fullTimeEmployee: boolean; // must always be defined
  yearsOfExperience?: number; // optional property
  location: string; // must always be defined
  [key: string]: any; // allows adding any extra property (like contract)
}

// 2. Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra property not explicitly defined in the interface
};

console.log(teacher3);
// ✅ New Directors interface that EXTENDS Teacher
interface Directors extends Teacher {
  numberOfReports: number; // required
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for the function type
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation (must be a classic function declaration)
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}
