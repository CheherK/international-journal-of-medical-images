import logo from "../../assests/logo2.png";
import "./dashboard-sidebar.styles.scss";

const DashboardSidebar = ({ menu, dashboardTitle }) => {
   return (
      <div className="dashboard-sidebar">
         <img src={logo} alt="logo" />
         <div className="menu-container">
            <h1 className="dashboard-title">
               {dashboardTitle}
            </h1>
            {menu.map((menuSection) => {
               const { title, items } = menuSection;
               return (
                  <>
                     <span className="section-title">{title.toUpperCase()}</span>
                     <ul className="section-link">
                        {
                           items.map((item) => <li>{item}</li>)
                        }
                     </ul>
                  </>
               );
            })}
         </div>
      </div>
   );
};

export default DashboardSidebar;