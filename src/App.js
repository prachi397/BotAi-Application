import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import TopBar from "./components/topBar/TopBar";
import PastConversation from "./components/pastConversations/PastConversations";
import Layout from "./components/layout/Layout";
import { useState } from "react";
import { SnackbarProvider } from "notistack";
import './App.css';

// Wrapper component to use `useNavigate`
const AppWithNavigation = () => {
  const [chatList, setChatList] = useState([]);
  const [updatedChatList, setUpdatedChatList] = useState([]);
  const [addNewChatClicked, setAddNewChatClicked] = useState(false);
  const [askBtnClicked, setAskBtnClick] = useState(false);

  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(false);

  //fucntion to switch theme
  function handleSwitchTheme() {
    setIsDark(!isDark);
  }

  // Function to start a new chat
  const handleAddNewChat = () => {
    setAddNewChatClicked(true);
    setAskBtnClick(false);
    setChatList([]);
    setUpdatedChatList([]);
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className={isDark? "darkApp": ""} >
      <TopBar handleSwitchTheme={handleSwitchTheme} isDark={isDark} />
      <Routes>
        <Route element={<Layout handleAddNewChat={handleAddNewChat} isDark={isDark} />}>
          <Route
            path="/"
            element={
              <HomePage
                chatList={chatList}
                updatedChatList={updatedChatList}
                addNewChatClicked={addNewChatClicked}
                askBtnClicked={askBtnClicked}
                setUpdatedChatList={setUpdatedChatList}
                setChatList={setChatList}
                setAskBtnClick={setAskBtnClick}
              />
            }
          />
          <Route path="/past-conversations" element={<PastConversation isDark={isDark} />} />
        </Route>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <AppWithNavigation />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
