/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '320px',
      'sm': '375px',
      'md': '820px',
      'lg': '1024px',
      'xlg' : '1368px',
    },
    extend: {
      backgroundImage:{
        bannerCover : "url('./Assets/cover.png')"
      },
      animation: {
        openprofil: 'profilanimation 0.8s forwards ease-in-out ',
        closeprofil: 'profilanimation2 0.8s forwards ease-in-out',
        showmenu: 'showmenu 0.8s forwards ease-in-out',
        hidemenu: 'hidemenu 0.8s forwards ease-in-out',
        borderanim: 'borderanimation 1.6s alternate ease-in-out infinite',
        hidesection: 'hidesection 1s forwards ease-in-out',
        showsection: 'showsection 1s forwards ease-in-out',
        hidesearchresults: 'hidesearchresults 1s forwards ease-in-out',
        showsearchresults: 'showsearchresults 1s forwards ease-in-out',
        showfav: 'showfav 1s forwards ease-in-out',
        hidefav: 'hidefav 1s forwards ease-in-out',
        showcarddetails: 'showcarddetails 0.9s forwards ease-in-out',
        hidecarddetails: 'hidecarddetails 0.6s forwards ease-in-out',
        
      },
      keyframes: {
        showcarddetails:{
            '0%': {
              transform: 'translateX(90%)',
              
              opacity : '0'
            },
            '100%': { 
              transform: 'translateX(0px)',
              
              opacity: '1'
           }
        },
        hidecarddetails:{
          '0%': {
            transform: 'translateX(0px)',
            
            opacity : '1'
          },
          '100%': { 
            transform: 'translateX(90%)',
            
            opacity: '0'
         }
      },
        showfav:{
          '0%': {
            transform: 'translateY(-200%)',
            height: '0px',
            opacity : '0'
          },
          '100%': { 
            transform: 'translateY(0px)',
            height: 'fit',
            opacity: '1'
         }
        },
        hidefav:{
          '0%': { 
            transform: 'translateY(0px)',
            height: 'fit',
            opacity: '1'
         },
          '100%': {
            transform: 'translateY(-100%)',
            height: '0px',
            opacity : '0'
          }
        },
        hidesearchresults: {
          '0%': { 
            transform: 'translateY(0px)',
            height: 'fit',
            opacity: '1'
         },
          '100%': {
            transform: 'translateY(-700px)',
            height: '0px',
            opacity : '0',
            visibility: 'hidden'
          }
        },
        showsearchresults: {
          '0%': {
            transform: 'translateY(-700px)',
            height: '0px',
            opacity : '0'
          },
          '100%': { 
            transform: 'translateY(0px)',
            height: 'fit',
            opacity: '1'
         }
        },
        hidesection:{
          '0%': { 
            transform: 'translateY(0px)',
            height: '500px',
            opacity: '1'
         },
          '100%': {
            transform: 'translateY(-700px)',
            height: '0px',
            opacity : '0'
          }
        },
        showsection: {
          '0%': {
            transform: 'translateY(-700px)',
            height: '0px',
            opacity : '0'
          },
          '100%': { 
            transform: 'translateY(0px)',
            height: '500px',
            opacity: '1'
         }
        },
        profilanimation:{
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-80px)' },
        },
        profilanimation2:{
          '0%': { transform: 'translateX(-80px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        showmenu:{
          '0%': { transform: 'translateX(58%)',
          opacity: '0' },
          '100%': { transform: 'translateX(0px)',
          opacity: '1' }
        },
        hidemenu:{
          '0%': { 
            transform: 'translateX(0px)',
            opacity: '1'
        },
          '100%': { transform: 'translateX(58%)',
          opacity: '0'
         }
        },
        borderanimation:{
          '0%': { 
            transform: 'translateX(-100%)',
            width: '40px'
          },
          '100%': { 
            transform: 'translateX(100%)',
            width: '40px'
          }
        }
      },
      height:{
        780: '48.75rem',
        600: '37.5rem',
        500: '31.25rem',
        408: '25.5rem',
      },
      colors:{
        primary: '#692062'
      },
      fontFamily:{
        primary: ['Poppins']
      }
    },
  },
  plugins: [],
}
