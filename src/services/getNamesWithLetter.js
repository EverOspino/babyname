import { db, methods } from './firebase.config';

export const getNameWithLetter = async ({gender, letter}) => {
    const q = methods.query(methods.collection(db, gender), methods.where("letter", "==", letter.toUpperCase()));

    const querySnapshot = await methods.getDocs(q);
    return querySnapshot.docs;
    
}