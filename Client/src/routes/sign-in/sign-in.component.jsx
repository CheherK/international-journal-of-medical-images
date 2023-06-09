import { useState, useEffect } from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';
import axios from '../../api/axios';
import { LOGIN_URL } from '../../api/authentication-url';
import FormInput from '../../components/form-input/form-input.component';
import Button, { BUTTON_TYPE } from '../../components/button/button.component';
import jwt_decode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import ROLES from "../../constants/roles";
import './sign-in.styles.scss';

const defaultFormFields = {
   email: '',
   password: '',
};

const SignIn = () => {
   const { currentUser, setCurrentUser } = useCurrentUser();
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;
   const navigate = useNavigate();

   useEffect(() => {
      switch (currentUser?.role) {
         case ROLES.AUTHOR: navigate("/author-dashboard"); break;
         case ROLES.REVIEWER: navigate("/reviewer-dashboard"); break;
         case ROLES.EDITOR: navigate("/editor-dashboard"); break;
         default: console.log(" navigation doesn't work current user: " + currentUser);
      }
   }, [currentUser]);

   const submitHandler = async (event) => {
      event.preventDefault();
      try {
         const response = await axios.post(
            LOGIN_URL,
            JSON.stringify(formFields),
            {
               headers: { "Content-Type": "application/json" },
            }
         );
         const tokenData = await jwt_decode(response?.data);
         setCurrentUser(
            {
               id: tokenData?.jti,
               email: tokenData?.sub,
               role: tokenData?.role[0],
               token: response?.data
            }
         );
         console.log(currentUser);
      } catch (error) {
         console.log(error);
         switch (error.code) {
            case "auth/wrong-password": alert("Wrong Password"); break;
            case "auth/user-not-found": alert("Wrong email"); break;
            default: console.log(error.code);
         }
      }
   };

   const changeHandle = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <section className='sign-in'>
         <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={submitHandler}>
               <FormInput label="Email" type='email' required onChange={changeHandle} name='email' value={email} />
               <FormInput label="Password" type='password' minLength="8" required onChange={changeHandle} name='password' value={password} />
               <Button type='submit' buttonType={BUTTON_TYPE.MAIN_BUTTON}>Sign In</Button>
            </form>
            <span>Did you not have an account? <Link to="/join-us">Sign Up</Link></span>
         </div>
      </section>
   );
};

export default SignIn;