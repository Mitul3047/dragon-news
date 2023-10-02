import logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="justify-center flex flex-col items-center">
            <img src={logo} alt="" />
            <p className="text-lg">Journalism Without Fear or Favour</p>
            {/* moment js */}
            <p className="text-lg">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;