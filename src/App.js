import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("")
  //http://api.quotable.io/random
  //https://www.reddit.com/r/Angular2.json
  useEffect(()=>{
    fetch("https://www.reddit.com/r/Angular2.json")
    .then(res=>res.json())
    .then(
      ((object)=>{
        let num=Math.floor(Math.random()*26 -1);
        setQuote(object.data.children[num].data.selftext);
        setAuthor(object.data.children[num].data.author);
      })
    )
  },[]);

  const fetchNewQuote=()=>{
    fetch("https://www.reddit.com/r/Angular2.json")
    .then(res=>res.json())
    .then(
      ((object)=>{
        let num=Math.floor(Math.random()*26 -1);
        setQuote(object.data.children[num].data.selftext);
        setAuthor(object.data.children[num].data.author);
      })
    )
  }
  return (
    <div className="App">
      <div className='quote'>
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <button className='btn' onClick={fetchNewQuote}>Generate</button>
    </div>
  );
}

export default App;
