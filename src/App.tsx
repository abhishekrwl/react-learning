import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';

type User = {
  name: string;
  username: string;
  password: string;
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <div className='App'>
        {!user ? <Login setUser={setUser} /> : <TodoList />}
      </div>
    </>
  );
}

export default App;
