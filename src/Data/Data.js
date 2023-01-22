import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { FcInspection } from "react-icons/fc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiFundsLine } from "react-icons/ri";

export const SidebarData = [
  {
    icon: MdOutlineDashboard,
    heading: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: CgProfile,
    heading: "Profile",
    path: "/profile",
  },
];

const paths = [
  { path: "badp" },
  { path: "pdd" },
  { path: "pwd" },
  { path: "phe" },
  { path: "sw" },
  { path: "home" },
  { path: "csc" },
];
const loginHeader = [
  {
    appName: "J&K Public Automated Credibility Establishment",
  },
];
const DashHeader = [
  {
    appName: "JK-PACE",
    profile:
      "https://images.unsplash.com/photo-1672165718750-b6888e573694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    name: "Imran Sufi",
    role: "Super Admin",
  },
];

// const data ={
//   animations: {
//         enabled: true,
//         easing: "easeinout",
//         speed: 800,
//         animateGradually: {
//           enabled: true,
//           delay: 150,
//         },
//         dynamicAnimation: {
//           enabled: true,
//           speed: 350,
//         },
//       },
//       series:[{
//         data: [23, 34, 12, 54, 32, 43]
//       }]

// }

export const data = {
  animations: {
    enabled: true,
    easing: "easeinout",
    speed: 800,
    animateGradually: {
      enabled: true,
      delay: 150,
    },
    dynamicAnimation: {
      enabled: true,
      speed: 350,
    },
  },
  series: [
    {
      name: "Inspections",
      data: [2, 0, 3, 6, 2, 1, 2],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: "auto",
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#ff929f"],
    },
    // tooltip: {
    //   x: {
    //     format: "dd/MM/yy",
    //   },
    // },
    grid: {
      show: false,
    },
    xaxis: {
      type: "Departments",
      categories: ["PDD", "PWD", "PHE", "SW", "BADP", "CSC", "HOME"],
    },
    yaxis: {
      show: false,
    },
    toolbar: {
      show: false,
    },
  },
};

const app = [
  {
    profile:
      "https://images.unsplash.com/photo-1671379827325-2fa2dc475840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

export const cardsData = [
  {
    title: "Inspection",
    color: {
      backGround: "#2C74B3",
      boxShadow: "0px 5px 10px 0px #A0C3D2",
    },
    png: FcInspection,

    barValue: 70,
    value: "100",
    series: [
      {
        name: "Inspection",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Projects",
    color: {
      backGround: "#2C74B3",

      boxShadow: "0px 5px 10px 0px #A0C3D2",
    },
    png: AiOutlineFundProjectionScreen,

    barValue: 80,
    value: "14,270",
    series: [
      {
        name: "Total Projects",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
      {
        name: "Active Projects",
        data: [4, 10, 5, 6, 42, 9, 18],
      },
    ],
  },
  {
    title: "Funds",
    color: {
      backGround: "#2C74B3",

      boxShadow: "0px 5px 10px 0px #A0C3D2",
    },
    png: RiFundsLine,

    barValue: 60,
    value: "4,270",
    series: [
      {
        name: "Total Funds",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export default app;
export { loginHeader };
export { DashHeader };
export { paths };
// export {data}
