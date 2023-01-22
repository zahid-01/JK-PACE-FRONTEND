import Sidebar from "../Dashboard/Sidebar";
import DashboardHeader from "../Dashboard/DashboardHeader";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrl } from "../../AppServices/AppService";
import axios from "axios";
import DataTable from "react-data-table-component";
import Footer from "../Login/Footer";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Users = () => {
  let TableName = "Users of "
  const { deptName } = useParams();
  // const [isEdit, setEdit] = useState(false);
  console.log("url", deptName)
  const [allUsers, setAllUsers] = useState([]);

  const getPddUsers = async () => {
    try {
      let response = await axios.get(
        `${apiUrl}/jkegov/user/department/${deptName}`
      );
      setAllUsers(response.data.users);
    } catch (err) {}
  };
  console.log(allUsers);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
    },
    {
      name: "Edit",
      cell: (row) => (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => alert(row._id)}
        >
          <AiOutlineEdit />
        </button>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => alert(row._id)}
        >
          <AiOutlineDelete />
        </button>
      ),
    },
  ];
  useEffect(() => {
    getPddUsers();
  }, []);

  return (
    <>
      <div className="p-0 m-0" style={{ backgroundColor: "#F1F6F5" }}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <div className=" py-3 px-4 w-100">
              <Link to="/userform">Add User</Link>
              <div className="border mt-3">
              <DataTable
              className="border"
                title={TableName.concat( `${deptName}`)}
                columns={columns}
                data={allUsers}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="400px"
                highlightOnHover
                paginationRowsPerPageOptions={[5]}
              />

              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Users;
