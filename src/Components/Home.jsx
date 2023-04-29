import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
  const {user} =useContext(AuthContext);
  console.log(user)
  // const displayName = user ? user.displayName : '';

    return (
        <div>
          {/* <h2>this is home {user &&<span>{user.displayName}</span>}</h2>   */}
          <h1 className='text-3xl text-center'>{user ? user.displayName : ''}</h1>
        </div>
    );
};

export default Home;<h2>this is home</h2>