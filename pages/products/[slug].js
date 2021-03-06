import { API_URL, fromImageToURL } from '../../utils/urls'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import Link from 'next/link';
import BuyButton from '../../components/BuyButton';

function Product({ product }) {
    return (
        <>
            <Nav></Nav>
            <div className="container py-4" style={{ "minHeight": "75vh" }}>
                <Link href="/store">
                    <a className="m-4">
                        <i className="bi bi-chevron-left"></i>
                            Go back to store page
                         </a>
                </Link>
                <div className="product card mx-1 grid-2">
                    <img src={fromImageToURL(product.image)} alt="Product Image" style={{ "width": "100%", }} />
                    <div className="desc p-1">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <br />
                        <h4>Description</h4>
                        <p>
                            {product.content}
                        </p>
                        <BuyButton product={product}/>
                        <p className="my-1">NOTE: This is a showcase website. PLEASE don't use your <strong>real card numbers,</strong> use <strong>4242 4242 4242 4242</strong> instead!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export const getStaticProps = async ({ params: { slug } }) => {
    // Retrieve all the possible paths
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
    const found = await product_res.json();

    return {
        props: {
            product: found[0] // because the API response for filters is an array 
        }
    }
}

export const getStaticPaths = async () => {
    // Retrieve all the possible paths
    const product_res = await fetch(`${API_URL}/products`)
    const products = await product_res.json();

    // Return them to NextJS context
    return {
        paths: products.map((product) => ({
            params: { slug: String(product.slug) }
        })),
        fallback: false
    }
}

export default Product;
