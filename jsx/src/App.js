import logo from './logo.svg';
import './App.css';
import imagesrc from "./photo2.jpg"
import './style.css'
function App() {
  return (
    <div className="App">
      
      
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">tom and jerry </h1>
    <br />
    <img src={imagesrc}  width ={280} height ={180} />
    <br />

    <img src="/photo1pub.png" />
  </div>
  <video width={940} height={668} controls>
    <source src="myvideo.mp4" type="video/mp4" />
  </video>
      </div>
  );
}

export default App;
