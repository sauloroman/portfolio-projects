import type { Dispatch } from "@reduxjs/toolkit";
import { AlertType, type ContactFormInfo } from "../../shared/interfaces/ui.interface";
import { setIsLoading } from "./message.slice";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setAlert } from "../ui/ui.slice";

export const startCreatingMessage = ( dataMessage: ContactFormInfo ) => {
    return async ( dispatch: Dispatch ) => {
        dispatch(setIsLoading(true))
        try {

            const messageRef = doc(collection(FirebaseDB, 'messages'))
            await setDoc(messageRef, { ...dataMessage })

            dispatch(setAlert({
                isOpen: true,
                text: "I'll get in contact with you as soon as possible",
                title: 'Message sent',
                type: AlertType.success
            }))

        } catch( error ) {
            console.log(error)
             dispatch(setAlert({
                isOpen: true,
                text: "It was not possible to send the message",
                title: 'Message not sent',
                type: AlertType.error
            }))
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}