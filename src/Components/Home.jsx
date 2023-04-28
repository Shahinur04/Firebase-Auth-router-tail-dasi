import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
  const user =useContext(AuthContext);
  console.log(user)
  const displayName = user ? user.displayName : '';

    return (
        <div>
          <h2>this is home {user &&<span>{displayName}</span>}</h2>  
        </div>
    );
};

export default Home;<h2>this is home</h2>