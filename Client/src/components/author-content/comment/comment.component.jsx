import useSubmission from "../../../hooks/useSubmission";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useState } from "react";
import AlertTitle from '@mui/material/AlertTitle';
import { SAVE_MANUSCRIPT_COMMENT } from "../../../api/author-url";
import axios from "../../../api/axios";
import Button, { BUTTON_TYPE } from "../../button/button.component";
import Alert from '@mui/material/Alert';
import "./comment.styles.scss";

const Comment = () => {

   const { manuscriptId } = useSubmission();

   const { currentUser } = useCurrentUser();

   const [submitSuccess, setSubmitSuccess] = useState(false);

   const [submitFailed, setSubmitFailed] = useState(false);

   const [comment, setComment] = useState("");

   const handleCommentChange = (event) => {
      setComment(event.target.value);
   };

   const submitHandler = async (e) => {
      e.preventDefault();

      try {
         console.log({
            title: "main comment",
            content: comment,
         });
         const response = await axios.post(
            SAVE_MANUSCRIPT_COMMENT(currentUser.id, manuscriptId),
            JSON.stringify({
               title: "main comment",
               content: comment,
            }),
            {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${currentUser.token}`,
               }
            }
         );
         console.log(response);
         setSubmitSuccess(true);
      } catch (error) {
         console.log(error);
         setSubmitFailed(true);
      }
   };

   return (
      <section className="comment-container">
         <form className="form-group" onSubmit={submitHandler}>
            <label htmlFor="comment">Comments</label>
            <textarea id="comment" onChange={handleCommentChange} value={comment} placeholder="Please enter any additional comments you would to send to the publication office. these comments will not appear directly in your submission."
            />
            {
               submitSuccess
                  ? (
                     <Alert severity="success">
                        <AlertTitle>Your manuscript data has been successfully submitted!</AlertTitle>
                        You can go to the next step.
                     </Alert>
                  ) : (
                     <Button buttonType={BUTTON_TYPE.MAIN_BUTTON} type="submit" >Submit Manuscript Files</Button>
                  )
            }
            {
               submitFailed &&
               <Alert severity="error">
                  <AlertTitle>Submission of manuscript comment failed !!</AlertTitle>
                  Please try again.
               </Alert>
            }
         </form>
      </section>
   );
};

export default Comment;