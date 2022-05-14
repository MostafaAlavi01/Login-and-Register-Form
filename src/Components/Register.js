import React, { useEffect, useState } from "react";

import { validate } from "./validation";

import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,
  });

  const [errors, setErrors] = useState({});

  const [focus, setFocus] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccept") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const blurHandler = (event)=>{
    setFocus({...focus,[event.target.name]:true})

  }

  const submitHandler =(event)=>{
    event.preventDefault()
    if(!Object.keys(errors).length){
        console.log(data);
    }else{

        setFocus({
            name:true,
            email:true,
            password:true,
            confirmPassword:true,
            isAccept:true,
        })
    }
  }

  return (
    <div className=" flex justify-center items-center">
      <div className="  md:w-1/2 max-w-sm  bg-main-gray mt-14">
        <div className="flex flex-col justify-center items-center relative ">
          <div className=" bg-lock-icon h-20 w-20 flex border-4 border-white rounded-full absolute bottom-14 left-50 items-center justify-center ">
            <FontAwesomeIcon icon={faLock} size="2x" inverse />
          </div>

          <div className="bg-top-blue w-full h-24 flex  justify-center pt-6   ">
            <h1 className="pt-4 font-normal text-3xl text-white">
              Flat User Register
            </h1>
          </div>
        </div>

        <form onSubmit={submitHandler} className=" p-10 rounded-lg  min-w-full">
          <h1 className="text-center text-1xl mb-6 text-white">
            Please Register to acces all our features.
          </h1>
          <div>
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute mt-3 ml-4" />
              <input
                className="w-full bg-input  pl-10 py-2 rounded-lg focus:outline-none "
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="name"
                value={data.name}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
              {errors.name && focus.name && <span className="text-red-600">{errors.name}</span>}
            </div>

            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute mt-6 ml-4"
              />
              <input
                className="w-full bg-input  pl-10 py-2 mt-3 rounded-lg focus:outline-none "
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={data.email}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
              {errors.email && focus.email && <span className="text-red-600">{errors.email}</span>}
            </div>

            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute mt-6 ml-4 " />
              <input
                className="w-full bg-input pl-10 py-2 mt-3 rounded-lg focus:outline-none"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={data.password}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
              {errors.password && focus.password&& <span className="text-red-600">{errors.password}</span>}
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute mt-6 ml-4 " />
              <input
                className="w-full bg-input pl-10 py-2 mt-3 rounded-lg focus:outline-none"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="current-password"
                value={data.confirmPassword}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
              {errors.confirmPassword && focus.confirmPassword && <span className="text-red-600">{errors.confirmPassword}</span>}
            </div>
            <div className="flex  mt-3">
              <input
                className="mt-1"
                type="checkbox"
                name="isAccept"
                value={data.isAccept}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
              <p className="ml-3 text-white">I accept term of privacy policy</p>
            </div>
            {errors.isAccept && focus.isAccept && <span className="text-red-600">{errors.isAccept}</span>}
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-login-btn rounded-lg px-4 p-2  text-white "
            disabled={!Object.keys(errors).length ? false : true}
          >
            Register
          </button>
        </form>

        <div className="relative flex pb-5 items-center">
          <div className="flex-grow border-t border-gray-400 ml-8"></div>
          <span className="flex-shrink mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400 mr-8"></div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <FontAwesomeIcon
              icon={faFacebookF}
              inverse
              className="absolute mt-3 ml-3 "
            />
            <button
              type="submit"
              className="bg-facebook-btn w-36 h-10 px-5 mr-3  text-white text-sm "
            >
              FaceBook Login
            </button>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faGooglePlusG}
              inverse
              className="absolute mt-3 ml-4 "
            />
            <button
              type="submit"
              className="bg-google-btn w-36 h-10 px-5 ml-3  text-white text-sm "
            >
              Google+ Login
            </button>
          </div>
        </div>
        <div className="flex justify-center py-5 ">
          <a href="#" className=" w-38 h-10 px-4 mr-1  text-white ">
            Login{" "}
          </a>
          <a href="#" className="w-38 h-10 px-4 ml-1  text-white ">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
