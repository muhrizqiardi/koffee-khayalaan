import { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import AuthContext from "../../context/AuthContext";

function Login(props) {

  const [email, setEmail] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  }

  console.log(email)
  return (
    <>
      <Nav />
      <Hero />
      <div className="container flex">
        <form onSubmit={handleSubmit} className="login-form card p-3 flex">
          <h1>Log In</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="my-1"
            placeholder="Email address..."
            type="text"
          />
          {/* <input className="my-1" placeholder="Password" type="password" name="" id="" /> */}
          <button className="my-1 btn" type="submit">Log In</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Login;
