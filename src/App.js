import './App.css';
import NavBar from './components/NavBar';
import './style/landingPage.css'
import Intro from './components/Intro';
import Trending from './components/Trending';
import BestPhone from './components/BestPhone';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBg'>
        <NavBar />
        <Intro />
      </div>
      {/* end of info */}
      <div className='trending'>
        <Trending />
        <br />
      </div>
      <div className='bestphone'>
        <BestPhone />
        <br />
      </div>
    </div>
  );
}

export default App;
