import React, { useEffect, useState } from 'react';
import { GenericService } from '../assets/api/services/GenericService';

const User = ({ roles, fetchType, userId }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const params = roles.map(role => `role=${role}`);
                const userList = await GenericService.findAll('api/user', params);
                setUsers(userList);
                setLoading(false);
            } catch (error) {
                setError('Error fetching users');
                setLoading(false);
            }
        };

        const fetchUsersAdmin = async () => {
            try {
                const params = roles.map(role => `role=${role}`);
                const userList = await GenericService.findAll('api/user/admin', params);
                setUsers(userList);
                setLoading(false);
            } catch (error) {
                setError('Error fetching users');
                setLoading(false);
            }
        };

        const fetchUserById = async () => {
            try {
                const userDetails = await GenericService.findOne('api/user', userId);
                setUsers([userDetails]);
                setLoading(false);
            } catch (error) {
                setError('Error fetching user details');
                setLoading(false);
            }
        };

        if (fetchType === 'all') {
            fetchUsers();
        } else if (fetchType === 'admin') {
            fetchUsersAdmin();
        } else if (fetchType === 'byId' && userId) {
            fetchUserById();
        }
    }, [roles, fetchType, userId]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default User;

