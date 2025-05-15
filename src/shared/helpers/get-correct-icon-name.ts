export const getCorrectIconName = ( tech: string ) => {

  const techLowerCase = tech.toLowerCase()

  switch( techLowerCase ) {
    case 'react':
      return 'devicon-react-original'
    case 'html5': 
      return 'devicon-html5-plain'
    case 'css3':
      return 'devicon-css3-plain'
    case 'javascript':
      return 'devicon-javascript-plain'
    case 'typescript':
      return 'devicon-typescript-plain'
    case 'tanstack query':
      return 'https://images.seeklogo.com/logo-png/43/1/react-query-logo-png_seeklogo-435661.png'
  }

}