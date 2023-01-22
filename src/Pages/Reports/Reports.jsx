import Footer from "../Login/Footer";
import DashboardHeader from "../Dashboard/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar";

const Reports = () => {
    return(
        <>
         <div className="p-0 m-0" style={{ backgroundColor: "#F1F6F5" }}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <div className="px-4 py-3 w-100 d-flex flex-column">
                <h5 className="fw-bold">Reports</h5>              

              
            </div>
          </div>
          <Footer />
        </div>
      </div>
        </>
    )
}
export default Reports