import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  // State declaration for Services
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetching Services data
    fetch("https://immense-wildwood-76819.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container py-5">
      <h2>
        We've Got Some<span className="text-danger"> Great Deals</span>
      </h2>
      {services.length === 0 ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-5 py-5">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
