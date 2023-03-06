import { db, methods } from './firebase.config';

export const getNameWithoutLetter = async ({gender}) => {
    try {
        const querySnapshot = await methods.getDocs(methods.collection(db, gender));
        return {ok: true, msg: 'ok', data: querySnapshot.docs};
    } catch (error) {
        return {ok: false, msg: 'Algo falló :(', data: null};
    }
    
}


