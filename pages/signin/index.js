import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useMutation } from "react-query";
import axios from "axios";
const SignIn = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const addSignIn = async () => {
    return await axios.post("http://localhost:5000/signin", data);
  };
  const { mutate } = useMutation(addSignIn, {
    onSuccess: (data) => {
      alert("submitted");
    },
  });
  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <div>
      <h1 className="text-center">SIGN IN</h1>
      <div className="ml-[600px] my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              label="password"
              {...register("userpassword")}
              error={!!errors.userpassword}
              helperText={errors?.userpassword?.message}
              variant="outlined"
              sx={{ width: 250 }}
              size="small"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-500 text-white font-bold ml-[80px] "
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
