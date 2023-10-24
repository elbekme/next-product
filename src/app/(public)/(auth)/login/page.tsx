"use client";

import { setCookie } from "cookies-next";
import { ECOMMERCE_ROLE, ECOMMERCE_TOKEN } from "@/constants";
import request from "@/server";
import { useAppDispatch } from "@/redux/hooks";
import { setIsAuthenticated, setRole } from "@/redux/slices/authSlice";
import { useRouter } from "../../../../../node_modules/next/navigation";
import { message } from 'antd';
type FieldType = {
  username?: string;
  password?: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const userData = {
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      };
      const {
        data: { accesstoken, user },
      } = await request.post("auth/login", userData);
      setCookie(ECOMMERCE_TOKEN, accesstoken);
      setCookie(ECOMMERCE_ROLE, user.role);
      router.push('/admin');
      message.success("You are admin !");
      dispatch(setIsAuthenticated(true));
      dispatch(setRole(user.role));
    }catch(err){
      message.warning("Please check Username or Password !");
    }
     finally {
    }
  };
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <form
        className="max-w-[500px] w-full text-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full mb-3 block border-2 py-2 px-3 border-slate-300"
          placeholder="username"
          name="username"
        />
        <input
          type="text"
          className="w-full mb-3 block border-2 py-2 px-3 border-slate-300"
          placeholder="password"
          name="password"
        />
        <button type="submit" className="rounded-full duration-300 bg-sky-500 hover:bg-sky-700 text-white px-12 py-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
