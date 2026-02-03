function ClassroomList({ classrooms }) {
  return (
    <div>
      <h2>Classroom List</h2>

      {classrooms.length === 0 ? (
        <p>No classrooms added yet.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Room ID</th>
              <th>Capacity</th>
              <th>Floor</th>
              <th>Near Washroom</th>
            </tr>
          </thead>
          <tbody>
            {classrooms.map((room, index) => (
              <tr key={index}>
                <td>{room.roomId}</td>
                <td>{room.capacity}</td>
                <td>{room.floorNo}</td>
                <td>{room.nearWashroom ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <hr />
    </div>
  );
}

export default ClassroomList;
