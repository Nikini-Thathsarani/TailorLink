import React, { useState } from "react";
import "./Login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            // 1. Login using Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            console.log("Logged in Firebase user:", user.uid);

            // 2. Get the user's profile from Firestore
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            // 3. Check whether the user profile exists
            if (!userDoc.exists()) {
                setError(
                    "User profile not found. Please contact support."
                );

                return;
            }

            // 4. Get user data
            const userData = userDoc.data();

            console.log("User data:", userData);

            // 5. Get the user's role
            const role = userData.role;

            console.log("Logged in user role:", role);

            // 6. Redirect according to the user's role
            if (role === "tailor") {
                window.location.href = "/tailor-dashboard";
            } 
            else if (role === "customer") {
                window.location.href = "/customer-dashboard";
            } 
            else {
                setError(
                    "Invalid user role. Please contact support."
                );
            }

        } catch (error) {
            console.error("Login error:", error);

            // Firebase authentication errors
            if (error.code === "auth/invalid-credential") {
                setError("Incorrect email or password.");
            } 
            else if (error.code === "auth/user-not-found") {
                setError("No account found with this email.");
            } 
            else if (error.code === "auth/wrong-password") {
                setError("Incorrect password.");
            } 
            else if (error.code === "auth/invalid-email") {
                setError("Please enter a valid email address.");
            } 
            else if (error.code === "auth/network-request-failed") {
                setError(
                    "Network error. Please check your internet connection."
                );
            } 
            else {
                setError("Login failed. Please try again.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">

            <div className="login-container">

                {/* Header */}
                <div className="login-header">

                    <h1>Welcome Back</h1>

                    <p>
                        Login to your TailorLink account
                    </p>

                </div>


                {/* Login Form */}
                <form
                    className="login-form"
                    onSubmit={handleLogin}
                >

                    {/* Email */}
                    <div className="form-group">

                        <label>
                            Email Address
                        </label>

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


                    {/* Password */}
                    <div className="form-group">

                        <div className="password-label">

                            <label>
                                Password
                            </label>

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
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                            >
                                {showPassword
                                    ? "Hide"
                                    : "Show"}
                            </button>

                        </div>

                    </div>


                    {/* Error Message */}
                    {error && (
                        <p className="form-error">
                            {error}
                        </p>
                    )}


                    {/* Remember Me */}
                    <label className="remember-me">

                        <input
                            type="checkbox"
                        />

                        <span>
                            Remember me
                        </span>

                    </label>


                    {/* Login Button */}
                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >

                        {loading
                            ? "Logging in..."
                            : "Login"}

                    </button>


                    {/* Register */}
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