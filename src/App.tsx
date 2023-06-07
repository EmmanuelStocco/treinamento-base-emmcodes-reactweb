import React, { useEffect, useState } from 'react'; 
import './App.css';
import { list_users } from './services/post';

function App() {
  const [dataUser, setDataUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function runServiceAnswer() {
    const { data } = await list_users();
    console.log('data', data)
    setDataUser(data);
    setLoading(false);
  }

  useEffect(() => {
    runServiceAnswer();
  }, []);

  return (
    <div className="App">
      <header className="App-header"> 
        {loading ? (
          <p>Loading...</p>
        ) : (
          dataUser && (
            <ul>
              {dataUser.map((user: any) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )
        )}
        
      </header>
    </div>
  );
}

export default App;
