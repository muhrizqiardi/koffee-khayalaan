export const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
export const MAGIC_PUBLIC_KEY = process.env.MAGIC_PUBLIC_KEY || "pk_test_FEC7AA06720C77FB"
export const NEXT_PUBLIC_STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'sk_test_51ItLn6HwBeMEipHZFRffrL2u3p9a2L2rGsQQtbyDZjv2171zlykauW42eBFIfTCVvriH5WTbzWwBJJgNkry0bAuQ00BPMRBD9p'

export const fromImageToURL = (image) => {
    if (!image) return "/vercel.svg";
    if (image.url.indexOf("/") === 0) {
        return API_URL+image.url;
    }
    return image.url;
}

