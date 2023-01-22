import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PasswordForm from "./Pages/ForgotPassword/PasswordForm";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/Profile/ProfilePage";
import Users from "./Pages/Users/Users";
import UserForm from "./Pages/UserForm/UserForm";
import Departments from "./Pages/Departments/Departments";
import Roles from "./Pages/Roles/Roles";
import Districts from "./Pages/Districts/Districts";
import Blocks from "./Pages/Blocks/Blocks";
import Villages from "./Pages/Villages/Villages";
import Schemes from "./Pages/Schemes/Schemes";
import Reports from "./Pages/Reports/Reports";
import Messages from "./Pages/Messages/Messages";
import Documents from "./Pages/Documents/Documents";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetPassword" element={<PasswordForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users/:deptName" element={<Users />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/districts/:deptName" element={<Districts />} />
        <Route path="/blocks/:deptName" element={<Blocks />} />
        <Route path="/villages/:deptName" element={<Villages />} />
        <Route path="/schemes/:deptName" element={<Schemes />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="department/:deptName" element={<Departments />} />
      </Routes>
    </Router>
  );
}
/* 

  login
  dashboard
  department/PHE/users
  department/PHE/villages
  department/PHE/blocks



*/


export default App;
