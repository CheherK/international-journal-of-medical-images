import DashboardHeader from '../../components/dashboard-header/dashboard-header.component';
import DashboardSidebar from '../../components/dashboard-sidebar/dashboard-sidebar.component';
import DashboardContent from '../../components/dashboard-content/dashboard-content.component';
import './author-dashboard.styles.scss';


const dashboardTitle = "Author Menu";
const sidebarNavigationData = [
   {
      title: "Submissions",
      items: ["Submit new manuscript", "Incomplete submissions", "Submissions being processed"]
   },
   {
      title: "Revisions",
      items: ["Submissions needing revision", "Revision being processed", "Declined revisions"]
   },
   {
      title: "completed",
      items: ["Submissions with decision"]
   }
]

const AuthorDashboard = () => {

   return (
      <div className="dashboard-container">
         <div className='dashboard-sidebar-container'>
            <DashboardSidebar menu={sidebarNavigationData} dashboardTitle={dashboardTitle}/>
         </div>
         <div className='dashboard-header-content-container'>
            <DashboardHeader />
            <DashboardContent />
         </div>
      </div>
   );
};

export default AuthorDashboard;