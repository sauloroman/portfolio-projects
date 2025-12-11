export const getCorrectIconName = ( tech: string ) => {
  const techLowerCase = tech.toLowerCase()

  console.log(techLowerCase)

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
      return 'https://formadoresit.es/wp-content/uploads/2018/07/Logo_javaswing.png'
    case 'mysql':
      return 'devicon-mysql-original colored'
    case 'react router':
      return 'devicon-reactrouter-plain colored'
    case 'tanstack query':
      return 'https://images.seeklogo.com/logo-png/43/1/react-query-logo-png_seeklogo-435661.png'
    case 'redux':
      return 'devicon-redux-original colored'
    case 'firebase':
      return 'devicon-firebase-plain colored'
    case 'css styled components':
      return 'devicon-styledcomponents-plain colored'
  }

}