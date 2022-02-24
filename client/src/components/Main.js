import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Main2 from "../components/Main2";

const Main = () => {
  return (
    <>
      <div className="container containerr">
        <div className="row p-5">
          <div className="col-5">
            <h1>
              <b>
                How To Change The World: A practical blog for impractical
                people.
              </b>
            </h1>

            <h6 className="mt-5">
              Connecting ideas and people – how talk can change our lives. So
              <b> Blog your amazing moments with us</b>{" "}
            </h6>

            <div className="mt-4">
              <Link
                to="/createpost"
                className="text-decoration-none shadow button px-md-5 py-2"
              >
                <b>Create a free Blog</b>
              </Link>
            </div>
          </div>

          <div className="col-7">
            <img
              className="img-fluid"
              src="https://secure.skypeassets.com/content/dam/scom/blogs/marvel/homepage-desktop_1.png"
              alt=""
            />
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default Main;
