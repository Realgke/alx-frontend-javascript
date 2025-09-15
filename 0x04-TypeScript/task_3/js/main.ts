// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

// Create a row
const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

// Insert row and get new ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
