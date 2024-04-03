import React from "react";
import image from "../assets/loginImage.jpeg";
import logo from "../assets/ZamtelLogo.png";
import "./main.css";
import EmailIcon from "@mui/icons-material/Email";

function Login() {
  return (
    <div className="flex">
      <div
        className="flex-[0.4]"
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          width: "100%",
          objectFit: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex-[0.6] flex flex-col items-center justify-center">
        <img src={logo} alt="Zamtel Logo" className="h-20 w-20 mx-auto mt-5" />
        <h1 className="mt-2 text-3xl uppercase text-green-700 mb-10">
          Human Resource Management System
        </h1>
        <div className="border-2 border-purple-600 rounded-md w-[80%] flex flex-col items-center justify-center p-20">
          <h1 className="text-purple-600 text-xl bg-white -mt-[100px] mb-20 uppercase w-32 text-center ">Login</h1>
          <div className="w-full mb-5">
            <h3 className="text-purple-600">GN</h3>
          <input className="login_input" placeholder="Enter GN" />
          </div>

          <div className="w-full mb-20">
            <h3 className="text-purple-600">Password</h3>
          <input className="login_input" placeholder="Password" />
          </div>

          <button className="p-2 bg-purple-600 text-white w-[80%] rounded-lg">
            Sign In
          </button>
        </div>
        <h3 className="text-slate-400 my-10">&copy; Zamtel 2024 All Rights Reserved</h3>
      </div>
    </div>
  );
}

export default Login;
