import React from "react";
import tourImg from "../../../Media/discount.png";

const MultiToursDiscount = () => {
  return (
    <div className="container py-5 bg-grey">
      <h4 className="text-danger">Multi Tours</h4>
      <h2>Discount on Quantity</h2>
      <p className="fs-3">
        <span className="text-danger">10%</span> Discount on 2nd Tour &{" "}
        <span className="text-danger">20%</span> Discount on 3rd+ Tour
      </p>
      <img src={tourImg} width="100%" alt="" />
    </div>
  );
};

export default MultiToursDiscount;
