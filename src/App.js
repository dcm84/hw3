import Stars from './components/Stars.js'
import Listing from './components/Listing.js'
import {etsy} from './etsy.js'
import './App.css';

function App() {

  return (
    <>
      <Stars count={5} />
      <Stars count={7} />
      <Listing items={etsy} />
    </>
    
  );
}

export default App;
