export const getParagraphsFromTxt = ( txt: string ): string[] => {

  if ( !txt ) return []

  const sentences = txt.split(/(?<=\.)\s+(?=[A-Z])/g).map( sentence => sentence.trim() )
  
  let paragraphs: string[] = []
  let currentParagraph = ""

  for( const sentence of sentences ) {
    currentParagraph += ( sentence + '' )

    if ( currentParagraph.split('.').length > 3 ) {
      paragraphs.push( currentParagraph.trim() )
      currentParagraph = ''
    }

  }

  if ( currentParagraph ) {
    paragraphs.push( currentParagraph.trim() )
  }

  return paragraphs

}