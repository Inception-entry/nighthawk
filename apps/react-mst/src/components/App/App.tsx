import MessageDraft from "../MessageDraft/MessageDraft";
import UserList from '../UserList/UserList';
import MessageList from '../MessageList/MessageList';
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList/>
      </header>
      <div className='App-content'>
        <div className="App-content-flex">
          <MessageDraft/>
          <MessageList/>
        </div>
      </div>
    </div>
  );
}

export default App;
