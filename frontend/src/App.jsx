import { useState } from 'react';
import ChatBox from './components/ChatBox';

export default function App() {
  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);

  if (!joined) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <h2 style={{ marginBottom: '16px' }}>Welcome to Chat 💬</h2>
        <input
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', width: '240px', marginBottom: '10px' }}
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && username.trim() && setJoined(true)}
        />
        <button
          style={{ padding: '10px 24px', borderRadius: '6px', border: 'none', backgroundColor: '#4f46e5', color: 'white', fontSize: '14px', cursor: 'pointer' }}
          onClick={() => username.trim() && setJoined(true)}
        >
          Join Chat
        </button>
      </div>
    );
  }

  return <ChatBox username={username} />;
}