import roomsData from '../../AllRooms'

const HotelList = () => {
  return (
    <div style={{
      maxWidth: "900px", margin: "20px auto", padding: "10px", fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{
        textAlign: "center", marginBottom: "30px"
      }}>
        Available Hotels
      </h1>
      {roomsData.map((room) => (<div style={{ display: "flex", gap: "20px", marginBottom: "25px", padding: "15px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: "8px", backgroundColor: room.isAvailable ? "#e0ffe0" : "#ffe0e0", alignItems: "center" }} key={room.id}>
        <img src={room.images} style={{ width: "150px", height: "100px", objectFit: "cover", borderRadius: "8px" }} />
        <div style={{ flexGrow: 1 }}>
          <h3 style={{ margin: "0 0 8px 0", color: room.isAvailable ? "#2e7d32" : "#c62828" }}>{room.hotel}</h3>
          <p style={{ margin: "4px 0", color: "#555" }}><strong>City:</strong> {room.city}</p>
          <p style={{ margin: "4px 0", color: "#555" }}><strong>Room Type:</strong> {room.roomType}</p>
          <p style={{ margin: "4px 0", color: "#555" }}><strong>Price Per Night:</strong> {room.pricePerNight}</p>
          <p style={{ margin: "4px 0", color: "#555" }}>
            <strong>
              Rating:
            </strong> {room.rating}
          </p>
        </div>
      </div>))}
    </div>
  )
}

export default HotelList
