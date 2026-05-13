import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import './Login.css'

function Login() {
    const navigate = useNavigate();

    const [ formdata, setFormdata ] = useState({
        email: '',
        password: ''
    });


    const handleChange = (event) => {
        setFormdata({
            ...formdata,

            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    try{

        const response = await api.post(
            "/users/login",

            formdata
        );
         localStorage.setItem(

                "token",

                response.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Invalid Credentials");
        }
    };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-header">
          <span className="brand-pill">MediTrack</span>
          <h1>Sign in to your account</h1>
          <p>Access your personal medication reminders, schedules, and care plan.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@healthcare.com"
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
            autoComplete="current-password"
            required
          />

          <div className="login-row">
            <label className="checkbox-label">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <Link className="forgot-link" to="/register">Create account</Link>
          </div>

          <button type="submit"className="login-button">Sign In</button>
        </form> 

        <p className="login-note">
          Secure medication alerts and easy schedule management for your healthcare routine.
        </p>
      </section>
    </main>
  )
}

export default Login;
