import React, { useState } from "react";
import "./Booking.css";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";

const Booking = () => {
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [requirements, setRequirements] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleBooking = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        if (!auth.currentUser) {
            setError("Please login before making a booking.");
            return;
        }

        try {
            setLoading(true);

            await addDoc(collection(db, "bookings"), {
                customerId: auth.currentUser.uid,
                service: service,
                date: date,
                time: time,
                requirements: requirements,
                status: "pending",
                createdAt: serverTimestamp(),
            });

            setSuccess("Booking request submitted successfully!");

            setService("");
            setDate("");
            setTime("");
            setRequirements("");

        } catch (error) {
            console.error("Booking error:", error);
            setError("Booking failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="booking-page">

            <div className="booking-container">

                <div className="booking-header">
                    <p className="booking-label">TAILORLINK</p>

                    <h1>Book a Tailor</h1>

                    <p>
                        Tell us what you need and request an appointment
                        with your preferred tailor.
                    </p>
                </div>

                <form
                    className="booking-form"
                    onSubmit={handleBooking}
                >

                    <div className="form-group">
                        <label>Service</label>

                        <select
                            value={service}
                            onChange={(e) =>
                                setService(e.target.value)
                            }
                            required
                        >
                            <option value="">
                                Select a service
                            </option>

                            <option value="Custom Tailoring">
                                Custom Tailoring
                            </option>

                            <option value="Bridal & Occasion">
                                Bridal & Occasion
                            </option>

                            <option value="Alterations">
                                Alterations
                            </option>

                            <option value="Repairs & Restyling">
                                Repairs & Restyling
                            </option>
                        </select>
                    </div>


                    <div className="form-row">

                        <div className="form-group">
                            <label>Date</label>

                            <input
                                type="date"
                                value={date}
                                onChange={(e) =>
                                    setDate(e.target.value)
                                }
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label>Time</label>

                            <input
                                type="time"
                                value={time}
                                onChange={(e) =>
                                    setTime(e.target.value)
                                }
                                required
                            />
                        </div>

                    </div>


                    <div className="form-group">

                        <label>Requirements</label>

                        <textarea
                            placeholder="Tell the tailor about your requirements..."
                            value={requirements}
                            onChange={(e) =>
                                setRequirements(e.target.value)
                            }
                            rows="5"
                        />

                    </div>


                    {error && (
                        <p className="booking-error">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="booking-success">
                            {success}
                        </p>
                    )}


                    <button
                        type="submit"
                        className="booking-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Submitting..."
                            : "Request Booking"}
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Booking;