import { appendFile, fstat, writeFile, unlink, mkdir, rm, rename } from "fs";
import { readFile } from "fs/promises";

const filePath = "sample.txt";

// read file using async/await
// try {
//   const data = await readFile(filePath, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// // write file
// writeFile(filePath, "Hello World", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// // Append file
// appendFile(filePath, "\nAppended text", (err) => {  
//   if (err) {
//     console.error("Error appending file:", err);
//   } else {
//     console.log("File appended successfully");
//   }
// });

// unlink
// unlink(filePath, (err) => {
//   if (err) {
//     console.error("Error deleting file:", err);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

//mkdir
// mkdir("newDir", (err) => {
//   if (err) {
//     console.error("Error creating directory:", err);
//   } else {
//     console.log("Directory created successfully");
//   }
// });
// delete directory
// rm("newDir", { recursive: true, force: true }, (err) => {
//   if (err) {
//     console.error("Error deleting directory:", err);
//   } else {
//     console.log("Directory deleted successfully");
//   }
// });

// rename
rename(filePath, "renamedSample.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
  } else {
    console.log("File renamed successfully");
  }
});