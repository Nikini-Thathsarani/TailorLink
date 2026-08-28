import React, { useState } from "react";
import "./Login.css";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-header">

                    <h1>Welcome Back</h1>

                    <p>
                        Login to your TailorLink account
                    </p>

                </div>


                <form className="login-form">

                    <div className="form-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />

                    </div>


                    <div className="form-group">

                        <div className="password-label">

                            <label>Password</label>

                            <a href="#">
                                Forgot password?
                            </a>

                        </div>

                        <div className="password-input">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>

                        </div>

                    </div>


                    <label className="remember-me">

                        <input type="checkbox" />

                        <span>Remember me</span>

                    </label>


                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>


                    <p className="register-text">

                        Don't have an account?

                        <a href="#">
                            Create an account
                        </a>

                    </p>

                </form>

            </div>

        </div>
    );
};

export default Login;