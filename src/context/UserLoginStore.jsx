import React, { useEffect, useState } from "react";
import { loginContext } from "./loginContext";
import axios from "axios";

function LoginStore({ children }) {
  let [status, setStatus] = useState(false);
  let [err, setErr] = useState("");
  let [user, setUser] = useState(null);
  const loginuser = async (data) => {
    await axios
      .get(`http://localhost:3000/users?rollno=${data.roll}`)
      .then((res) => {
        if (res.data.length === 0) {
          setErr("User not found");
          return;
        }
        else if (res.data[0].password != data.pass) {
          setErr("Wrong Password");
          return;
        }
        else{
            setUser(res.data[0]);
            setErr("");
            setStatus(true);
        }
      }).catch((err) => {
        console.log(err);
      });
  };
  const logoutuser = () => {
    setUser(null);
    setStatus(false);
  };
  return (
    <loginContext.Provider
      value={{ loginuser, logoutuser, status, setStatus, err, setErr , user }}
    >
      {children}
    </loginContext.Provider>
  );
}

export default LoginStore;
