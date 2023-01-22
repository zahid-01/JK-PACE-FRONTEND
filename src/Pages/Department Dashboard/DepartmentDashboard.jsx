import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../../Assets/CssFiles/DepartmentDashboard.css";

const administrationTab = [
  {
    title: "Administration",
  },
  { menuItem: "Users", path: "/users" },
  { menuItem: "Roles/Permissions", path: "/roles" },
];
const masterTab = [
  { title: "Master" },
  { menuItem: "Districts", path: "/districts" },
  { menuItem: "Blocks", path: "/blocks" },
  { menuItem: "Villages", path: "/villages" },
  { menuItem: "Schemes", path: "/schemes" },
];

const linkTabs = [
  { title: "Reports", path: "/reports" },
  { title: "Messages", path: "/messages" },
  { title: "Documents", path: "/documents" },
  
];
const DepartmentDashboard = (props) => {
  return (
    <>
      <h5 className="fw-bold">{props.deptName}</h5>
      <div
        className="mb-2 d-flex flex-row justify-content-evenly align-items-center shadow"
        style={{ backgroundColor: "white" }}
      >
        <Dropdown className="d-inline mx-2" autoClose="outside">
          <Dropdown.Toggle
            className="dept_tab px-2 rounded-0 border-0"
            style={{
              backgroundColor: "white",
              border: "none",
              color: "#495579",
            }}
            id="dropdown-autoclose-outside"
          >
            {administrationTab[0].title}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {administrationTab.map((el) => {
              return (
                <Dropdown.Item>
                  <Link to={`${el.path}/${props.deptName}`} key={el.id}>
                    {el.menuItem}
                  </Link>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline mx-2" autoClose="outside">
          <Dropdown.Toggle
            className="dept_tab px-2 rounded-0 border-0"
            style={{
              backgroundColor: "white",
              color: "#495579",
            }}
            id="dropdown-autoclose-outside"
          >
            {masterTab[0].title}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {masterTab.map((el, index) => {
              return (
                <Dropdown.Item key={index}>
                  <Link to={`${el.path}/${props.deptName}`} key={el.id}>
                    {el.menuItem}
                  </Link>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        {linkTabs.map((el, index) => {
          return (
            <Link
              className="dept_tab px-3 py-1"
              to={el.path}
              style={{ color: "#495579", textDecoration: "none"}}
              id={el.id}
              key={index}
            >
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default DepartmentDashboard;
