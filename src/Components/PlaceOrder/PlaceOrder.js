import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { id } = useParams();
  // console.log(id);

  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState();

  useEffect(() => {
    fetch("https://immense-wildwood-76819.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  useEffect(() => {
    const findTours = tours.find((item) => item.id === parseInt(id));
    setTour(findTours);
  }, [tours]);

  console.log(tours);

  return (
    <div className="min-height py-4">
      <h2>This is Place Order</h2>
      <h3>Service Id: {tour?.id}</h3>
    </div>
  );
};

export default PlaceOrder;
