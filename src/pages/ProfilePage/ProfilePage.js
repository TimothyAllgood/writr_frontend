import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import User from '../../models/User';
import { loggedIn, decodeToken } from '../../util/loggedIn';
require('./ProfilePage.scss');

function ProfilePage() {
  const check = loggedIn();
  const decoded = decodeToken(localStorage.getItem('token'));

  const { loading, data: userData } = useQuery(User.getUser, {
    variables: {
      getUserId: decoded.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  return (
    <section className="container">
      {userData && (
        <div>
          <p>{userData.getUser.username}</p>
          <p>{userData.getUser.email}</p>
        </div>
      )}
    </section>
  );
}

export default ProfilePage;
