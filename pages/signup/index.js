"use client";
import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Link from "next/link";
import { useMutation } from "react-query";
import axios from "axios";

const SignUp = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const addSignUp = async (data) => {
   return await axios.post("http://localhost:5000/signup",data);
  };
  const { mutate } = useMutation(addSignUp, {
    onSuccess: (data) => {
      alert('submitted')
      console.log(data,'900');
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <div>
      <h1 className="text-center ">SignUp</h1>

      <form className="ml-[650px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <TextField
            label="Name"
            {...register("username")}
            error={!!errors.username}
            helperText={errors?.username?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
        </div>
        <div className="my-5">
          <TextField
            label="Email"
            {...register("useremail")}
            error={!!errors.useremail}
            helperText={errors?.useremail?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
        </div>
        <div className="my-5">
          <TextField
            label="Password"
            {...register("userpassword")}
            error={!!errors.userpassword}
            helperText={errors?.userpassword?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
        </div>
        <p className="text-red-500">
          Already have an account? <Link href="/signin">Sign in</Link>
        </p>
        <Button
          type="submit"
          className="bg-blue-500 text-white font-bold ml-[80px] "
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
