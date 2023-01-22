import Sidebar from "../Dashboard/Sidebar";
import { useParams } from "react-router-dom";
import DashboardHeader from "../Dashboard/DashboardHeader";
// import Cards from "../Dashboard/Cards";
import Footer from "../Login/Footer";
import DepartmentDashboard from "../Department Dashboard/DepartmentDashboard";
import Charts from "../Charts/Charts"




const Departments = (props) => {
  const { deptName } = useParams();
  return (
    <>
      <div className="p-0 m-0" style={{ backgroundColor: "#F1F6F5" }}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <div className="px-4 py-3 w-100 d-flex flex-column">
              <DepartmentDashboard
                deptName={deptName.toUpperCase()}
                departmentTabs={props.departmentTabs}
              /> 
              <Charts />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Departments;
