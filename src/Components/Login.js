import React from "react";

const Login = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="  md:w-1/2 max-w-sm  bg-red-500 mt-20">
                <div className="flex flex-col justify-center items-center relative ">

                    <div className=" bg-green-600 h-20 w-20 flex border-4 border-white rounded-full absolute bottom-14 left-50 ">              
                    </div>

                    <div className="bg-blue-700 w-full h-24 flex  justify-center pt-6   ">
                        <h1 className="pt-4 font-normal text-3xl text-white">Flat User Login</h1>
                    </div>
                </div>
    

        <form className=" p-10 rounded-lg  min-w-full">
          <h1 className="text-center text-1xl mb-6 text-white">
          Please Login to acces all our features.
          </h1>
          <div>

            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
            />

            <input
              className="w-full bg-gray-100 px-4 py-2 mt-3 rounded-lg focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-yellow-600 rounded-lg px-4 p-2  text-white "
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
            <button type="submit" className="bg-indigo-100 w-36 h-10 px-4 mr-2  text-gray-800 ">FaceBook Login</button>
            <button type="submit" className="bg-indigo-100 w-36 h-10 px-4 ml-2  text-gray-800 ">Google+ Login</button>
        </div>
        <div className="flex justify-center py-5 ">
        <a href="#" className=" w-38 h-10 px-4 mr-1  text-gray-800 ">Create an account</a>
        <a href="#" className="w-38 h-10 px-4 ml-1  text-gray-800 ">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
