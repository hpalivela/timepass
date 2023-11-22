import React, { useState } from "react";

const Login = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then((res)=>{if(res.ok){ return res.json()}})
    .then((data)=>{
        const token=data.token;
        localStorage.setItem('token',token);
        setError(false);
    })
    .catch((error)=>{setError(true);
    console.log(error)}
    )
    // console.log('successful')
  };
  return (
    <div>
      <center>
        {error && <h1>INVALID</h1>}
        <form onSubmit={submitHandler}>
          <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
          ></input>
          <br />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          ></input>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </center>
    </div>
  );
};

export default Login;
