import { auth, provider } from  "../config/firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from  "react-router-dom"; //hook that used to create Navigate func


export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/"); //whatever we put inside this function, will be url that we'll be redirected aafter login
  };
  return (
  <div>
     {/* if user is logged in this info will be displayed */}
          <p>Sign In With Google To Continue</p>
          <button onClick={signInWithGoogle}>Sign In With Google</button>      
    {/* <p>Sign In With Google To Continue</p>
    <button onClick={signInWithGoogle}>Sign In With Google</button> */}
  </div>
  );
};