// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

//create two students
const student1: Student = {
  firstName: "Wanjohi",
  lastName: "Wanjiru",
  age: 26,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Mombasa",
};

// 3. Create an array with the students
const studentsList: Student[] = [student1, student2];

// 4. Create a table using plain JavaScript (DOM API)
const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

// Add a header row
const headerRow = document.createElement("tr");
["First Name", "Location"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "4px";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Add a row for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "4px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "4px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// 5. Append the table to the document body
document.body.appendChild(table);
