import "./sidebar.css";

export default function Sidebar({onCategoryHandler}) {
  function handleClick(event){
    // console.log(event.target.textContent);
    // console.log(onCategoryHandler)
    onCategoryHandler(event.target.textContent);
  }

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem" onClick={handleClick}>Life</li>
          <li className="sidebarListItem" onClick={handleClick}>Sport</li>
          <li className="sidebarListItem" onClick={handleClick}>Cinema</li>
          <li className="sidebarListItem" onClick={handleClick}>Tech</li>
          <li className="sidebarListItem" onClick={handleClick}>Music</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}