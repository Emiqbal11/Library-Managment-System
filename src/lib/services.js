import moment from "moment";
import {
  getImageFromStorageByRef,
  getProfileImage,
  getSubCollection,
} from "../utils";
import { auth, firestore, functions } from "./firebase";



// Authentication Services
export const loginUser = async (email, password) =>
  await auth.signInWithEmailAndPassword(email, password);

export const logOut = async () => await auth.signOut();
export const restEmail = async (email) =>
  await auth.sendPasswordResetEmail(email);

export const getUserDataById = async (uid) =>
  await firestore.collection("admins").doc(uid).get();

//crud in one collection//////
export const  createData=async(collectionName,object)=>{
await firestore.collection(collectionName).add(object);
// getData();
}
export const updateData=async(collectionnName,id,object)=>{
  await firestore.collection(collectionnName).doc(id).update(object);

}
export const getData=async(collectionName,setState)=>{
  const getDataSnap=await firestore.collection(collectionName).get();
  let temp=[]
  getDataSnap.forEach((dataDoc)=>{
    temp.push({...dataDoc.data(),id:dataDoc.id})
  })
  setState(temp)
}
export const deleteData=async(collectionName,id)=>{
await firestore.collection(collectionName).doc(id).delete();

}


//get all 

export const  getAll=async(collectionName,setState)=>{
const allSnap=await firestore.collection(collectionName).get();
let temp=[];
allSnap.forEach((allDocs)=>{
  temp.push({...allDocs.data(),id:allDocs.id})
})
setState(temp)
}

// get by id

export const getSpecfic=async(collectionName,id,setState)=>{
  const specificSnap=await firestore.collection(collectionName).doc(id).get(); 
 
  setState({Data:specificSnap.data(),id:specificSnap.id});
  return specificSnap.data()
}