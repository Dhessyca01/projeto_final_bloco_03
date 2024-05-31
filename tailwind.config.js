/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:  {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {},
    colors: {
      'CadetBlue': '#5F9EA0',
      'MediumAquamarine': '#66CDAA',
      'MediumTurquoise': '#48D1CC',
      'tomato': '#FF6347',
      'preto': '#0E0E0E',
      'Khaki': '#F0E68C',
      'Moccasin':	'#FFE4B5',
      'LemonChiffon':	'#FFFACD',
      'RoyalBlue':	'#4169E1',
      'LightSteelBlue':	'#B0C4DE',
      'red': '#FF0000',
      'cinza': '#181716',
      'Teal':	'#008B8B',
      'DarkSeaGreen': '#8FBC8F',
      'verde': '#36AB9C',
      'branco': '#FFFFFF',
      'Gold':	'#FFD700',
      'SandyBrown':	'#F4A460'	,
     'NavajoWhite':	'#FFDEAD',	
     'Wheat':	'#F5DEB3'	,
     'BurlyWood':	'#DEB887'	,
     'Tan':	'#D2B48C',
      'azul': '#3871C1',
      'Cornsilk':	'#FFF8DC',
      'SaddleBrown':	'#8B4513',
      'transparent': 'transparent',
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
      display: ["Open Sans", "Lora"]
    },
  },
  plugins: [],
}