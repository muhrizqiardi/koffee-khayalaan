import Link from 'next/link'

import Nav from '../../components/Nav'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

import { API_URL, fromImageToURL } from '../../utils/urls'

function Store({ products }) {
    return (
        <>
            <Nav />
            <Hero>
                <h1>Coffee Latte is now 30% off.<br /> Check it out.</h1>
                <button className="btn my-4">Learn More</button>
            </Hero>
            <div className="container">
                <section className="Store">
                    <h2>What do we sell here?</h2>
                    <div className="listing grid-3">
                        {products.map((product) => {
                            return (
                                <Link href={`products/${product.slug}`}>
                                    <div className="card item">
                                        <img src={fromImageToURL(product.image)} alt="image" className="product-img" />
                                        <div className="desc">
                                            <h2 className="product-name">{product.name}</h2>
                                            <p className="price">${product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
export default Store;

export async function getStaticProps() {
    // Fetch the products
    const product_res = await fetch(`${API_URL}/products`);
    const products = await product_res.json();

    // Return the products as props
    return {
        props: {
            products: products
        }
    }
}
