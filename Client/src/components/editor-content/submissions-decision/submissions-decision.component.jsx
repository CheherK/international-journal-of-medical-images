import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const submissionNeedingDecision = null;

const SubmissionDecision = () => {
   return (
      submissionNeedingDecision ?
         (
            <div>there is new submission Needing Decision</div>
         ) :
         (
            <Alert severity="info">
               <AlertTitle>No Submission Needing Decision found!</AlertTitle>
               There are currently no submission needing decision for you.
            </Alert>
         )
   );
};

export default SubmissionDecision;