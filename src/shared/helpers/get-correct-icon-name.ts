export const getCorrectIconName = ( tech: string ) => {
  const techLowerCase = tech.toLowerCase()
  switch( techLowerCase ) {
    case 'react':
      return 'devicon-react-original colored'
    case 'html5': 
      return 'devicon-html5-plain colored'
    case 'css3':
      return 'devicon-css3-plain colored'
    case 'javascript':
      return 'devicon-javascript-plain colored'
    case 'typescript':
      return 'devicon-typescript-plain colored'
    case 'tailwindcss':
      return 'devicon-tailwindcss-original colored'
    case 'java':
      return 'devicon-java-plain colored'
    case 'java swing':
      return 'https://res.cloudinary.com/dlamufioy/image/upload/v1765829510/portfolio/icons/Logo_javaswing_n8ytha.png'
    case 'mysql':
      return 'devicon-mysql-original colored'
    case 'react router':
      return 'devicon-reactrouter-plain colored'
    case 'tanstack query':
      return 'https://res.cloudinary.com/dlamufioy/image/upload/v1765829478/portfolio/icons/react-query-logo-png_seeklogo-435661_fdst6a.png'
    case 'redux':
      return 'devicon-redux-original colored'
    case 'firebase':
      return 'devicon-firebase-plain colored'
    case 'css styled components':
      return 'devicon-styledcomponents-plain colored'
    case 'express':
      return 'devicon-express-original colored'
    case 'flatlaf':
      return 'https://res.cloudinary.com/dlamufioy/image/upload/v1765829631/portfolio/icons/12702749_n9nfsr.png'
    case 'mvc':
      return 'https://res.cloudinary.com/dlamufioy/image/upload/v1765829439/portfolio/icons/icons8-s%C3%ADmbolo-de-unidad-100_csua9y.png'
    case 'jasperreports':
      return 'https://res.cloudinary.com/dlamufioy/image/upload/v1765829782/portfolio/icons/jaspersoft_studio_icon_s5glkn.jpg'
  }

}