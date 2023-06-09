import { useState } from "react";
import ReactQuill from "react-quill";
import useSubmission from "../../../hooks/useSubmission";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { AUTHOR_SAVE_MANUSCRIPT } from "../../../api/author-url";
import Button, { BUTTON_TYPE } from "../../button/button.component";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from "../../../api/axios";
import "react-quill/dist/quill.snow.css";
import "./manuscript-data.styles.scss";

const ManuscripData = () => {
   const { currentUser } = useCurrentUser();
   const { setManuscriptId, setManuscriptData, manuscriptData } = useSubmission();
   const [title, setTitle] = useState(manuscriptData.title || "");
   const [abstract, setAbstract] = useState(manuscriptData.abstract || "");
   const [keywords, setKeywords] = useState(manuscriptData.keywords || []);
   const [submitSuccess, setSubmitSuccess] = useState(false);
   const [submitFailed, setSubmitFailed] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault();
      const manuscript = {
         title,
         keywords
      };
      try {
         const response = await axios.post(
            AUTHOR_SAVE_MANUSCRIPT(currentUser.id),
            JSON.stringify(manuscript),
            {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${currentUser.token}`,
               }
            }
         );
         setSubmitSuccess(true);
         setManuscriptId(response?.data.id);
         setManuscriptData(manuscriptData);
      } catch (error) {
         console.log(error);
         setSubmitFailed(true);
      }
   };

   const handleTitleChange = (value) => {
      setTitle(value);
   };

   const handleAbstractChange = (value) => {
      setAbstract(value);
   };

   const handleKeywordsChange = (event) => {
      setKeywords(event.target.value.split(";"));
   };

   return (
      <form className="manuscript-data-container" onSubmit={handleSubmit}>
         <div className="form-group">
            <label htmlFor="title">Title *</label>
            <ReactQuill
               id="title"
               value={title}
               onChange={handleTitleChange}
            />
         </div>
         <div className="form-group">
            <label htmlFor="abstract">Abstract *</label>
            <ReactQuill
               id="abstract"
               value={abstract}
               onChange={handleAbstractChange}
            />
         </div>
         <div className="form-group">
            <label htmlFor="keywords">Keywords *</label>
            <input
               type="text"
               id="keywords"
               value={keywords.join(";")}
               onChange={handleKeywordsChange}
               placeholder="Enter keywords separated by semicolon"
               required
               maxLength={2560}
            />
         </div>
         {submitSuccess
            ? (
               <Alert severity="success">
                  <AlertTitle>Your manuscript data has been successfully submitted!</AlertTitle>
                  You can go to the next step.
               </Alert>
            ) : (
               <Button buttonType={BUTTON_TYPE.MAIN_BUTTON} type="submit">Submit Manuscript Data</Button>
            )}
         {
            submitFailed &&
            <Alert severity="error">
               <AlertTitle>Submission of manuscript data failed !!</AlertTitle>
               Please try again.
            </Alert>
         }
      </form >
   );
};

export default ManuscripData;
