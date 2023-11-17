import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import axios from "axios";
const SignIn = () => {
  const router = useRouter();
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  axios.defaults.withCredentials = true;
  const addSignIn = async (data) => {
    return await axios.post("http://localhost:5000/signin", data);
  };
  const { mutate, isError, isSuccess, data } = useMutation(addSignIn, {
    onSuccess: (data) => {
      alert("submitted");
      console.log(data, "signin");
      if (data.status === "Success") {
        if (data.role === "admin") {
          router.push("/dashboard");
        } else {
          router.push("/home");
        }
      }
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
