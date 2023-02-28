import { db, methods } from './firebase.config';

export const getNameWithoutLetter = async ({gender}) => {
    const querySnapshot = await methods.getDocs(methods.collection(db, gender));
    return querySnapshot.docs;
}


