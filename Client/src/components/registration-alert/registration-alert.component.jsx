import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./registration-alert.styles.scss";
import Button, { BUTTON_TYPE } from "../button/button.component";

export const ALERT_TYPE = {
   SUCCESS: "success",
   EMAIL_USED: "mail-exist"
};

const RegistrationAlert = ({ alertType }) => {
   const navigate = useNavigate();
   const clickHandler = () => {
      navigate("/sign-in");
   };
   return (
      <div className="registration-alert-container">
         <div className="alert">
            {
               (() => {
                  switch (alertType) {
                     case ALERT_TYPE.SUCCESS: return (
                        <>
                           <BsCheckCircle className="success icon" />
                           <p>
                              Thank you for registering, you now have full access to our website!
                           </p>
                           <Button buttonType={BUTTON_TYPE.SECOND_BUTTON} onClick={clickHandler}>Sign In From Here</Button>
                        </>
                     );
                     case ALERT_TYPE.EMAIL_USED: return (
                        <>
                           <BsExclamationCircle className="mail icon" />
                           <p>
                              Sorry, the email you have entered is already in use. Please try again with a different email or try to sign in.
                           </p>
                           <Button buttonType={BUTTON_TYPE.MAIN_BUTTON} onClick={clickHandler}>Sign In From Here</Button>
                        </>
                     );
                     default: <p>no specific alert called</p>;
                  }
               })()
            }
         </div>
      </div>
   );
};

export default RegistrationAlert;
