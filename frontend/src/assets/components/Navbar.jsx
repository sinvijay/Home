import { Link } from "react-router-dom"
import logo from '../../../public/logo.png'
import { FaHome, FaUser, FaEnvelope, FaPowerOff, FaCalendarAlt  } from 'react-icons/fa';
import { PiHandsPrayingDuotone } from "react-icons/pi";
import './Navbar.css'
import Profile from "./Profile";

export default function Navbar(){
    window.Date
    return(
        <div>
            <div className="nav-menu">
                <Link to={'/'}><img src="logo.png" alt="logo" width={120} /></Link>
                <ul>
                    
                    <Link to={'/'}>Home</Link>
                    <Link to={'/calculator'}>Calculator</Link>
                    <Link to={'/contact'}>Contact</Link>
                </ul>
            </div>
            <div className="nav-icon">
                <div className="home-icon"><Link to="/"><FaHome /></Link></div>
                <div className="wel-icon"><p>Welcome</p><PiHandsPrayingDuotone />{'User'}</div>
                
                <div className="user-icon"><h4> {<Link to='/profile'><FaUser /></Link>}</h4></div>
                <div className="env-icon"><h4>{<Link to='/contact'><FaEnvelope /></Link>}</h4></div>
                <div className="env-icon"><h4>{<Link to='/contact'><FaCalendarAlt /></Link>}</h4></div>
                <div className="env-icon"><h4>{<Link to='/contact'><FaPowerOff /></Link>}</h4></div>
            </div>
            

        </div>
    )
}