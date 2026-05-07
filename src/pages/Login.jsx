import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../Api/Userapi";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showpassword, setShowpassword] = useState(false);
    const forgot=() => {
        alert("contact our team")
    };
  const onSubmit = async (data) => {
    setApiError("");
    setLoading(true);

    const credentials = {
      userName: data.userName,
      password: data.password
    };
    try {
      const res = await loginUser(credentials);

      if (res.data.status === "SUCCESS") {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", res.data.data.token);

        alert("Login Successful ");
        navigate("/home");
      } else {
        setApiError(res.data.message);
      }
    } catch (err) {
      console.error("Error:", err.response?.data);
      setApiError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

    return (
        <div className="login">
          <h1>login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type="text"
                placeholder="enter username"
                {...register("userName", {required : 'required username'})}
                />
                {errors.userName && <p>{errors.userName.message}</p>}
                <div className="input-wapper">
                <input 
                type={showpassword? 'text' : 'password'}
                placeholder="enter password"
                {...register("password", {required: "required password"})}
                />
                <span className="eye-icon"
                onClick={() => setShowpassword(!showpassword)}> 
                show password {showpassword ? <FaEyeSlash/>: <FaEye/>}</span>
                {errors.password && <p>{errors.password.message}</p>}
                </div>
                {apiError && <p style={{ color: "red" }}>{apiError}</p>}
                <button onClick={forgot}>forgot password</button>
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}