import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '../services/auth'
import './Register.css'

function Register() {
  const navigate = useNavigate()

  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await registerUser(formdata)
      alert('Registration successful')
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      alert('Registration failed. Please try again.')
    }
  }

    return (
        <main className="register-page">
            <section className="register-card">
                <div className="register-header">
                    <span className="brand-pill">MediTrack</span>
                    <h1>Create your account</h1>
                    <p>Join us to manage your medications and healthcare schedule easily.</p>
                </div>

                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formdata.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />

                    <label htmlFor="email">Email address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@gmail.com"
                        value={formdata.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formdata.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                    />

                    <button type="submit" className="register-button">Create Account</button>
                </form>

                <div className="register-footer">
                    <p className="register-text">
                        Already have an account?{' '}
                        <Link className="forgot-link" to="/login">Sign in</Link>
                    </p>
                </div>

                <p className="register-note">
                    Keep your medication schedule organized and never miss a dose with MediTrack.
                </p>
            </section>
        </main>
    )
}

export default Register;