import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/LoginPage.css';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        return /^(?=.*[a-z])(?=.*\d).{8,}$/.test(password);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        if (!validatePassword(password)) {
            setError(
                'Password must be at least 8 characters and contain a number'
            );
            return;
        }

        try {
            await axios.post('http://localhost:5000/users/register', {
                email,
                password,
                name
            });

            setSuccess('Registered successfully!');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setName('');
            setError('');

            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data.error);
            } else {
                setError('Server error. Please try again later.');
            }
        }
    };

    return (
        <div className="login-page">
            <h2>Register</h2>
            <form onSubmit={handleRegister} className="login-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
            <p className="toggle-msg">
                Already have an account?
                <a href="/login" className="toggle-button">
                    Login here!
                </a>
            </p>
        </div>
    );
}

export default RegisterPage;
