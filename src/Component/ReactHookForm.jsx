import React from "react";
import {useForm} from 'react-hook-form'

export default function ReactHookForm() {

    const{register,handleSubmit}=useForm()
    const getdata = (data)=>{
        console.log(data);
    }
  return (
    <div>
      <form onSubmit={handleSubmit(getdata)}>
        <label>Name: </label>
        <input {...register("name")} type="text" placeholder="Enter your name" />
        <br />
        <br />

        <label>Email: </label>
        <input {...register("email")} type="text" placeholder="Enter your email" />
        <br />
        <br />

        <label>Username: </label>
        <input {...register("username")} type="text" placeholder="Enter Your User Name" />
        <br />
        <br />

        <label>Password: </label>
        <input {...register("password")} type="password" placeholder="Enter Your Password" />
        <br />
        <br />

        <button
          type="submit"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}


