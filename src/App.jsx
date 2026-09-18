import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Lang from './components/Lang'
import Letter from './components/Letter'
import Board from './components/Board'
export default function App() {

  const langList = [{"value": "HTML", "color": "#E2680F"}, {"value": "CSS", "color": "#328AF1"}, {"value": "JavaScript", "color": "#F4EB13"}, {"value": "React", "color": "#2ED3E9"}, {"value": "TypeScript", "color": "#298EC6"}, {"value": "Node.js", "color": "#599137"}, {"value": "Python", "color": "#FFD742"}, {"value": "Ruby", "color": "#D02B2B"}, {"value": "Assembly", "color": "#2D519F"}]
  const langObj = langList.map((lang,i) => ({
                                              value: lang.value,
                                              color: lang.color,
                                              elemenated: false,
                                              id: i      
                                                  }))
  const [lang,setlang]= useState(langObj)
  const langElements = lang.map((lang) => (<Lang key={lang.id} value={lang.value} color={lang.color} elemenated={lang.elemenated} />))
  const [word,setWord] = useState({"value":[], "guessed": false})
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=1&diff=1")
      .then(response => response.json())
      .then(data => {
        setWord({"value":data[0].split(""), "guessed": false})
      }).catch(error => console.error("Failed to fetch word:", error))
  }, [])
  const wordArray = word.value.map((letter,i) => <Letter key={i} value={letter} guessed={word.guessed} />)
  const alphabet = [{"value": "A", "pressed": false}, {"value": "B", "pressed": false}, {"value": "C", "pressed": false}, {"value": "D", "pressed": false}, {"value": "E", "pressed": false}, {"value": "F", "pressed": false}, {"value": "G", "pressed": false}, {"value": "H", "pressed": false}, {"value": "I", "pressed": false}, {"value": "J", "pressed": false}, {"value": "K", "pressed": false}, {"value": "L", "pressed": false}, {"value": "M", "pressed": false}, {"value": "N", "pressed": false}, {"value": "O", "pressed": false}, {"value": "P", "pressed": false}, {"value": "Q", "pressed": false}, {"value": "R", "pressed": false}, {"value": "S", "pressed": false}, {"value": "T", "pressed": false}, {"value": "U", "pressed": false}, {"value": "V", "pressed": false}, {"value": "W", "pressed": false}, {"value": "X", "pressed": false}, {"value": "Y", "pressed": false}, {"value":"Z","pressed" :false}]
  const [board,setBoard] = useState(alphabet)
  const boardElements = board.map((letter,i) => <Board key={i} value={letter.value} pressed={letter.pressed} />)
  return ( 
    <>
      <Header />
      <section className="lang-container">
        {langElements}
      </section>
      <section className="word-container">
        {wordArray}
      </section>
      <section className="board-container">
        {boardElements}
      </section>

      
    </>
    

  )


}


