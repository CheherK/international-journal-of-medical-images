import { useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import fileCategories from '../../constants/file-categories';
import './file-input.styles.scss';
import useSubmission from '../../hooks/useSubmission';

const FILE_INPUT_INITIAL_STATE = {
   model: {
      order: null,
      type: '',
      description: '',
      fileName: '',
   },
   file: null,
};

const FileInput = ({ defaultSelectedType = '', defaultDescription = '', order }) => {

   const [fileData, setFileData] = useState({ ...FILE_INPUT_INITIAL_STATE, model: { order: order, type: defaultSelectedType, description: defaultDescription, fileName: '' } });

   const { manuscriptFiles, setManuscriptFiles } = useSubmission();

   const { type, description, fileName } = fileData.model;

   const changeSubmissionFilesArray = (newFileData, order) =>
      manuscriptFiles.map((fileData, index) => index === order ? newFileData : fileData);

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFileData({ ...fileData, model: { ...fileData.model, [name]: value } });
      setManuscriptFiles(changeSubmissionFilesArray(fileData, order));
   };

   const handleFileChange = (event) => {
      if (event.target.files[0]) {
         console.log("handle file change condition");
         setFileData({ ...fileData, model: { ...fileData.model, fileName: event.target.files[0].name }, file: event.target.files[0] });
         setManuscriptFiles(changeSubmissionFilesArray({ ...fileData, model: { ...fileData.model, fileName: event.target.files[0].name }, file: event.target.files[0] }, order));
      }
   };

   return (
      <div className="file-input-container">

         <div>
            <select id="file-categories" name='type' value={type || defaultSelectedType} onChange={handleInputChange}>
               {fileCategories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
         </div>

         <div>
            <input className="file-description" type='text' name='description' value={description || defaultDescription} onChange={handleInputChange} />
         </div>
         <div>
            <label htmlFor={`file-upload-${order}`} className="custom-file-upload">
               <BiCloudUpload className="upload-icon" />
               <span>Upload File</span>
               <input id={`file-upload-${order}`} type="file" className="inputfile" onChange={handleFileChange} />
            </label>
         </div>

         <div>
            <span className="file-name">{fileName || "no file selected"}</span>
         </div>
      </div>
   );
};

export default FileInput;