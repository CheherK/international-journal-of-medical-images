import HorizontalStepper from "../../stepper/stepper.component";
import AttachFiles from "../attach-files/attach-files.component";
import ManuscripData from "../manuscript-data/manuscript-data.component";
import Comment from "../comment/comment.component";
import './submit-paper.styles.scss';

const steps = ['Attach Files', 'Manuscript Data', 'Comments'];

const components = [<ManuscripData />, <AttachFiles />, <Comment />];

const SubmitPaper = () => {

   return (
      <div className="submit-paper-container">
         <HorizontalStepper steps={steps} components={components} />
      </div>
   );
};

export default SubmitPaper;