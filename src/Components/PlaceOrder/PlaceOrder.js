import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import "./PlaceOrder.css";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState({});

  useEffect(() => {
    fetch("https://immense-wildwood-76819.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
      });
  }, []);

  useEffect(() => {
    const findTours = tours.find((tour) => tour._id === id);
    setTour(findTours);
  }, [tours, id]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const tourId = id;
    const name = tour.name;
    const img = tour.img;
    const desc = tour.desc;
    const price = tour.price;
    const ordersInfo = { email, tourId, name, desc, img, price };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ordersInfo),
    });
    alert("Order has beed placed");
  };

  return (
    <div className="min-height container py-4">
      <h2>Place Your Order</h2>
      <h3>Tour Id: {tour?.id}</h3>

      <div className="row row-cols-1 row-cols-md-2 g-2 py-5">
        <CardGroup>
          <Card className="shadow-lg">
            <Card.Img variant="top" height="300px" src={tour?.img} />
            <Card.Body className="p-3">
              <Card.Title>
                <span className="text-danger">Name: </span> {tour?.name}
              </Card.Title>
              <Card.Title>
                <span className="text-danger">Price: </span> ${tour?.price}
              </Card.Title>
              <Card.Text>{tour?.desc}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <div>
          <form onSubmit={handleOrderSubmit}>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              value={user.displayName || ""}
            />
            <input
              type="email"
              className="w-75 my-2 p-1"
              name=""
              id=""
              value={user.email || ""}
            />
            <textarea
              name=""
              placeholder="Address"
              id=""
              className="w-75"
              required
            ></textarea>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              required
              placeholder="City, Country"
            />
            <input className="w-75" type="submit" value="Place Order" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
