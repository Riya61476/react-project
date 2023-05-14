import "./write.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Write({onPublish}){

  function publishHandler(event){
    event.preventDefault();
    const form=event.target;
    const title=form.querySelector(".writeInput").value;
    const desc=form.querySelector(".writeText").value;
    const category=form.querySelector(".writeCategory").value;
    const obj={
      "id":16,
      "title":title,
      "author":"safak",
      "category":category,
      "img":"https://images.pexels.com/photos/2247677/pexels-photo-2247677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description":desc
    }
    console.log(obj);
    onPublish(obj);
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={publishHandler}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FontAwesomeIcon className="writeIcon" icon={faPlus} />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <select className="writeCategory">
          <option value="Music">Music</option>
          <option value="Life">Life</option>
          <option value="Cinema">Cinema</option>
          <option value="Tech">Tech</option>
          <option value="Sport">Sport</option>
        </select>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}