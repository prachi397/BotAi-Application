import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import TopBar from "./components/topBar/TopBar";
import PastConversation from "./components/pastConversations/PastConversations";
import { useState } from "react";
import Layout from "./components/layout/Layout";

function App() {
  const [chatList, setChatList] = useState([]);
  const [updatedChatList, setUpdatedChatList] = useState([]);
  const [addNewChatClicked, setAddNewChatClicked] = useState(false);
  const [askBtnClicked, setAskBtnClick] = useState(false);

  // Function to start a new chat
  function handleAddNewChat() {
    setAddNewChatClicked(true);
    setAskBtnClick(false);
    setChatList([]);
    setUpdatedChatList([]);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Routes>
          <Route element={<Layout handleAddNewChat={handleAddNewChat} />}>
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
            <Route path="/past-conversations" element={<PastConversation />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
