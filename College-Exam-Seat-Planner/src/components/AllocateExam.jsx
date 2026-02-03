import { useState } from "react";

function AllocateExam({ allocate }) {
  const [students, setStudents] = useState("");

  const handleClick = () => {
    if (!students || students <= 0) {
      alert("Enter valid number of students");
      return;
    }
    allocate(Number(students));
  };

  return (
    <div>
      <h2>Allocate Exam Seats</h2>
      <input
        type="number"
        placeholder="Total Students"
        value={students}
        onChange={(e) => setStudents(e.target.value)}
      />
      <button onClick={handleClick}>Allocate</button>
      <hr />
    </div>
  );
}

export default AllocateExam;
