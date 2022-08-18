
import {firestore,storage} from '../lib/firebase';
import moment from "moment";

export const convertToDateString = (value) => {
  if (!value) return "";
  if (value.seconds !== undefined) {
    return new Date(
      value.seconds * 1000 + value.nanoseconds / 1000000
    ).getTime();
  } else return value;
};

export const getAgeFromBirthday = (timestamp) =>
  parseInt((new Date().getTime() - timestamp) / (1000 * 60 * 60 * 24 * 365));

export const getProfileImage = async (userId) =>
  await storage.ref(`/profilePictures/${userId}.jpg`).getDownloadURL();

export const getImageFromStorageByRef = async (ref) =>
  await storage.ref(ref).getDownloadURL();

export const getSubCollection = async (
  mainCollection,
  mainDocId,
  subCollection
) =>
  await firestore
    .collection(mainCollection)
    .doc(mainDocId)
    .collection(subCollection)
    .get();
var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);
export const formattedPhoneNumber = (phoneNumber) => phoneNumber.replace(phoneRegex, "($1) $2-$3");
export const formattedDateWithEmailSign = (date) => moment(new Date(date.seconds * 1000)).format("MM/DD/YY @ hh:mm a")
export const formattedDate = (date) => {
  if (date?.seconds) {
    return (moment(new Date(date.seconds * 1000)).format("DD/MM/YYYY"))
  } else {
    return (moment(date?.toDate().toDateString()).format(
      "DD/MM/YYYY"
    ))
  }
}
export const ageFromDOB = (date) => {
  const currentDate = new Date();
  return currentDate.getFullYear() - moment(date?.toDate().toDateString()).format('YYYY')


}



