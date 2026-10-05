import React from "react";
import "./TailorDashboard.css";

const TailorDashboard = () => {
    return (
        <div className="tailor-dashboard">

            {/* Sidebar */}
            <aside className="tailor-sidebar">

                <div className="tailor-logo">
                    TAILOR<span>LINK</span>
                </div>

                <nav className="tailor-nav">

                    <a href="#dashboard" className="active">
                        Dashboard
                    </a>

                    <a href="#requests">
                        Booking Requests
                    </a>

                    <a href="#appointments">
                        Appointments
                    </a>

                    <a href="#customers">
                        Customers
                    </a>

                    <a href="#messages">
                        Messages
                    </a>

                    <a href="#profile">
                        My Profile
                    </a>

                    <a href="#settings">
                        Settings
                    </a>

                </nav>

                <button className="tailor-logout">
                    Logout
                </button>

            </aside>


            {/* Main Content */}
            <main className="tailor-main">

                {/* Header */}
                <header className="tailor-header">

                    <div>
                        <p className="tailor-small-title">
                            TAILORLINK
                        </p>

                        <h1>Welcome Back 👋</h1>

                        <p>
                            Manage your bookings, customers and
                            tailoring services from one place.
                        </p>
                    </div>

                    <button className="profile-button">
                        View Profile
                    </button>

                </header>


                {/* Statistics */}
                <section className="tailor-stats">

                    <div className="tailor-stat-card">
                        <div className="tailor-stat-icon">
                            📅
                        </div>

                        <div>
                            <span>Total Bookings</span>
                            <h2>0</h2>
                        </div>
                    </div>


                    <div className="tailor-stat-card">
                        <div className="tailor-stat-icon">
                            ⏳
                        </div>

                        <div>
                            <span>Pending Requests</span>
                            <h2>0</h2>
                        </div>
                    </div>


                    <div className="tailor-stat-card">
                        <div className="tailor-stat-icon">
                            ✓
                        </div>

                        <div>
                            <span>Accepted Bookings</span>
                            <h2>0</h2>
                        </div>
                    </div>


                    <div className="tailor-stat-card">
                        <div className="tailor-stat-icon">
                            ⭐
                        </div>

                        <div>
                            <span>Rating</span>
                            <h2>0.0</h2>
                        </div>
                    </div>

                </section>


                {/* Main Dashboard Grid */}
                <section className="tailor-dashboard-grid">

                    {/* Booking Requests */}
                    <div className="tailor-card booking-requests-card">

                        <div className="tailor-card-heading">

                            <div>
                                <p className="tailor-card-label">
                                    NEW REQUESTS
                                </p>

                                <h2>Booking Requests</h2>
                            </div>

                            <button className="view-all-button">
                                View All
                            </button>

                        </div>


                        <div className="empty-tailor-state">

                            <div className="tailor-empty-icon">
                                📋
                            </div>

                            <h3>No booking requests</h3>

                            <p>
                                New customer booking requests
                                will appear here.
                            </p>

                        </div>

                    </div>


                    {/* Upcoming Appointments */}
                    <div className="tailor-card">

                        <p className="tailor-card-label">
                            UPCOMING
                        </p>

                        <h2>Appointments</h2>

                        <div className="empty-tailor-state">

                            <div className="tailor-empty-icon">
                                📅
                            </div>

                            <h3>No upcoming appointments</h3>

                            <p>
                                Your accepted appointments
                                will appear here.
                            </p>

                        </div>

                    </div>


                    {/* Services */}
                    <div className="tailor-card">

                        <p className="tailor-card-label">
                            YOUR SERVICES
                        </p>

                        <h2>Services</h2>

                        <div className="service-list">

                            <div className="service-item">
                                <span>Custom Tailoring</span>
                                <span>→</span>
                            </div>

                            <div className="service-item">
                                <span>Alterations</span>
                                <span>→</span>
                            </div>

                            <div className="service-item">
                                <span>Bridal & Occasion</span>
                                <span>→</span>
                            </div>

                        </div>

                        <button className="outline-tailor-button">
                            Manage Services
                        </button>

                    </div>

                </section>


                {/* Quick Actions */}
                <section className="tailor-quick-actions">

                    <div>
                        <p className="tailor-card-label">
                            QUICK ACTIONS
                        </p>

                        <h2>
                            Manage your tailoring business
                        </h2>
                    </div>


                    <div className="tailor-action-buttons">

                        <button>
                            <span>📋</span>
                            View Booking Requests
                        </button>

                        <button>
                            <span>📅</span>
                            Manage Appointments
                        </button>

                        <button>
                            <span>👤</span>
                            Edit Profile
                        </button>

                    </div>

                </section>

            </main>

        </div>
    );
};

export default TailorDashboard;