export const getCorrectIconName = ( tech: string ) => {

  const techLowerCase = tech.toLowerCase()

  switch( techLowerCase ) {
    case 'react':
      return 'devicon-react-original colored'
    case 'html5': 
      return 'devicon-html5-plain colored'
    case 'css3':
    case 'css styled components':
      return 'devicon-css3-plain colored'
    case 'javascript':
      return 'devicon-javascript-plain colored'
    case 'typescript':
      return 'devicon-typescript-plain colored'
    case 'tanstack query':
      return 'https://images.seeklogo.com/logo-png/43/1/react-query-logo-png_seeklogo-435661.png'
    case 'redux':
      return 'devicon-redux-original colored'
  }

}