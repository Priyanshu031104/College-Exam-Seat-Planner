import { useState } from "react";
import AddClassroom from "./components/AddClassroom";
import ClassroomList from "./components/ClassroomList";
import AllocateExam from "./components/AllocateExam";
import OutputPanel from "./components/OutputPanel";
import { allocateExam } from "./utils/allocateExam";

function App() {
  const [classrooms, setClassrooms] = useState([]);
  const [allocationResults, setAllocationResults] = useState([]);


  const addClassroom = (room) => {
    setClassrooms([...classrooms, room]);
  };

  const handleAllocation = (totalStudents) => {
  const result = allocateExam(totalStudents, classrooms);

  if (!result) {
    setAllocationResults([
      ...allocationResults,
      {
        students: totalStudents,
        error: "Not enough seats available",
      },
    ]);
  } else {
    setAllocationResults([
      ...allocationResults,
      {
        students: totalStudents,
        rooms: result,
      },
    ]);
  }
};


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>College Exam Seat Planner</h1>

      <AddClassroom addClassroom={addClassroom} />
      <ClassroomList classrooms={classrooms} />
      <AllocateExam allocate={handleAllocation} />
      <OutputPanel results={allocationResults} />
    </div>
  );
}

export default App;
