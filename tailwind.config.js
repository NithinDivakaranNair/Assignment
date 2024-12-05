module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        customGray: '#898989', 
        lightwhite: '#FAF3EA',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif',"Montserrat"], // Define the font
      },
    },
  },
};
