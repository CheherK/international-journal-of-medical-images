import { useContext } from "react";
import { SubmissionContext } from "../contexts/submission.context";
const useSubmission = () => {
   return useContext(SubmissionContext);
};
export default useSubmission;