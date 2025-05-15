export const getShortDescription = ( descriptionProject: string ): string => {
  return descriptionProject.split('.')[0] + '.'
}