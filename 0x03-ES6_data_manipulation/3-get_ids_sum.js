function sum(total, student) {
  return total + student.id;
}

export default function getStudentIdsSum(students) {
  return students.reduce(sum, 0);
}
