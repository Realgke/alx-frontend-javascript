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
