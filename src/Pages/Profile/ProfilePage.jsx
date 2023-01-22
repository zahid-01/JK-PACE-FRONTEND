import DashboardHeader from "../Dashboard/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar";
import { apiUrl } from "../../AppServices/AppService";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../Login/Footer";

const ProfilePage = () => {
  const labels = [
    {title: "Full Name"},
    { title: "Username" },
    { title: "Designation" },
    { title: "Email" },
    { title: "Phone" },
    { title: "Office Address" },
    { title: "Department" },
    { title: "Role" },
    { title: "District" },


  ];
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      // let data;
      await axios
        .get(`${apiUrl}/jkegov/user/getMe`)
        .then((response) => {
          // data = response.data.user
          setUser(response.data.user);
          console.log(response.data.user);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <>
      <div className="p-0 m-0" style={{ backgroundColor: "#F1F6F5" }}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <div className=" py-3 px-4 w-100">
              <h5 className="p-0 m-0 fw-bold">Profile</h5>
              <p className="text-secondary">
                Your personal details are shown here.
              </p>

              <div className="d-flex flex-row gap-5">

              <div className="d-flex flex-column" style={{width: "50%"}}>
              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[0].title}</label>
                <div key={user.id}>{user.name}</div>
              </div>
              <hr />
              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[1].title}</label>
                <div key={user.id}>{user.username}</div>
              </div>
              <hr />
              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[2].title}</label>
                <div key={user.id}>{user.designation}</div>
              </div>
              <hr />
              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[3].title}</label>
                <div key={user.id}>{user.email}</div>
              </div>
              <hr />
              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[4].title}</label>
                <div key={user.id}>{user.phoneNo}</div>
              </div>
              <hr />
              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[5].title}</label>
                <div key={user.id}>{user.address}</div>
              </div>
              <hr />
              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[6].title}</label>
                <div key={user.id}>{user.department}</div>
              </div>
              </div>

              <div className="d-flex flex-column" style={{width: "50%"}}>

              <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[7].title}</label>
                <div key={user.id}>{user.role}</div>
              </div>
                <hr />
                <div className="d-flex gap-5 flex-row align-items-center">
                <label className="fw-bold">{labels[8].title}</label>
                <div key={user.id}>{user.district}</div>
              </div>
                <hr />
                
              </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {/* <div className="py-3 px-4 justify-content-around d-flex flex-column border border-success w-100">
          <div className="border border-danger">
            <h5 className="p-0 m-0">Profile</h5>
            <p className="text-secondary">
              Your personal details are shown here.
            </p>
          </div>
          <hr />

          <div className="d-flex gap-5 py-3 flex-row align-items-center">
            <label className="fw-bold">Username</label>
            <div key={user.id}>{user.name}</div>
          </div>
          <hr />
          <div className="d-flex gap-5 py-3 flex-row align-items-center">
            <label className="fw-bold">Email</label>
            <div key={user.id}>{user.email}</div>
          </div>
          <hr />
        </div> */}
    </>
  );
};
export default ProfilePage;
