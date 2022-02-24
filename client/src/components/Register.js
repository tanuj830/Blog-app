import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [userdata, setUserdata] = useState({});
  const [userExist, setUserExist] = useState(false);

  const history = useHistory()

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setUserdata({ ...userdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/signin/register", userdata)
      .then((res) => setUserExist(res.data));
  };

  console.log(userExist)

  return (
    <div>
      {/* <form action="post" onSubmit={handleSubmit}>
            <div>
                             <label>Name</label>
             <input type="text" name="name" onChange={handleChange}/>
         </div>

         <div>
         <label>E-mail</label>
             <input type="text" name="email" onChange={handleChange}/>
         </div>

         <div>
         <label>Username</label>
             <input type="text" name="username" onChange={handleChange}/>
         </div>

         <div>
         <label>Password</label>
             <input type="text" name="password" onChange={handleChange}/>
         </div>
{
    userExist ? <h6 className="text-danger">Username not available</h6> : null
}
         <button className=" text-light btn-outline-dark btn-primary btn ">Register</button>
         </form> */}

      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <div className="p-5 shadow" style={{ borderRadius: 10 }}>
            <div className="text-center">
              <h1>
                {" "}
                <b>Register</b>
              </h1>
              <hr />
            </div>
            <form
              className=" mt-4 d-flex-column text-center"
              action="post"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  className="mt-3 px-2 w-100"
                  placeholder="Name"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="email"
                  className="mt-3 px-2 w-100"
                  placeholder="E-mail"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="username"
                  className="mt-3 px-2 w-100"
                  placeholder="Username"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <div className="mt-3 d-flex flex-column">
                <div>
                  {/* <label className="mx-2">Password</label> */}
                  <input
                    type="text"
                    className="px-2 w-100"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    onChange={handleChange}
                  />

                </div>
                <div></div>
                {               
                            userExist ? 
                  <h6 className="text-danger">Username not available</h6>
                  
                : null
            }
         
             
                <button className=" mt-3 btn-outline-dark btn-primary btn text-light">
                  Register
                </button>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
