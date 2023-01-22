import '../../Assets/CssFiles/Header.css'
import emblem from "../../Assets/Images/pngwing.com.png"
import jakegaLogo from "../../Assets/Images/JaKeGa Logo.png"
import { loginHeader } from '../../Data/Data';
const Header = () => {
  return (
    <>
      <div className="header__div px-3 py-1 mb-2 d-flex flex-row align-items-center justify-content-evenly shadow-sm" style={{backgroundColor: "white"}}>
        <img src={emblem} alt="emblem" style={{width: "50px", height: "80px"}}/>
        <h3 className=" text-center app__name">{loginHeader[0].appName}
          
        </h3>
        <img src={jakegaLogo} alt="Logo" style={{width: "100px", height: "80px"}}/>

      </div>
    </>
  );
};
export default Header;
