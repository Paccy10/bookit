module.exports = {
  reactStrictMode: true,
  env: {
    DATABASE_LOCAL_URL: "mongodb://localhost:27017/bookit",
    CLOUDINARY_CLOUD_NAME: "dhsoe7agl",
    CLOUDINARY_API_KEY: "143542243967612",
    CLOUDINARY_SECRET_KEY: "JkBeGbGKIYogDFhNUkXegCKhjkw",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
