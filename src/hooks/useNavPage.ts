import { useNavigate } from "react-router-dom"

export const useNavPage = () => {

  const navigate = useNavigate()

  const onNavigatePage = ( page: string ) => {
    navigate( page )
    window.scrollTo(0, 0)
  }

  const onNavigateHomePage =  () => {
    navigate( '/' ) 
    window.scrollTo(0, 0)
  }

  return {
    onNavigatePage,
    onNavigateHomePage
  }

}