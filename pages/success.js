import { useRouter } from "next/router";
import Head from 'next/head';
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/urls";

const useOrder = (session_id) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/orders/confirm`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ checkout_session: session_id })
        })
        const data = await res.json();
        setOrder(data);
      } catch (error) {
        setOrder(null);
      }
      setLoading(false);
    }
    fetchOrder();
  }, [session_id]);
  return {order, loading}
}

function Component(props) {

  const router = useRouter();
  const { session_id } = router.query;

  const { order, loading } = useOrder(session_id);

  return (
    <>
      <Nav />
      <Hero>
        <div className="success">
          <h1>Thank you for purchasing!</h1>
          { loading && <h3>Loading...</h3>}
          {order && <><h3>Your order is confirmed, with order number: </h3><span>{order.id}</span></>}
        </div>
      </Hero>
    </>
  );
}
export default Component;
