import React, { useState } from "react";
import { login } from "../api/cart.api";
import useLoggedIn from "../hooks/useLoggedIn";

const Login = () => {
  const isLoggedIn = useLoggedIn();
  const [state, setState] = useState({
    showLogin: false,
    username: "sally",
    password: "123",
  });

  if (isLoggedIn) return null;

  return (
    <>
      <span
        onClick={() =>
          setState((prev) => ({ ...prev, showLogin: !prev.showLogin }))
        }
      >
        <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
      </span>
      {state.showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white"
          style={{ width: 300, top: "2rem" }}
        >
          <input
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={({ target }) =>
              setState((prev) => ({ ...prev, username: target.value }))
            }
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={({ target }) =>
              setState((prev) => ({ ...prev, password: target.value }))
            }
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md w-full"
            onClick={() => login(state.username, state.password)}
            id="loginBtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
