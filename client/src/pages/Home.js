import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { useEffect } from "react";
import axios from "axios";
import FeedInHomePage from "../components/FeedInHomePage";
import UserContext from "../contexts/UserCreateContext";
import { useHistory } from "react-router-dom";
import Main2 from "../components/Main2";
import './home.css'

const Home = () => {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log("err"));
  }, []);

const {isLogin, setIsLogin}= useContext(UserContext);

const history = useHistory()
  return (
    <div className="main">
      <>
      {
        isLogin ? <>      
            <Navbar />
        <Main data={data} />
            <FeedInHomePage data={data} />
            <Main2/> 
            <Footer /> </>
             : history.push("/signin")
      }
      </>
    </div>
  );
};

export default Home;
