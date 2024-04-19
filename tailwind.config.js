// tailwind.config.js
module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    // Specify the paths to all files where Tailwind CSS should look for classes to purge
    // This includes your HTML files and your React components
    // Adjust the paths as needed based on your project structure
    // Add any additional paths where Tailwind CSS should look for classes
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
