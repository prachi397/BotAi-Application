import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import TopBar from './components/topBar/TopBar';
import PastConversation from './components/pastConversations/PastConversations';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopBar/>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/past-conversations' Component={PastConversation}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
