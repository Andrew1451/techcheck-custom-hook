import { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuote = () => {
    setQuote(null)
    setLoading('loading...')
    setTimeout(() => {
      fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(res => {
        setLoading(false)
        setQuote(res.content)
      })
      .catch(err => {
        setLoading(false)
        setError('An error occured. Awkward..')
      })
    }, 1000)
  }
  
  return (
    <div className="App">
      <button onClick={fetchQuote}>Fetch Quote</button>
      { loading && <p>{loading}</p> }
      { quote && <p>"{quote}"</p> }
      { error && <p>{error}</p> }
    </div>
  );
}

export default App;
