import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CustomizedTables from '../data-table/data-table.component';
import "./reviewer-invitations.styles.scss";

const newInvitations = 1;

const ReviewerInvitations = () => {
   return (
      newInvitations ?
         (
            <CustomizedTables />
         ) :
         (
            <Alert severity="info">
               <AlertTitle>No new invitations found!</AlertTitle>
               There are currently no new invitations for you.
            </Alert>
         )
   );
};

export default ReviewerInvitations;