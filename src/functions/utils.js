import {auth} from '../config/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function setHeader(headers={}){
    return {...headers,authorization:`Bearer ${auth.currentUser.accessToken}`}
}
export async function signUpWithEmailAndPassword(email,password){
    return await createUserWithEmailAndPassword(auth, email, password)
}
export async function signUserWithEmailAndPassword(email,password){
    return await signInWithEmailAndPassword(auth,email,password)
}
export async function saveTutorDetails(document){
    return await axios.post(BASE_URL+'/d2c/teachers/details',document,{
        headers:setHeader()
    })
    
}
export async function saveProfileImage(imagefile){
    const formData = new FormData();
    formData.append("image", imagefile);
    formData.append("page",8)
    console.log(formData)
    return await axios.post(BASE_URL+'/d2c/teachers/details', formData, 
    {
        headers: setHeader({'Content-Type': 'multipart/form-data'})
    })
}