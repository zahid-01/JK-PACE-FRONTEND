import Cards from "../Dashboard/Cards";
import { apiUrl } from "../../AppServices/AppService";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "../../Assets/CssFiles/MainDash.css"

const MainDash = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get(`${apiUrl}/jkegov/user/allUsers`);
      setAllUsers(response.data.data.doc);
    } catch (err) {}
  };
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
      name: "Department",
      selector: (row) => row.department,
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
    getUsers();
  }, []);

  return (
    <>
      <div className="w-100 main_dash d-flex flex-column px-4 py-3">
        <h5 className="fw-bold">Dashboard</h5>
        <Cards />
        <div className="border mt-2">
          <DataTable
            title="Users"
            columns={columns}
            data={allUsers}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="400px"
            highlightOnHover
            
          />
        </div>
      </div>
    </>
  );
};
export default MainDash;
