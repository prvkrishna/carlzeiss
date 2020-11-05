import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import  Login  from './components/login/login';
import ProtectedRoute from './components/protectedRoute';
import  Home  from './components/home/home';
import  Users  from './components/users/user';
import  Blogs  from './components/blogs/blogs';
import  Blog  from './components/blogs/blog';
function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <ProtectedRoute exact path="/home" component={Home}/>
        <ProtectedRoute exact path="/users" component={Users}/>
        <ProtectedRoute exact path="/blogs" component={Blogs}/>
        <ProtectedRoute exact path="/blog/:postId" component={Blog}/>
        <Redirect exact to="/home" />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
