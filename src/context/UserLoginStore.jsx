import React, { useEffect, useState } from "react";
import { loginContext } from "./loginContext";
import axios from "axios";

function LoginStore({ children }) {
  let [status, setStatus] = useState(false);
  let [err, setErr] = useState("");
  let user = sessionStorage.getItem("user");
  useEffect(() => {
    if (user === null) setStatus(false);
    else setStatus(true);
  }, [user]);
  const loginuser = async (data) => {
    await axios
      .get(`http://localhost:3000/users?rollno=${data.roll}`)
      .then((res) => {
        if (res.data.length === 0) {
          setErr("User not found");
          return;
        } else if (res.data[0].password != data.pass) {
          setErr("Wrong Password");
          return;
        } else {
          sessionStorage.setItem("user", JSON.stringify(res.data[0]));
          setErr("");
          setStatus(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logoutuser = () => {
    setStatus(false);
    sessionStorage.removeItem("user");
  };
  return (
    <loginContext.Provider
      value={{ loginuser, logoutuser, status, setStatus, err, setErr }}
    >
      {children}
    </loginContext.Provider>
  );
}

export default LoginStore;
