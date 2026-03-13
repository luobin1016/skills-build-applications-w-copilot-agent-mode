import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../../docs/octofitapp-small.png';

function App() {
  return (
    <Router>
      <div className="container mt-4">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={logo} alt="Octofit Logo" className="App-logo me-2" />
              <span className="fw-bold text-white">Octofit Tracker</span>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-white" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
              <div className="card shadow-lg p-4" style={{ maxWidth: 500 }}>
                <h1 className="card-title mb-3 text-center text-primary">欢迎来到 Octofit Tracker！</h1>
                <p className="card-text text-center">请选择导航菜单，体验团队健身、活动记录、排行榜、个性化训练等功能。</p>
                <div className="d-flex justify-content-center">
                  <Link to="/activities" className="btn btn-primary mx-2">活动</Link>
                  <Link to="/leaderboard" className="btn btn-success mx-2">排行榜</Link>
                  <Link to="/teams" className="btn btn-info mx-2">团队</Link>
                  <Link to="/users" className="btn btn-warning mx-2">用户</Link>
                  <Link to="/workouts" className="btn btn-danger mx-2">训练</Link>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

const Activities = () => <div>Activities Page</div>;
const Leaderboard = () => <div>Leaderboard Page</div>;
const Teams = () => <div>Teams Page</div>;
const Users = () => <div>Users Page</div>;
const Workouts = () => <div>Workouts Page</div>;

export default App;
