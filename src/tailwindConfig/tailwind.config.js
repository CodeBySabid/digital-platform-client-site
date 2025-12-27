/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                // This class forces the font-size to be respected for the masked dots
                '.password-fix': {
                    // For WebKit (Chrome, Safari, Edge)
                    '-webkit-text-security': 'disc', 
                    // Fallback/standard (though less consistently supported)
                    'text-security': 'disc',
                    // This is the key line for size correction in some browsers
                    'font-size-adjust': 'none', 
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
}



// /** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: 'class',
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["light"],
//   },
// };

// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: { extend: {} },
//   plugins: [],
// };
