import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "../../Assets/CssFiles/Charts.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { apiUrl } from "../../AppServices/AppService";

const Charts = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  // const [Alldistricts, setAllDistricts] = useState([]);
  // const getDistricts = async () => {
  //   try {
  //     let response = await axios.get(`${apiUrl}/jkegov/districts`);
  //     setAllDistricts(
  //       response.data.data.doc.map((el) => {
  //         return el.districtName;
  //       })
  //     );
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   getDistricts();
  // }, []);

  // console.log(Alldistricts);
  return (
    <>
      <div className="py-2 gap-4 d-flex flex-column">
        <div className=" d-flex flex-row gap-2">
          <div className="chart bg-light shadow p-2">
            <h5>Inspections</h5>
            <LineChart width={400} height={200} data={data}>
              <Line
                stroke="#8884d8"
                dataKey="uv"
                type="monotone"
                activeDot={{ r: 8 }}
              />
              <Line stroke="#82ca9d" dataKey="pv" type="monotone" />

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>

          <div className="bg-light shadow p-2">
            <h5>Projects</h5>

            <LineChart width={400} height={300} data={data}>
              <Line
                stroke="#8884d8"
                dataKey="uv"
                type="monotone"
                activeDot={{ r: 8 }}
              />
              <Line stroke="#82ca9d" dataKey="pv" type="monotone" />

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>
        <div className="bg-light shadow p-2">
          <h5>Funds</h5>

          <LineChart width={500} height={300} data={data}>
            <Line
              stroke="#8884d8"
              dataKey="uv"
              type="monotone"
              activeDot={{ r: 8 }}
            />
            <Line stroke="#82ca9d" dataKey="pv" type="monotone" />

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </>
  );
};
export default Charts;
