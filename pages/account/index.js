import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import AuthContext from "../../context/AuthContext";
import { API_URL } from "../../utils/urls";

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if (user) {
        try {
          const token = await getToken();
          const order_res = await fetch(`${API_URL}/orders`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await order_res.json();
          setOrders(data);
        } catch (error) {
          setOrders([]);
        }
        setLoading(false);
      }
    }
    fetchOrders();
  }, [user]);
  return { orders, loading };
}

function Login(props) {

  const { logoutUser, user, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);
  console.log("Account.render orders", orders);

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
                    orders ?
                      (loading ?
                          <div className="item flex-column list-empty">
                            <p>Loading...</p>
                          </div>
                          :
                          orders.map(order =>
                            <div className="item flex-row px-1">
                              <span className="item-name">{order.product.name} <span className="item-status">({order.status})</span></span>
                              <span className="item-price">${order.total}</span>
                            </div>
                          )
                      )
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
