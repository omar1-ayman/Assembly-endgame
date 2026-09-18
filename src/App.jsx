import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Lang from './components/Lang'
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
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=1&diff=1")
      .then(response => response.json())
      .then(data => {
        console.log(data[0])
      })
  }, [])
  return ( 
    <>
      <Header />
      <main>
        <div className="lang-container">
          {langElements}
        </div>

      </main>
    </>
    

  )


}


