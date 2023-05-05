import { useState, useEffect } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import Button, { BUTTON_TYPE } from '../../components/button/button.component';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import './reviewer-form.styles.scss';
import RegistrationAlert, {ALERT_TYPE} from '../../components/registration-alert/registration-alert.component';

const FORM_INITIAL_STATE = {
   firstName: "",
   lastName: "",
   email: "",
   title: "",
   phoneNumber: "",
   institution: "",
   country: "",
   address: "",
   password: "",
   confirmPassword: "",
};

const ReviewerForm = () => {
   const [form, setForm] = useState(FORM_INITIAL_STATE);
   const [passwordMatch, setPasswordMatch] = useState(true);
   const [registrationSuccess, setRgistrationSuccess] = useState(false);
   const { firstName, lastName, email, title, phoneNumber, institution, country, address, password, confirmPassword } = form;

   useEffect(() => {
      confirmPassword !== password ? setPasswordMatch(false) : setPasswordMatch(true);
   }, [confirmPassword, password]);

   const handleSubmit = async event => {
      event.preventDefault();

      const formData = {
         firstName: firstName,
         lastName: lastName,
         email: email,
         jobTitle: title,
         role: "reviewer",
         phoneNumber: phoneNumber,
         institution: institution,
         address: address,
         // country: country,
         password: password,
      };

      try {
         console.log(formData);
         const response = await fetch("http://localhost:8083/api/auth/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });
         alert("Reviewer registration successful!");
         console.log(response);
         setRgistrationSuccess(true);
      } catch (error) {
         console.error(error);
         alert("Reviewer registration failed.");
      }
   };

   const handleInputChange = event => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
   };


   return (
      <>
         {
            registrationSuccess ?
               (
                  <RegistrationAlert alertType={ALERT_TYPE.SUCCESS} />
               ) :
               (
                  <div className='reviewer-form'>
                     <div className='reviewer-form-container'>
                        <h1>Reviewer Form</h1>
                        <form onSubmit={handleSubmit}>
                           <FormInput label="First Name" type='text' required onChange={handleInputChange} name='firstName' value={firstName} />
                           <FormInput label="Last Name" type='text' required onChange={handleInputChange} name='lastName' value={lastName} />
                           <FormInput label="Title" type='text' required onChange={handleInputChange} name='title' value={title} />
                           <FormInput label="Institution" type='text' required onChange={handleInputChange} name='institution' value={institution} />
                           <FormInput label="Email" type='email' required onChange={handleInputChange} name='email' value={email} />
                           <FormInput label="Phone Number" type='tel' required onChange={handleInputChange} name='phoneNumber' value={phoneNumber} />
                           <FormInput label="Country" type='text' required onChange={handleInputChange} name='country' value={country} />
                           <FormInput label="Address" type='text' required onChange={handleInputChange} name='address' value={address} />
                           <FormInput label="Password" type='password' minLength="8" required onChange={handleInputChange} name='password' value={password} />
                           <FormInput label="Confirm Password" type='password' minLength="8" required onChange={(handleInputChange)} name='confirmPassword' value={confirmPassword} />
                           {!passwordMatch && <Alert className='password-alert' severity="error">Must much the first password input field!</Alert>}
                           <Button type="submit" buttonType={BUTTON_TYPE.MAIN_BUTTON}>Register</Button>
                        </form>
                        <span>Already have an account ? <Link to="/sign-in">Sign In</Link></span>
                     </div>
                  </div>
               )
         }
      </>
   );
};

export default ReviewerForm;
