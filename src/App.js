import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameArea from './components/GameArea/GameArea';
import NoticeArea from './components/NoticeArea/NoticeArea';

function App() {
  return (
    <div className="App">
      <Header />
      <GameArea />
      <NoticeArea />
      <Footer />
    </div>
  );
}

export default App;
