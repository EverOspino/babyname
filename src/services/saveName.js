import {db, methods} from './firebase.config';

export const saveName = async ({gender, letter, name, meaning, variants}) => {
    try {
        await methods.addDoc(methods.collection(db, gender), {
            letter: letter,
            name: name,
            meaning: meaning,
            variants: variants
        });
        console.log('OK');
    } catch (error) {
        console.log(error);
    }
    
}