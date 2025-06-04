import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (role === 'admin') {
            if (email === 'admin@admin.com' && password === 'admin123') {
                localStorage.setItem('isAdmin', 'true');
                navigate('/admin/products');
            } else {
                setError('Wrong email or password');
            }
        } else {
            if (email === 'user@user.com' && password === 'user123') {
                localStorage.setItem('isUser', 'true');
                navigate('/shop');
            } else {
                setError('Wrong email or password');
            }
        }
    };

    return (
        <div className="login-page">
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="role-selector"
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default LoginPage;
