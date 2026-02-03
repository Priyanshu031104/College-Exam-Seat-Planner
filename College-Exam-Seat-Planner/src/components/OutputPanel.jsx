function OutputPanel({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <div>
      <h2>Allocation Results</h2>

      {results.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <strong>Total Students: {item.students}</strong>

          {item.error ? (
            <p style={{ color: "red" }}>{item.error}</p>
          ) : (
            <ul>
              {item.rooms.map((room, i) => (
                <li key={i}>
                  Room {room.roomId} | Capacity: {room.capacity} | Floor: {room.floorNo}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default OutputPanel;
