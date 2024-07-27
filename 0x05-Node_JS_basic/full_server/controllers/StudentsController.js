import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    try {
      const students = await readDatabase(path);
      let responseText = 'This is the list of our students\n';
      Object.entries(students).sort().forEach(([field, names]) => {
        responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });
      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const path = process.argv[2];
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(path);
      if (!students[major]) {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }
      const names = students[major].join(', ');
      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
