import React from "react";
import "./Main2.css";
import { Link } from "react-router-dom";

const Main2 = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="py-5 text-center" style={{ backgroundColor: "black" }}>
        <div>
          <h1 style={{ color: "white" }}>
            <b>Create Your Own Blog Today</b>
          </h1>
        </div>
        <div className="mt-4" style={{ color: "white" }}>
          <p>
            Whether you're a foodie, fashionista, a budding entrepreneur or
            world <br />
            traveler, choose a designer-made template to start blogging today.{" "}
          </p>
        </div>

        <div className="mt-5">
          <Link to="/createpost" className="button px-4 py-3 text-decoration-none">
            Start Now
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Main2;
