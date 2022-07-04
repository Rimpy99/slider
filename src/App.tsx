import { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [x, setX] = useState<number>(0);

  const goLeft = () => {
    setX(x + 100)
  }

  const goRight = () => {
    setX(x - 100)
  }

  // useEffect(()=>{
  //   if(x===-300){
  //     setTimeout(()=>{
  //       setX(0);
  //     },5000)
  //   }
  // },[x])

  return (
    <div className="App">
      <div className="slider">
        <div className="slide slide1" style={{transform:`translateX(${x}%)`}}>
          <div  className="slide-content">
            <h1>RED</h1>
          </div>
        </div>
        <div className="slide slide2" style={{transform:`translateX(${x}%)`}}>
          <div  className="slide-content">
            <h1>GREEN</h1>
          </div>
        </div>
        <div className="slide slide3" style={{transform:`translateX(${x}%)`}}>
          <div  className="slide-content">
            <h1>YELLOW</h1>
          </div>
        </div>
        <div className="slide slide4" style={{transform:`translateX(${x}%)`}}>
          <div  className="slide-content">
            <h1>BLUE</h1>
          </div>
        </div>
      </div>
      {x===0 ? null :  <button className="btn-left" onClick={goLeft}>Left</button>}
      {x===-300 ? null : <button className="btn-right" onClick={goRight}>Right</button>}
    </div>
  );
}

export default App;
