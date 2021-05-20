import Link from "next/link";
import { useContext } from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import AuthContext from "../../context/AuthContext";

function Login(props) {

  const { logoutUser, user } = useContext(AuthContext);

  return (
    <>
      <Nav />
      <Hero />
      <div className="container flex">
        <div className="account-panel card p-3 flex">
          <h1>Account Page</h1>
          {
            user ?
              <>
                <div className="order-list">
                  {
                    false ?
                      <div className="item flex-row px-1">
                        <span className="item-name">Water <span className="item-quantitiy">(x3)</span></span>
                        <span className="item-price">$100</span>
                      </div>
                      :
                      <div className="item flex-column list-empty">
                        <p>Your order list are empty</p>
                        <p>¯\_(ツ)_/¯</p>
                      </div>
                  }
                </div>
                <button className="my-1 btn">Checkout</button>
                <button onClick={logoutUser} className="my-1 btn">Log Out</button>
              </>
              :
              <>
                <div className="order-list">
                  <div className="item flex-column list-empty">
                    <p>Please log in first</p>
                    <p>¯\_(ツ)_/¯</p>
                  </div>
                </div>
                <Link href="/login" passHref><a href="/login" className="my-1 btn text-center">Log In</a></Link>
              </>
          }
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Login;
