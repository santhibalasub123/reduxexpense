import './Header.css';
import {Link,useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch } from 'react-redux';
import Users from '../../services/users';

function Header(){

  const usersInfo = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onLogout=(event)=>{
        event.preventDefault();
        Users.logout(dispatch);
        navigate('/');
  }
    return (<div>
               <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#"><i className="fa fa-address-book-o" aria-hidden="true"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About company</Link>  
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/service">Service</Link>  
                                   </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
              </ul>
              {!usersInfo.loginStatus &&
              <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-outline-success my-2 my-sm-0 submit-register" type="submit"><Link to="/register">Sign Up</Link></button>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="Login">Login</Link></button>
            </form>
               }

{usersInfo.loginStatus &&
              <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-outline-success my-2 my-sm-0 submit-register"  onClick={onLogout} type="submit">Logout</button>
            </form>
               }
            </div>
          </nav>
          <center><h1></h1></center>
    </div>)
    
}

export default Header;