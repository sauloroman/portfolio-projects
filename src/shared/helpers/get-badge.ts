export const getProjectBadgeName = ( badges: string[] ) => {
  const badgesNames: string[] = badges.map( badge => badge.toLowerCase() )
  return badgesNames
}