import { DashHeader } from "../../Data/Data";
import "../../Assets/CssFiles/DashboardHeader.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../AppServices/AppService";
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";

const DashboardHeader = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      let data;
      await axios
        .get(`${apiUrl}/jkegov/user/getMe`)
        .then((response) => {
          data = response.data.user;
          setUser(response.data.user);
          // console.log(data.name);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <>
      <div
        className="grid_header d-flex flex-row justify-content-between px-4 py-1 align-items-center shadow-sm"
        style={{
          background: "#023047",
          // "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 1) 35%,rgba(0, 212, 255, 1) 100%)",
        }}
      >
        <h5 style={{ color: "#FFFBEB" }} className="fs-3">
          {DashHeader[0].appName}
        </h5>
        <div className="d-flex flex-row gap-3 align-items-center">
          <input
            type="search"
            className="rounded-pill border-0 shadow-sm px-3 py-1"
            placeholder="Search"
          />
          <img
            src={DashHeader[0].profile}
            alt="profile"
            className="rounded-circle"
          />
          <div className="d-flex flex-column">
            <h6 className="m-0 p-0" style={{ color: "#FFFBEB" }}>
              {user.name}
            </h6>
            <p className="m-0 p-0" style={{ color: "#FFFBEB" }}>
              {user.role}
            </p>
          </div>
          <Link to="/" className="link" style={{ color: "#495579" }}>
            <div
              className=" d-flex flex-row align-items-center mt-auto logout gap-3"
              title="Logout"
            >
              <BiLogOutCircle style={{ color: "#ffff" }} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default DashboardHeader;
