import React, { useState } from "react";
import "./Login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            setLoading(true);

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            // Login successful
            window.location.href = "/";

        } catch (error) {

            console.error("Login error:", error);

            if (error.code === "auth/invalid-credential") {

                setError("Incorrect email or password.");

            } else if (error.code === "auth/user-not-found") {

                setError("No account found with this email.");

            } else if (error.code === "auth/wrong-password") {

                setError("Incorrect password.");

            } else if (error.code === "auth/invalid-email") {

                setError("Please enter a valid email address.");

            } else {

                setError("Login failed. Please try again.");

            }

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-header">

                    <h1>Welcome Back</h1>

                    <p>
                        Login to your TailorLink account
                    </p>

                </div>


                <form
                    className="login-form"
                    onSubmit={handleLogin}
                >

                    <div className="form-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
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
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword
                                    ? "Hide"
                                    : "Show"}
                            </button>

                        </div>

                    </div>


                    <label className="remember-me">

                        <input type="checkbox" />

                        <span>Remember me</span>

                    </label>


                    {error && (
                        <p className="form-error">
                            {error}
                        </p>
                    )}


                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"}
                    </button>


                    <p className="register-text">

                        Don't have an account?

                        <a href="/register">
                            Create an account
                        </a>

                    </p>

                </form>

            </div>

        </div>
    );
};

export default Login;