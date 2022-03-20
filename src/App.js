
import './App.css';
import Device from './components/Device/Device';
import UsingIf from './components/Usingif/UsingIf';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <UsingIf></UsingIf>
      <Device name='Iphone' price='16000'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
