import DashboardHeader from '../../components/dashboard-header/dashboard-header.component';
import DashboardSidebar from '../../components/dashboard-sidebar/dashboard-sidebar.component';
import DashboardContent from '../../components/dashboard-content/dashboard-content.component';
import EDITOR_ROUTES from '../../constants/editor-routes';
import './editor-dashboard.styles.scss';


const dashboardTitle = "Editor Menu";


const EditorDashboard = () => {

   return (
         <div className="dashboard-container">
            <div className='dashboard-sidebar-container'>
               <DashboardSidebar routes={EDITOR_ROUTES} dashboardTitle={dashboardTitle}/>
            </div>
            <div className='dashboard-header-content-container'>
               <DashboardHeader />
               <DashboardContent routes={EDITOR_ROUTES} />
            </div>
         </div>
   );
};

export default EditorDashboard;