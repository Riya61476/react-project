// component for single component

import "./post.css";

export default function Post({data,onCategoryHandler}) {
  
  return (
    <div className="post">
    <img
      className="postImg"
      // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      src={data.img}
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">{data.category}</span>
      </div>
      <span className="postTitle">{data.title}</span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">{data.description}</p>
  </div>
    
  );
}