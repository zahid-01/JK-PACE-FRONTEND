import "../../Assets/CssFiles/Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "../Dashboard/Sidebar";
import MainDash from "./MainDash";
import Footer from "../Login/Footer"
const Dashboard = () => {
  return (
    <>
      <div className="p-0 m-0" style={{backgroundColor: "#F1F6F5"}}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <MainDash />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
