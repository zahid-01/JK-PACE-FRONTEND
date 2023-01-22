import Footer from "../Login/Footer";
import DashboardHeader from "../Dashboard/DashboardHeader";
import Sidebar from "../Dashboard/Sidebar";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { apiUrl } from "../../AppServices/AppService";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Blocks = () => {
  let TableName = "Blocks of "
  const { deptName } = useParams();
  const [AllBlocks, setAllBlocks] = useState([]);
  const getBlocks = async () => {
    try {
      let response = await axios.get(`${apiUrl}/jkegov/blocks`);
      setAllBlocks(response.data.data.doc)
} catch (error) {}
};
useEffect(() => {
  getBlocks();
}, []);

  const columns = [
    {
      name: "District Name",
      selector: (row) => row.blockName,
    },
    {
      name: "District Name",
      selector: (row) => row.districtName,
    },
    {
      name: "District Code",
      selector: (row) => row.districtCode,
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
    return(
        <>
         <div className="p-0 m-0" style={{ backgroundColor: "#F1F6F5" }}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <div className="px-4 py-3 w-100 d-flex flex-column">
            <DataTable
              className="border"
                title={TableName.concat( `${deptName}`)}
                columns={columns}
                data={AllBlocks}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="400px"
                highlightOnHover
                paginationRowsPerPageOptions={[5]}
              />
              {/* <DataTable tableName="Blocks" name="Block Name" code="District Code" district="District Name" edit="Edit" /> */}
              
            </div>
          </div>
          <Footer />
        </div>
      </div>
        </>
    )
}
export default Blocks