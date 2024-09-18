module.exports = {
    reactStrictMode: false,
    transpilePackages: ["geist"],
    env: {
        google_map: 'AIzaSyDIkOy2b--fTHoMju1muXyYXR2r0GJtutU',
        backend_url:
            process.env.NODE_ENV === "production"
                ? "https://backend.airbnb.appstick.com.bd/"
                : "https://backend.airbnb.appstick.com.bd/",
        socket_io_url:
            process.env.NODE_ENV === "production"
                ? "https://backend.airbnb.appstick.com.bd/"
                : "https://backend.airbnb.appstick.com.bd/",
    },
    images: {
        domains: [
            "appstick-resources.s3.ap-southeast-1.amazonaws.com",
            "appstick.s3.ap-southeast-1.amazonaws.com",
            ""
        ],
    },
}