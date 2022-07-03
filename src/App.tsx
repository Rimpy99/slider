import './App.css';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
// import ArrowLeft from './components/ArrowLeft';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="slider">
        <p>Lorem, ipsum</p>
        <p>Lorem ipsum dolor sit</p>
        <ArrowLeft/>
        <ArrowRight/>
      </div>
      <div className="slider">
        <p>Lorem ipsum dolor sit</p>
        <p>Lorem, ipsum</p>
        <ArrowLeft/>
        <ArrowRight/>
      </div>
      <div className="slider">
        <p>Lorem ipsum dolor sit, amet</p>
        <p>Lorem</p>
        <ArrowLeft/>
        <ArrowRight/>
      </div>
      <div className="slider">
        <p>Lorem, ipsum</p>
        <p>Lorem, ipsum dolor</p>
        <ArrowLeft/>
        <ArrowRight/>
      </div>
    </div>
  );
}

export default App;
