import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/users/login', {
                email,
                password
            });

            const { user } = res.data;

            localStorage.setItem('userId', user.id);
            localStorage.setItem('userName', user.name);

            if (user.role === 'admin') {
                navigate('/dashboard');
            } 
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Wrong email or password');
            } else {
                setError('Server error. Please try again later.');
            }
        }
    };

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default LoginPage;
