export const getProjectBadgeName = ( badge: string ) => {
  switch( badge ) {
    case 'FrontEnd': return 'frontend'
    case 'FullStack': return 'fullstack'
    case 'Desktop': return 'desktop'
  }
}