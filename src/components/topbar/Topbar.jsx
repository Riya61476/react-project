import "./topbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faPinterestSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";


export default function Topbar({isLoggedIn,checkLogin}) {

  function handleLogout(){
    localStorage.removeItem("user1");
    checkLogin(false);
  }

  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon icon={faFacebookSquare} className="topIcon"/>
        <FontAwesomeIcon icon={faTwitterSquare} className="topIcon"/>
        <FontAwesomeIcon icon={faPinterestSquare} className="topIcon"/>
        <FontAwesomeIcon icon={faInstagramSquare} className="topIcon"/>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">Home</Link></li>
          <li className="topListItem"><Link className="link" to="/about">about</Link></li>
          <li className="topListItem"><Link className="link" to="/contact">contact</Link></li>
          <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
          <li className="topListItem" onClick={handleLogout}>{isLoggedIn && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {isLoggedIn ? <Link to="/settings"><img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /></Link>
        :
        (
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/login">Login</Link></li>
            <li className="topListItem"><Link className="link" to="/register">register</Link></li>
          </ul>
        )
        }
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}