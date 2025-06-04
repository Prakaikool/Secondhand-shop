import { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/UserProfile.css';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (!userId) {
            window.location.href = '/login';
            return;
        }

        axios
            .get(`http://localhost:5000/users/${userId}`)
            .then((res) => setUser(res.data))
            .catch((err) => {
                console.error(err);
                setError('Could not fetch user data');
            });
    }, [userId]);

    if (error) return <p>{error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div className="user-profile">
            <h2>Hi, {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Joined: {new Date(user.joined_at).toLocaleDateString()}</p>
        </div>
    );
}

export default UserProfile;
