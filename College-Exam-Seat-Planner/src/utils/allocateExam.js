export function allocateExam(totalStudents, classrooms) {
  let sorted = [...classrooms].sort(
    (a, b) => a.floorNo - b.floorNo || b.capacity - a.capacity
  );

  let allocated = [];
  let seats = 0;

  for (let room of sorted) {
    allocated.push(room);
    seats += room.capacity;
    if (seats >= totalStudents) break;
  }

  if (seats < totalStudents) {
    return null;
  }

  return allocated;
}
