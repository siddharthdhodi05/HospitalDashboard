import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Age: "",
  });

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    dispatch(setInput(user))
    //navigate("/dash")
  }

  return (
    <div className="h-screen p-4 flex items-center justify-center">
      <div className="min-w-96 mx-auto flex justify-center items-center h-screen">
      <div
        className="w-full max-w-md p-6 rounded-lg bg-blue-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100
"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Patient Register Form
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-5">
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Enter your name"
              value={user.Name}
              onChange={(e)=>setUser({...user,Name:e.target.value})}
            />
          </div>

          {/* Age Field */}
          <div className="mb-5">
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Enter your age"
              value={user.Age}
              onChange={(e)=>setUser({...user,Age:e.target.value})}
            />
          </div>

          {/* File Upload */}
          <div className="mb-5">
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Patient's Report
            </label>
            <input
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none hover:border-blue-500"
              id="file_input"
              type="file"
            />
            <p className="mt-2 text-sm text-gray-800">
              Upload patient's medical report in PDF or image format.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="text-white w-full bg-black font-medium rounded-lg text-lg px-6 py-3 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default InputForm;
