import { useState } from "react";

function AddClassroom({ addClassroom }) {
  const [roomId, setRoomId] = useState("");
  const [capacity, setCapacity] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [nearWashroom, setNearWashroom] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomId || !capacity || !floorNo) {
      alert("Please fill all required fields");
      return;
    }

    addClassroom({
      roomId,
      capacity: Number(capacity),
      floorNo: Number(floorNo),
      nearWashroom,
    });

    setRoomId("");
    setCapacity("");
    setFloorNo("");
    setNearWashroom(false);
  };

  return (
    <div>
      <h2>Add Classroom</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
        <input type="number" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        <input type="number" placeholder="Floor No" value={floorNo} onChange={(e) => setFloorNo(e.target.value)} />
        <label>
          <input type="checkbox" checked={nearWashroom} onChange={(e) => setNearWashroom(e.target.checked)} />
          Near Washroom
        </label>
        <br />
        <button type="submit">Add Classroom</button>
      </form>
      <hr />
    </div>
  );
}

export default AddClassroom;
