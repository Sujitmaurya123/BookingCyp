/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["images.pexels.com", "media.gettyimages.com", 
      "images.unsplash.com", "media.istockphoto.com", 
      "encrypted-tbn0.gstatic.com", "cf.bstatic.com",
      "cdn5.vectorstock.com", "www.shutterstock.com","www.usatoday.com"
      ,"static.vecteezy.com"],
  }
};

export default nextConfig;
