import { useState } from "react";
import useSubmission from "../../../hooks/useSubmission";
import Button, { BUTTON_TYPE } from "../../button/button.component";
import FileInput from "../../file-input/file-input.compoent";
import AlertTitle from '@mui/material/AlertTitle';
import axios from "../../../api/axios";
import Alert from '@mui/material/Alert';
import useCurrentUser from "../../../hooks/useCurrentUser";
import { SAVE_MANUSCRIPT_FILE } from "../../../api/author-url";
import "./attach-files.styles.scss";

// const FILES_DATA_INITIAL_STATE = [
//    {
//       model: {
//          order: 0,
//          type: 'Manuscript',
//          description: "Manuscript file",
//          fileName: "",
//       },
//       file: null,
//    }
// ];

const AttachFiles = () => {

   const [submitSuccess, setSubmitSuccess] = useState(false);

   const [submitFailed, setSubmitFailed] = useState(false);

   const { manuscriptId, manuscriptFiles, setManuscriptFiles } = useSubmission();

   const { currentUser } = useCurrentUser();

   const ATTACH_FILES_INITAIL_STATE = [
      <FileInput key={0} order={0} defaultDescription="Manuscript file" defaultSelectedType="Manuscript" />
   ];

   const [inputFields, setInputFields] = useState(ATTACH_FILES_INITAIL_STATE);


   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         console.log(manuscriptFiles);
         for (let i = 0; i < manuscriptFiles.length; i++) {
            const formData = new FormData();
            const fileInfoReq = JSON.stringify({
               type: manuscriptFiles[i].model.type,
               description: manuscriptFiles[i].model.description,
            });
            console.log("mena rakez");
            console.log(manuscriptFiles[i].file);
            formData.append("model", fileInfoReq);
            formData.append("file", manuscriptFiles[i].file);
            console.log(formData);
            const response = await axios.post(
               SAVE_MANUSCRIPT_FILE(currentUser.id, manuscriptId),
               formData,
               {
                  headers: {
                     "Content-Type": "multipart/form-data",
                     "Authorization": `Bearer ${currentUser.token}`,
                  }
               }
            );
            console.log(response);
         }
         setSubmitSuccess(true);
      } catch (error) {
         console.log(error);
         setSubmitFailed(true);
      }

   };

   const handleAddFileClick = () => {
      const newInputFileds = [...inputFields];
      const order = inputFields.length;
      newInputFileds.push(<FileInput key={order} order={order} />);
      setInputFields(newInputFileds);
      const newFileData = [...manuscriptFiles];
      newFileData.push(
         {
            model: {
               order: order,
               type: "",
               description: "",
               fileName: "",
            },
            file: null,
         }
      );
      setManuscriptFiles(newFileData);
   };

   return (
      <section className="attach-files-container">
         <header className="attach-files-header">
            <span>Item</span>
            <span>Description</span>
            <span>File</span>
            <span>File Name</span>
         </header>
         <form className="attach-files-form" onSubmit={handleSubmit}>
            {inputFields}
            <Button buttonType={BUTTON_TYPE.SECOND_BUTTON} type="button" onClick={handleAddFileClick} >Add Other File</Button>
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
         </form>
         {
            submitFailed &&
            <Alert severity="error">
               <AlertTitle>Submission of manuscript files failed !!</AlertTitle>
               Please try again.
            </Alert>
         }
      </section>
   );
};

export default AttachFiles;