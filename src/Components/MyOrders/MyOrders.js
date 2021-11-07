import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://immense-wildwood-76819.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you wanna delete this?");
    if (confirm) {
      const url = `https://immense-wildwood-76819.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="container min-height py-4">
      <h2>My Orders</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {orders.map((order) => (
          <CardGroup key={order._id}>
            <Card className="shadow-lg">
              <Card.Img variant="top" height="300px" src={order?.img} />
              <Card.Body className="p-3">
                <Card.Title>
                  <span className="text-danger">Name: </span> {order?.name}
                </Card.Title>
                <Card.Title>
                  <span className="text-danger">Price: </span> ${order?.price}
                </Card.Title>
                <Card.Text>{order?.desc}</Card.Text>
                <button
                  className="btn-primary border-0 fs-5 py-1 rounded-1 px-5"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
