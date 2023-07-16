import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import UserDetails from "./Pages/Login/Components/UserDetails";

const Login = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const [user, setUser] = useState([]);
  const [details, setDetails] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const first=e.target.fullname.value;
    // const mid=e.target.email.value;
    // const last=e.target.password.value;
    // console.log("Username: " +first, "\n","Email: " +mid, "\n", "Password: "+last)
    console.log(details);
    user.push(details);
    setUser([...user, details]);
    console.log(user);
  };

  const navigate = useNavigate();

  return (
    // <div className='Soniya'>Soniya{a}
    // <button
    // onClick={
    //     ()=>{setA(10)}
    // }
    // >Send</button>
    <>
      <div className="form">
        <form>
          <h3 align="center">Login</h3>

          <div className="Username">
            <label>Username: </label>
            <input
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
              type="text"
              name="fullname"
              placeholder=" full name"
              value={details.name}
            />
          </div>

          <div className="Email">
            <label>Email: </label>
            <input
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
              type="text"
              id="email"
              placeholder=" email"
              value={details.email}
            />
          </div>

          <div className="Password">
            <label>Password: </label>
            <input
              onChange={(e) => {
                setDetails({ ...details, password: e.target.value });
              }}
              type="text"
              id="password"
              placeholder=" password"
              value={details.password}
            />
          </div>

          <div className="Button">
            <input
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="Submit"
            />
          </div>
        </form>
        {/* <div className='data'>
        <p>Name:</p>
        <p>Email:</p>
        <p>Password:</p>
      </div> */}
        <p>
          Don't have account?{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>{" "}
        </p>
      </div>

      <UserDetails a={user} />
    </>
  );
};

export default Login;
