import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ExploringBlog from "./components/ExploringBlog";
import AboutUs from "./components/AboutUs";
import Feed from "./components/Feed";
import CreatePost from "./components/CreatePost";
import Signin from "./components/Signin";
import Register from "./components/Register";
import UserContext from "./contexts/UserCreateContext";
import { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Signout from "./components/Signout";

function App() {
const history=useHistory()
  const [isLogin ,setIsLogin] = useState(false);

// Getting data from local storage(user is login or not)
useEffect(()=>{
const islogin = window.localStorage.getItem("isLogin")
setIsLogin(JSON.parse(islogin))
},[])

// Setting data to local storage(user is login or not)
useEffect(()=>{  
    window.localStorage.setItem("isLogin",JSON.stringify(isLogin))
  },[isLogin])

  return (
    <>
 <UserContext.Provider value = {{isLogin,setIsLogin}}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>

          <Route path="/aboutus" component={AboutUs} />

          <Route path="/feed" exact component={Feed} />

          <Route path="/feed/exploringblog/:id" component={ExploringBlog} />

          <Route path="/createpost" component={CreatePost} />

          <Route path="/signin" exact>  <Signin /> </Route>
          
          <Route path="/signout">  <Signout /> </Route>

          <Route path="/signin/register" component={Register}></Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;