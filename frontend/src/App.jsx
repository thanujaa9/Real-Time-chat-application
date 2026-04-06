import { useState } from 'react';
import ChatBox from './components/ChatBox';

export default function App() {
  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);

  if (!joined) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1e1e24',
        fontFamily: "'Segoe UI', sans-serif"
      }}>
        <div style={{
          backgroundColor: '#2b2c35',
          borderRadius: '20px',
          width: '320px',
          padding: '36px 28px',
          textAlign: 'center',
          border: '1px solid #3a3b45'
        }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '14px',
            backgroundColor: '#3d3d6b',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px', margin: '0 auto 16px'
          }}>
            💬
          </div>

          <div style={{ fontWeight: '700', fontSize: '20px', color: '#f1f5f9', marginBottom: '6px' }}>
            Welcome to Chat
          </div>
          <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>
            Pick a username to jump in
          </div>

          <input
            style={{
              width: '100%',
              padding: '11px 16px',
              borderRadius: '10px',
              border: '1.5px solid #3a3b45',
              backgroundColor: '#1e1e24',
              fontSize: '14px',
              outline: 'none',
              color: '#f1f5f9',
              boxSizing: 'border-box',
              marginBottom: '10px'
            }}
            placeholder="Your username..."
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && username.trim() && setJoined(true)}
          />

          <button
            onClick={() => username.trim() && setJoined(true)}
            style={{
              width: '100%',
              padding: '11px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#6366f1',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '16px'
            }}
          >
            Join Chat →
          </button>

          
            <a href="https://github.com/thanujaa9/Real-Time-chat-application"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#98b3da',
              fontSize: '12px',
              textDecoration: 'none',
            }}
          >
            🔗 View Github Repo
          </a>
        </div>
      </div>
    );
  }

  return <ChatBox username={username} />;
}