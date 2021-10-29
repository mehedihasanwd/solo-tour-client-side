import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className="my-4">
        Have any Queries?<span className="text-danger"> Write Us!</span>
      </h2>
      <div className="container">
        <form className="my-5">
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              textarea="write your message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
