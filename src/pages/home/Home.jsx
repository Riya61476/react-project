import './home.css'
import Header from "../../components/header/Header"
import Posts from '../../components/posts/Posts';
import Single from '../single/Single';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home({data,onCategoryHandler}){
  console.log(`Homes ${data}`);
  return (
    <>
      <Header />
      <div className="home">
        <Posts data={data} onCategoryHandler={onCategoryHandler} />
        <Sidebar onCategoryHandler={onCategoryHandler}/>
      </div>
    </>
  );
}