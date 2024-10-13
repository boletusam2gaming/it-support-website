import React, {useState} from "react";
import './Auth.css';


function Auth(){
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });
  
    const handleLoginChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ ...loginData, [name]: value });
    };
  
    const handleRegisterChange = (e) => {
      const { name, value } = e.target;
      setRegisterData({ ...registerData, [name]: value });
    };
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log("Login Data:", loginData);
    };
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault();
      // Handle registration logic here
      console.log("Register Data:", registerData);
    };
    return(
        <div className="auth-container">
            <div className="auth-toggle">
                <button onClick={() => setIsLogin(true)}>Login</button>
                <button onClick={() => setIsLogin(false)}>Register</button>
            </div>
            {isLogin ?(
                <form onSubmit={handleLoginSubmit} className="auth-form">
                    {/*Login Form */}
                    <h2>Login</h2>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            ):(
                // Register form
                <form onSubmit={handleRegisterSubmit} className="auth-form">
                    <h2>Register</h2>
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={registerData.name}
                            onChange={handleRegisterChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            )}
        </div>

    );   
}

export default Auth;