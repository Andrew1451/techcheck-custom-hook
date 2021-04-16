import useFetch from './useFetch';
import './App.css';

function App() {
  const { data: quote, loading, error } = useFetch('https://api.quotable.io/random')
    
  return (
    <div className="App">
      { loading && <p>{loading}</p> }
      { quote && <p>"{quote}"</p> }
      { error && <p>{error}</p> }
    </div>
  );
}

export default App;
