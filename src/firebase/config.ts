import { initializeApp } from "firebase/app";
import { getEnvVariables } from "../shared/helpers/get-env-variables";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvVariables()

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storagebucket: VITE_STORAGEBUCKET,
  messagingsenderid: VITE_MESSAGINGSENDERID,
  appid: VITE_APPID,
}

export const FirebaseApp = initializeApp( firebaseConfig )
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )