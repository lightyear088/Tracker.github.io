import React, {useState, ChangeEvent} from 'react';
import './App.css';
import { start } from 'repl';
import { Console } from 'console';


export default function App() {

  // переменные и состояния
  const [inputTextName, setInputTextName] = useState("");
  const [inputTextDiscription, setInputTextDiscription] = useState("");
  const [Start, setStart] = useState({
    mode: true,
    text: "start"
  });
  


  // обработчики

  const handleClick = () => {
    if (Start.text == "start") {
      setStart({text: "stop", mode: false});
    }
    else
    {
      setStart({text: "start", mode: true});
    }
  };
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTextName(e.target.value);
  };
  const handleChangeDiscription = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTextDiscription(e.target.value);
  }

  function Register() {
    return (
    <div>
     <h2>Введите название задачи</h2>
     <input onChange={handleChangeName}></input>
     <h3>{inputTextName}</h3>
     <h2>Введите описание задачи</h2>
     <input onChange={handleChangeDiscription}></input>
     <h3>{inputTextDiscription}</h3>
    </div>
    )

  }

  return (
    <div>
      {Start.mode && <Register />}
      <div>
      <button onClick={handleClick} className='StartTimer'>{Start.text}</button>
      </div>
    </div>
  );
}



