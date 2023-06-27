import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

export const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);
  const signUserOut = async() => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        {!user ? (<Link to="/login"> Login </Link>
        ) : (
        <Link to="/createpost"> Create Post </Link>
        )}
      </div>
      <div className="user">
        {/* it didn't update immiedeately when we chnaged user */}
        {/* <p>{auth.currentUser?.displayName}</p> */} 

        {/* if user is logged in this info will be displayed */}
        {user && (
        <>
          <p>{user?.displayName}</p>
          <img src={auth.currentUser?.photoURL || ""} width="20" height="20"/>
          <button onClick={signUserOut}>Log Out</button>
        </>
        )}
      </div>
    </div>
  );
}