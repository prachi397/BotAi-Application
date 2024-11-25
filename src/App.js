import { Box } from '@mui/material';
import HomePage from './components/homePage/HomePage';
import TopBar from './components/topBar/TopBar';
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Box sx={{display:"flex"}}>
        <SideBar/>
        <HomePage/>
      </Box>
    </div>
  );
}

export default App;
