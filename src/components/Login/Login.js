import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {emailValidation,passwordValidation}  from '../Validation';
import {useDispatch } from 'react-redux';
import adminlo from '../../assests/adminlo.png';
import Users from '../../services/users';

function Login(){

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[getForm,setForm]=useState({
    email:'',
    password:''
  });

  const[getValidation,setValidation]=useState({
    email:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    setForm({
      ...getForm,[event.target.name]:event.target.value
    })
  }


  const onSubmitHandler=(event)=>{
    event.preventDefault(); 
    setValidation({
      ...getValidation,email:!emailValidation(getForm.email)?"please provide email":'',
      password:!passwordValidation(getForm.password)?"Please provide the password":''
    });
    if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
      alert("success");
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if(email === getForm.email && password === getForm.password){
        Users.loadUsers(dispatch,email,password);
        navigate('/Navbar');
      }
      else{
        setValidation({
          email:'no match found',
          password:'no match found'
        });
      }
  
    }
}


    return (<div>
 <div className="login-container row">
                {/* <div className="row"> */}
                <div className="col-4">
                </div>
                <div className="col-4 login-container-box">
                    <form>
                      <div className="form-group">
                        <h1><center> ADMIN</center></h1>
                      <center><img src={adminlo} width= {100} height= {100}/></center><br/>

                        <label>Email address</label>
                        <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email"  class="form-control" placeholder="Enter email"/>
                        {getValidation.email && <div class="alert alert-danger" role="alert">
                        {getValidation.email}
</div> }
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onChangeHandler} value={getForm.password} name="password" class="form-control" id="password" placeholder="Password"/>
                       
                        {getValidation.password && <div class="alert alert-danger" role="alert">
                        {getValidation.password}
</div>}
                      </div>
                  
                      <button onClick={onSubmitHandler}  type="submit" class="btn btn-success"><center>Submit</center></button>
                    </form>
              </div>
                <div class="col-4">
                    
              </div>
              </div>
     
          </div>
    )
}

export default Login;