import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "../../../api/axios";
import Button, { BUTTON_TYPE } from "../../button/button.component";
import useSubmission from "../../../hooks/useSubmission";
import FormInput from "../../form-input/form-input.component";
import "./related-authors.styles.scss";

const RelatedAuthors = () => {
   const { manuscriptId } = useSubmission();
   const [authors, setAuthors] = useState([
      { firstName: "", lastName: "", email: "", orcid: "" },
   ]);

   // const handleSubmit = async () => {
   //    try {
   //       const response = await axios.post(
   //          AUTHOR_SAVE_MANUSCRIPT(currentUser.id),
   //          JSON.stringify(manuscript),
   //          {
   //             headers: {
   //                "Content-Type": "application/json",
   //                "Authorization": `Bearer ${currentUser.token}`,
   //             }
   //          }
   //       );
   //    } catch (error) {
   //       console.log(error);
   //       setSubmitFailed(true);
   //    }
   // }

   const handleAuthorChange = (index, e) => {
      const { name, value } = e.target;
      const list = [...authors];
      list[index][name] = value;
      setAuthors(list);
   };

   const handleAddAuthor = (e) => {
      e.preventDefault();
      setAuthors([...authors, { firstName: "", lastName: "", email: "", orcid: "" }]);
   };

   const removeAuthor = (index) => {
      const newAuthors = [...authors];
      newAuthors.splice(index, 1);
      setAuthors(newAuthors);
   };
   return (
      <div className="related-authors-container">
         <form className="form-group">
            <label>Authors *</label>
            <p className="reminder">Ensure that all contributing authors are added to your paper submission.</p>
            <div className="authors">
               {authors.map((author, index) => (
                  <div key={index} className="author-card">
                     <div className="header">
                        <h3>{`Author ${index + 1}`}</h3>
                        <button
                           type="button"
                           className="remove-author-btn"
                           onClick={() => removeAuthor(index)}
                        >
                           <AiOutlineClose />
                        </button>
                     </div>
                     <FormInput label="First Name" type='text' required name='firstName' value={author.firstName} onChange={(e) => handleAuthorChange(index, e)} />
                     <FormInput label="Last Name" type='text' required name='lastName' value={author.lastName} onChange={(e) => handleAuthorChange(index, e)} />
                     <FormInput label="Email" type='email' required name='email' value={author.email} onChange={(e) => handleAuthorChange(index, e)} />
                     <FormInput label="ORCID" type='text' required name='orcid' value={author.orcid} onChange={(e) => handleAuthorChange(index, e)} />
                  </div>

               ))}
            </div>
            <Button buttonType={BUTTON_TYPE.SECOND_BUTTON} onClick={handleAddAuthor}>Add Author</Button>
            <Button buttonType={BUTTON_TYPE.MAIN_BUTTON} type="submit" id="authors-of-manuscript">Submit Authors Of Manuscript</Button>
         </form>
      </div>
   );
};

export default RelatedAuthors;