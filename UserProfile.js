import React, { useState, useEffect } from 'react';
import authService from '../../services/authService';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await authService.getUserProfile();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <h3>Rental History</h3>
      <ul>
        {user.rentalHistory.map((rental, index) => (
          <li key={index}>{rental.itemName} - {rental.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
