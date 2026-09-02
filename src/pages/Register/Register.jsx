import React, { useState } from "react";
import "./Register.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../../firebase/firebaseConfig";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);


    const handleRegister = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");


        // Check passwords
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }


        // Check role
        if (!role) {
            setError("Please select an account type.");
            return;
        }


        // Check password length
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }


        try {

            setLoading(true);


            // Create Firebase Authentication account
            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


            const user = userCredential.user;


            // Create user document in Firestore
            await setDoc(doc(db, "users", user.uid), {

                uid: user.uid,

                fullName: fullName,

                email: email,

                role: role,

                createdAt: serverTimestamp()

            });


            setSuccess(
                "Account created successfully! Redirecting to login..."
            );


            // Redirect to login
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);


        } catch (error) {

            console.error("Registration error:", error);


            if (error.code === "auth/email-already-in-use") {

                setError(
                    "An account with this email already exists."
                );

            } else if (error.code === "auth/invalid-email") {

                setError(
                    "Please enter a valid email address."
                );

            } else if (error.code === "auth/weak-password") {

                setError(
                    "Password is too weak. Use at least 6 characters."
                );

            } else {

                setError(
                    "Registration failed. Please try again."
                );
            }

        } finally {

            setLoading(false);

        }
    };


    return (

        <div className="register-page">

            <div className="register-container">

                <div className="register-header">

                    <h1>Create Account</h1>

                    <p>
                        Join TailorLink today
                    </p>

                </div>


                <form
                    className="register-form"
                    onSubmit={handleRegister}
                >

                    {/* Full Name */}

                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) =>
                                setFullName(e.target.value)
                            }
                            required
                        />

                    </div>


                    {/* Email */}

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


                    {/* Password */}

                    <div className="form-group">

                        <label>Password</label>

                        <div className="password-input">

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Create a password"
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


                    {/* Confirm Password */}

                    <div className="form-group">

                        <label>Confirm Password</label>

                        <div className="password-input">

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                            >
                                {showConfirmPassword
                                    ? "Hide"
                                    : "Show"}
                            </button>

                        </div>

                    </div>


                    {/* Account Type */}

                    <div className="form-group">

                        <label>Account Type</label>

                        <div className="account-type">

                            <label>

                                <input
                                    type="radio"
                                    name="role"
                                    value="customer"
                                    checked={role === "customer"}
                                    onChange={(e) =>
                                        setRole(e.target.value)
                                    }
                                    required
                                />

                                <span>
                                    Customer
                                </span>

                            </label>


                            <label>

                                <input
                                    type="radio"
                                    name="role"
                                    value="tailor"
                                    checked={role === "tailor"}
                                    onChange={(e) =>
                                        setRole(e.target.value)
                                    }
                                />

                                <span>
                                    Tailor
                                </span>

                            </label>

                        </div>

                    </div>


                    {/* Error message */}

                    {error && (
                        <p className="form-error">
                            {error}
                        </p>
                    )}


                    {/* Success message */}

                    {success && (
                        <p className="form-success">
                            {success}
                        </p>
                    )}


                    {/* Register button */}

                    <button
                        type="submit"
                        className="register-button"
                        disabled={loading}
                    >

                        {loading
                            ? "Creating Account..."
                            : "Create Account"}

                    </button>


                    {/* Login */}

                    <p className="login-text">

                        Already have an account?

                        <a href="/login">
                            Login
                        </a>

                    </p>

                </form>

            </div>

        </div>
    );
};

export default Register;