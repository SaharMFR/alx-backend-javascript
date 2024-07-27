import fs from 'fs';

export const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const students = lines.slice(1).map(line => line.split(','));
      const fields = {};

      students.forEach(([firstName, , , field]) => {
        if (fields[field]) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      });

      resolve(fields);
    });
  });
};
