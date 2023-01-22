import { SidebarData } from "../../Data/Data";
import { BiLogOutCircle } from "react-icons/bi";
import "../../Assets/CssFiles/Sidebar.css";
import { motion } from "framer-motion";
// import { UilBars } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { BsBuilding } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { apiUrl } from "../../AppServices/AppService";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Sidebar = () => {
  const [names, setNames] = useState([]);
  let deptNames;
  const getDeptNames = async () => {
    try {
      deptNames = (
        await axios({
          method: "GET",
          url: `${apiUrl}/jkegov/departments`,
        })
      );
      const data = Object.values(deptNames.data.data)[0].map(el => el.departmentName)
      setNames(data)
    } catch (err) {}
  };
  useEffect(() => {
    getDeptNames();
  }, []);

  // const [expanded, setExpaned] = useState(true);
  // const sidebarVariants = {
  //   true: {
  //     left: "0",
  //   },
  //   false: {
  //     left: "-60%",
  //   },
  // };

  return (
    <>
      {/* <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div> */}
      <motion.div
        className="sidebar m-0 d-flex flex-column shadow h-auto"
        style={{ backgroundColor: "white" }}
      >
        <div className="menu px-3 py-3 gap-2 d-flex flex-column">
          {SidebarData.map((el, index) => {
            return (
              <Link
                to={el.path}
                style={{ color: "#495579" }}
                className="link"
                key={index}
              >
                <div className="menuItem d-flex flex-row align-items-center gap-3">
                  <el.icon key={el.index} style={{ color: "#495579" }} />
                  {el.heading}
                </div>
              </Link>
            );
          })}
          <div className="d-flex flex-row dept align-items-center gap-3 border-0">
            <BsBuilding style={{ color: "#495579" }} />
            <Dropdown typeof="link" autoClose="outside">
              <Dropdown.Toggle
                className="dept_btn px-0 rounded-0"
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "#495579",
                }}
                id="dropdown-autoclose-outside"
              >
                Departments
              </Dropdown.Toggle>

              <Dropdown.Menu className="border-0">
                {names.map((el, index) => {
                  return (
                    <Dropdown.Item key={index} id={el._id} href={`/department/${el}`} style={{color: "#495579"}}>
                      {el}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Sidebar;
