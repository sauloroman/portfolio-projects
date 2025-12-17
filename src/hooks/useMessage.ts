import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import type { ContactFormInfo } from "../shared/interfaces/ui.interface"
import { startCreatingMessage } from "../store/messages/message.thunk"

export const useMessage = () => {

    const dispatch = useDispatch<any>()
    const { isLoading } = useSelector( (state:RootState) => state.messages)

    const onSendMessage = ( data: ContactFormInfo ) => {
        dispatch( startCreatingMessage( data ) )
    }

    return {    
        isLoading,

        onSendMessage,
    }

}