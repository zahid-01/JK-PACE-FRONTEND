import Footer from "../Login/Footer";
import DashboardHeader from "../Dashboard/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar";



const Roles = () => {
    return(
        <>
        <div className="p-0 m-0" style={{ backgroundColor: "#F1F6F5" }}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <div className="border px-4 border-danger py-3 w-100 d-flex flex-column">
              
            </div>
          </div>
          <Footer />
        </div>
      </div>
        </>
    )
}
export default Roles