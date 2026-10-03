import React from "react";
import "./CustomerDashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          TAILOR<span>LINK</span>
        </div>

        <nav className="dashboard-nav">
          <a href="#dashboard" className="active">
            Dashboard
          </a>

          <a href="#tailors">
            Find Tailors
          </a>

          <a href="#appointments">
            Appointments
          </a>

          <a href="#messages">
            Messages
          </a>

          <a href="#settings">
            Settings
          </a>
        </nav>

        <button className="dashboard-logout">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">
          <div>
            <p className="dashboard-small-title">TAILORLINK</p>
            <h1>Welcome Back 👋</h1>
            <p>
              Manage your tailoring journey from one place.
            </p>
          </div>

          <button className="find-tailor-btn">
            Find a Tailor
          </button>
        </header>

        {/* Stats */}
        <section className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-icon">✂</div>
            <div>
              <span>Saved Tailors</span>
              <h2>0</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div>
              <span>Appointments</span>
              <h2>0</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">💬</div>
            <div>
              <span>Messages</span>
              <h2>0</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div>
              <span>Reviews</span>
              <h2>0</h2>
            </div>
          </div>

        </section>

        {/* Dashboard Content */}
        <section className="dashboard-grid">

          {/* Find Tailor */}
          <div className="dashboard-card large-card">
            <div className="card-heading">
              <div>
                <p className="card-label">DISCOVER</p>
                <h2>Find Your Perfect Tailor</h2>
              </div>
            </div>

            <p className="card-description">
              Discover skilled tailors around your area and
              find someone who matches your style and needs.
            </p>

            <button className="card-button">
              Explore Tailors →
            </button>
          </div>

          {/* Upcoming */}
          <div className="dashboard-card">
            <p className="card-label">UPCOMING</p>
            <h2>Appointments</h2>

            <div className="empty-state">
              <div className="empty-icon">📅</div>

              <h3>No appointments yet</h3>

              <p>
                Your upcoming appointments will appear here.
              </p>

              <button className="outline-button">
                Book an Appointment
              </button>
            </div>
          </div>

          {/* Saved Tailors */}
          <div className="dashboard-card">
            <p className="card-label">YOUR TAILORS</p>
            <h2>Saved Tailors</h2>

            <div className="empty-state">
              <div className="empty-icon">✂</div>

              <h3>No saved tailors</h3>

              <p>
                Save your favourite tailors to find them quickly.
              </p>

              <button className="outline-button">
                Find Tailors
              </button>
            </div>
          </div>

        </section>

        {/* Quick Actions */}
        <section className="quick-actions">

          <div>
            <p className="card-label">QUICK ACTIONS</p>
            <h2>What would you like to do?</h2>
          </div>

          <div className="action-buttons">

            <button>
              <span>📍</span>
              Find Nearby Tailors
            </button>

            <button>
              <span>📅</span>
              Book Appointment
            </button>

            <button>
              <span>💬</span>
              Message a Tailor
            </button>

          </div>

        </section>

      </main>
    </div>
  );
};

export default Dashboard;