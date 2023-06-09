import ReviewerPending from "../components/reviewer-content/reviewer-pending/reviewer-pending.componont";
import SubmissionApproval from "../components/editor-content/submission-approval/submission-approval.component";
import SubmissionReviewers from "../components/editor-content/submission-reviewers/submission-reviewers.component";
import SubmissionDecision from "../components/editor-content/submissions-decision/submissions-decision.component";

const EDITOR_ROUTES = [
   {
      category: 'Submissions',
      layout: '/editor-dashboard',
      pages: [
         {
            name: "Submissions Needing Approval",
            path: '/submissions-needing-approval',
            component: SubmissionApproval
         },
         {
            name: 'Submissions Needing Reviewers',
            path: '/submissions-needing-review',
            component: SubmissionReviewers
         },
         {
            name: 'Submissions Needing Decision',
            path: '/submissions-needing-decision',
            component: SubmissionDecision
         }
      ]
   },
   {
      category: 'Revision',
      layout: '/editor-dashboard',
      pages: [
         {
            name: 'Revisions Needing Decision',
            path: '/revisions-need-decision',
            component: ReviewerPending
         }
      ]
   },
   {
      category: 'Completed',
      layout: '/editor-dashboard',
      pages: [
         {
            name: 'Submissions With Decision',
            path: '/submissions-with-decision',
            component: ReviewerPending
         }
      ]
   }
];

export default EDITOR_ROUTES;