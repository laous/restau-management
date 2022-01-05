import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../app/features/customersSlice";
import { removeReservation } from "../app/features/reservationsSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();
  const customer = {
    name: name,
    id: Math.random() * index + "",
    food: ["Steak"],
  };
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(addCustomer(customer));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}

export default ReservationCard;
