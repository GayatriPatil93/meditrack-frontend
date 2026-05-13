import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../services/auth'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate('/login')
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-card">
        <div>
          <h1>Welcome to MediTrack</h1>
          <p>Use your dashboard to manage medication reminders, schedule care, and track your health routine.</p>
          <button className="logout-button" onClick={handleLogout}>Sign Out</button>
        </div>
      </section>
    </main>
  )
}

export default Dashboard;