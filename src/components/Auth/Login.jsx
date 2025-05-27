import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("email", email );
    // console.log("password", password);
    handleLogin(email, password); 

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-4 text-xl px-10 outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-4 mt-3 text-xl px-10 outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter password..."
          />

          <button className="mt-7 border-none bg-emerald-600 hover:bg-emerald-700 rounded-full py-4 text-xl px-36 text-white outline-none  placeholder: text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
