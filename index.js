const fs = require("fs");
const path = require("path");

const directoryPath = "./tokens"; // Replace with the path to your SVG files directory

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".svg")) {
      const oldFilePath = path.join(directoryPath, file);
      const lowercaseName = file.toLowerCase();
      const newFilePath = path.join(directoryPath, lowercaseName);

      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          console.error(`Error renaming ${file}:`, err);
        } else {
          console.log(`Renamed ${file} to ${lowercaseName}`);
        }
      });
    }
  });
});
