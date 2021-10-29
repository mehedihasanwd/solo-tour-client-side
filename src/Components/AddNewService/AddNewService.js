import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddNewService.css";

/* 
https://immense-wildwood-76819.herokuapp.com/tours
http://localhost:5000/tours
*/

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://immense-wildwood-76819.herokuapp.com/tours", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added a new service successfully");
          reset();
        }
      });
  };
  return (
    <div className="container new-service">
      <div className="add-new-service py-4">
        <h1 className="mt-3 mb-5">Add a new Tour</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name..."
          />
          <textarea {...register("desc")} placeholder="Description..." />
          <input type="number" {...register("price")} placeholder="Price..." />
          <input {...register("img")} placeholder="Image url..." />
          <input className="btn-submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNewService;
