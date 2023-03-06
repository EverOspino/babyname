import { db, methods } from './firebase.config';

export const getNameWithLetter = async ({gender, letter}) => {
    const q = methods.query(methods.collection(db, gender), methods.where("letter", "==", letter.toUpperCase()));

    try {
        const querySnapshot = await methods.getDocs(q);
        return {ok: true, msg: 'ok', data: querySnapshot.docs};
    } catch (error) {
        return {ok: false, msg: 'Algo falló :(', data: null};
    }
    
    
}