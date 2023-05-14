import SinglePost from "./components/singlePost/SinglePost";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Contact from "./pages/contact/Contact"
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import articles from "./data/db"
import { useState } from "react";

export default function App(){
  // console.log(articles);

  const [login,setLogin]=useState(false);
  const [data,setData]=useState(articles);
  
  // handle filtering according to catgory
  function handleCategory(category){
    setData(articles.filter(
      function(article){
        if(article.category===category){
          return true;
        }
      }
    ));
    console.log(data);
  }

  // add new Article
  function AddArticle(newArticle){
    // console.log("running");
    articles.push(newArticle);
    setData([...data,newArticle]);
  }

  function checkLogin(isLoggedIn){
    setLogin(isLoggedIn);
    console.log(isLoggedIn);
  }

  return (
    <Router>
      <Topbar isLoggedIn={login} checkLogin={checkLogin}/>
      <Routes>
        <Route path="/" element={<Home data={data} onCategoryHandler={handleCategory}/>}></Route>
        <Route path="/write" element={<Write onPublish={AddArticle}/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={login ? <Home data={data} onCategoryHandler={handleCategory}/>:<Login onCheckLogin={checkLogin} />}></Route>
        <Route path="/write" element={login ? <Write onPublish={AddArticle}/>:<Register/>}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
        <Route path="/register" element={login ? <Home data={data} onCategoryHandler={handleCategory}/>:<Register/>}></Route>
      </Routes>
    </Router>
  );
}

