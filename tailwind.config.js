/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}', './admin/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // fontFamily: fontFamilyMap,
      colors: {
        // we've added our own colour that maps to Payload's css variable so we can re-use the same theme styling!
        error: 'var(--theme-error-400)',
      },
      screens: {
        'above-800': '800px', // Custom screen breakpoint for 800px and above
        'above-900': '900px',
        'above-700': '700px', // Custom screen breakpoint for 800px and above
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')],
}
