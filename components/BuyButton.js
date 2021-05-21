import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NEXT_PUBLIC_STRIPE_PK, API_URL } from "../utils/urls";



const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PK);



function BuyButton({ product }) {
  const { user, getToken } = useContext(AuthContext)
  const router = useRouter;
  const redirectToLogin = () => {
    Router.push("/login")
  }

  const handleBuy = async (e) => {
    const stripe = await stripePromise;
    const token = await getToken();
    console.log("handleBuy token", token)
    console.log("handleBuy product", product)
    e.preventDefault();

    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    const session = await res.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    })
  }

  return (
    <>
      {
        !user ?
          <div className="buy-button btn my-2" onClick={redirectToLogin}>
            Log In to Buy
          </div>
          :
          <div className="buy-button btn my-2" onClick={handleBuy}>
            Buy
          </div>
      }
    </>
  );
}
export default BuyButton;
