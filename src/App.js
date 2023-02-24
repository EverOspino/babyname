import React, { useState} from 'react';

import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import BabyIcon from './components/BabyIcon';
import RadioBtnBox from './components/RadioBtnBox';

import { saveName } from './services/saveName';

import {boyNameData} from './data/boyNameData';

import './App.css';

function App() {
  const [radioBtn, setRadioBtn] = useState();
  const [inputLetter, setInputLetter] = useState();
  const [msgError, setMsgError] = useState('');

  const searchName = () => {
    if (radioBtn) {
      //flipFront();
      if (inputLetter) {
        boyNameData.forEach(data => {
          saveName({
            gender: radioBtn, 
            letter: data.letter, 
            name: data.name, 
            meaning: data.meaning, 
            variants: data.variants
          })
        });
        
      }
      else {
        showError('escribe una letra');
      }
    }
    else{
      showError('Escoje un género');
    }
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

  const flipBack = () => {
    const front = document.getElementById('front');
    const back = document.getElementById('back');

    front.classList.remove('flipCardFront');    
    back.classList.remove('flipCardBack');
  }

  const isLetter = (character) => {
    setInputLetter(character);
    if (!/^[a-zA-Z]*$/g.test(character)) {
      setMsgError('Digite una letra');
    }
    else {
      setMsgError('');
    }
  }


  return (
    <div className="App">
      <div className='glass'>
        <section>
          <BabyIcon />

          <h1>GENERADOR DE NOMBRES </h1>
          <p className='subtitle'>Encuentra el nombre indicado para tu bebé!</p>
        </section>
        <section className='card'>
          <Card id='front' classes='cardFace cardFront'>
            <RadioBtnBox onChange={(e) => setRadioBtn(e.target.value)} />
            <Input onChange={(e) => isLetter(e.target.value)} />
            <p className='msgError'>{msgError}</p>
            <Button onClick={searchName} >BUSCAR</Button>
          </Card>
          
          <Card id='back' classes='cardFace cardBack'>
            <p style={{color:"black"}}>Es de origen inglés, y el significado de Bradley es "pradera amplia". Transferido el uso del apellido y nombre del lugar. Se usa desde mediados del siglo XIX, más en América que en otros países de habla inglesa. El más famoso de América con este apellido fue el general Omar N. Bradley (siglo XX). Variantes: Brad, Bradd, Bradlea, Bradlee, Bradleigh, Bradlie, Bradly, Bradney y Lee.</p>
            <Button onClick={flipBack} >ATRAS</Button>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default App;
