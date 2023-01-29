import image from './lion.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
      <div className='card-body'>
              <img className="image" src={image}/>
              <h2 className="heading">LION</h2>
              <div className="content">Lions differ from the other members of the large cat genus, Panthera—tigers, leopards,and jaguars.
              African lions have been admired throughout history for as symbols of courage and strength.</div >
              <div className="footer">SHARE ME</div>
              <div className="foot">LEARN MORE</div>
              </div>
          </center>
          </div>
  );
}

export default App;
