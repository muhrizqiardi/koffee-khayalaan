export const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
export const MAGIC_PUBLIC_KEY = process.env.MAGIC_PUBLIC_KEY || "pk_test_FEC7AA06720C77FB"

export const fromImageToURL = (image) => {
    if (!image) return "/vercel.svg";
    if (image.url.indexOf("/") === 0) {
        return API_URL+image.url;
    }
    return image.url;
}

