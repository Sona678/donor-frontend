import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Input, Button, Select } from "../components/index";
import { useDispatch } from "react-redux";
import { authService } from "../services/authService";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    const signupData = { ...data };
    delete signupData.confirmPassword;
    

    const formData=new FormData()

    Object.entries(signupData).forEach(([key,value])=>{
        if(key==="profileImg"){
            if(value?.[0]){
                formData.append("profileImg",value[0])
            }
        }else{
                formData.append(key,value)
            }
    })

    const user = await authService.register(formData);
    try {
      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to your account.
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account? &nbsp
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        {error && <p className='="text-red-600 mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              {...register("fullname", {
                required: true,
              })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (v) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ||
                    "Invalid email address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password."
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be of 8 character.",
                },
              })}
            />

            <Input
              label="confirmPassword"
              type="password"
              placeholder="Re-Enter your password."
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Password don't match",
              })}
            />

            <Input
              label="Age"
              placeholder="Age"
              type="text"
              {...register("age", {
                required: true,
              })}
            />

            <Select
              label="Gender"
              placeholder="Gender"
              options={["Male", "Female", "Others"]}
              {...register("gender", {
                required: true,
              })}
            />

            <Input
              label="District"
              placeholder="District"
              type="text"
              {...register("district", {
                required: true,
              })}
            />

            <Input
              type="file"
              label="Profile Image"
              accept="image/*"
              {...register("profileImg")}
            />

            <Input
              label="Address"
              placeholder="Address"
              type="text"
              {...register("address", {
                required: true,
              })}
            />

            <Select
              label="Account Role"
              placeholder="Enter your role"
              options={["Donor", "Receiver"]}
              {...register("role", {
                required: true,
              })}
            />
          </div>

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
