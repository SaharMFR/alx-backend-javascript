export default function getListStudentIds(students) {
  let ids = [];
  if (students instanceof Array) {
    ids = students.map((stud) => stud.id);
  }
  return ids;
}
