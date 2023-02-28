// import './App.css';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
      <ParticlesBg type="circle" bg={true} />
    </div>
  );
}

export default App;
