import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // ✅ Check login status on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login"); // redirect if not logged in
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* ✅ Sidebar section with user info */}
        {user && (
          <div className="user-sidebar">
            <h2>User Info</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}

        {/* ✅ Main content section */}
        <div className="dashboard-main">
          <h1>Welcome Back{user ? `, ${user.name}` : ""}!</h1>
          <p className="dashboard-subtitle">
            Here’s your quiz performance summary 🎯
          </p>

          <div className="stats-cards">
            <div className="stat-card">
              <h3>Quizzes Taken</h3>
              <p>0</p>
            </div>
            <div className="stat-card">
              <h3>Average Score</h3>
              <p>N/A</p>
            </div>
            <div className="stat-card">
              <h3>Time Spent</h3>
              <p>0m</p>
            </div>
          </div>

          <div className="dashboard-cta">
            <h3>Ready for a New Challenge?</h3>
            <p>Test your knowledge and start your next quiz adventure.</p>
            <Link to="/dashboard/quiz" className="btn-dashboard">
              Start New Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
