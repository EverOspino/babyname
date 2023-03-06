import { useState, useEffect } from 'react';

import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import BabyIcon from './components/BabyIcon';
import RadioBtnBox from './components/RadioBtnBox';

import { getNameWithLetter } from './services/getNamesWithLetter';
import { getNameWithoutLetter } from './services/getNamesWithoutLetter';

import { getRandomName } from './utils/getRandomName';
import { isLetter } from './utils/isLetter';

import './App.css';

function App () {
  const [radioBtn, setRadioBtn] = useState();
  const [inputLetter, setInputLetter] = useState();
  const [msgError, setMsgError] = useState('');
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const findName = async (functionGet, inputs) => {
    const res = await functionGet( inputs );
    if (res.ok) {
      const newName = getRandomName(res.data);
      setName(newName.data());
    }
    else showError(res.msg);
  }

  const searchName = () => {
    if (radioBtn) {
      if (inputLetter) {
        if (isLetter(inputLetter)) {
          setIsLoading(true);
          findName(getNameWithLetter, {gender:radioBtn, letter:inputLetter});
        }
        else showError('escribe una letra');  
      }
      else {
        setIsLoading(true);
        findName(getNameWithoutLetter, {gender:radioBtn});
      }
    }
    else showError('Escoge un género');
  }

  const showError = (msg) => {
    setMsgError(msg);
    setTimeout(()=>{
      setMsgError('');
    },4000);
  }

  const flipFront = () => {
    const front = document.getElementById('front');
    const back = document.getElementById('back');

    front.classList.add('flipCardFront');    
    back.classList.add('flipCardBack'); 
  }

  const back = () => {
    setIsLoading(false);
    flipBack();
  }

  const flipBack = () => {
    const front = document.getElementById('front');
    const back = document.getElementById('back');

    front.classList.remove('flipCardFront');    
    back.classList.remove('flipCardBack');
  }

  const handleRadioBtn = (value) => {
    setRadioBtn(value);
  }

  const handleInput = (value) => {
    setInputLetter(value);
  }

  useEffect(() => {
    if (name) flipFront();
  }, [name]);


  return (
    <div className="App">
      <div className='glass'>
        <section>
          <BabyIcon isLoading={isLoading} />

          <h1>GENERADOR DE NOMBRES </h1>
          <p className='subtitle'>Encuentra el nombre indicado para tu bebé!</p>
        </section>
        <section className='card'>
          <Card id='front' classes='cardFace cardFront'>
            <RadioBtnBox onChange={(event) => handleRadioBtn(event.target.value)} />
            <Input onChange={(event) => handleInput(event.target.value)} />
            <p className='msgError'>{msgError}</p>
            <Button onClick={searchName} >BUSCAR</Button>
          </Card>
          
          <Card id='back' classes='cardFace cardBack'>
            { name && 
              <>
                <p className='name'>{name.name}</p>
                <div className='meaningDiv'>
                  <p className='meaning'>{name.meaning}</p>
                </div>
                { name.variants && <p className='variants'>{name.variants}</p>}
              </>
            }
            <Button onClick={back} >VOLVER</Button>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default App;
