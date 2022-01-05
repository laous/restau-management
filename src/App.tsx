import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./app/features/reservationsSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const dispatch = useDispatch();
  const handleAddReservation = () => {
    if (!reservationNameInput) return false;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customers.value);

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard name={customer.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
