/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: "#E67529",
                textMain: "#2B2B2B",
                textBody: "#534C4C",
            },
            boxShadow: {
                'custom-light': '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
              },
        },
    },
    plugins: [],
}
