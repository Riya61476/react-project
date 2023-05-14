import Post from "../post/Post"
import "./posts.css";

export default function Posts({data}) {
  console.log(data.length);
  return (

    <div className="posts">
      {data.map(function(article){
        return (
          <Post key={article.id} data={article} />
        )
      })}
    </div>
  );
}