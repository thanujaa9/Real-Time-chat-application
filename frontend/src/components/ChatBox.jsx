import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import MessageItem from './MessageItem';
import PinnedMessages from './PinnedMessages';

const API = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const socket = io(API);

export default function ChatBox({ username }) {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const bottomRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API}/api/messages?username=${username}`);
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchMessages();
    socket.on('message_update', fetchMessages);
    return () => socket.off('message_update', fetchMessages);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!content.trim()) return;
    try {
      await fetch(`${API}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, content })
      });
      setContent('');
    } catch (err) {
      console.error('Send error:', err);
    }
  };

  const handleDelete = async (id, type) => {
    await fetch(`${API}/api/messages/${id}?type=${type}&username=${username}`, { method: 'DELETE' });
  };

  const handlePin = async (id) => {
    await fetch(`${API}/api/messages/${id}/pin`, { method: 'PATCH' });
  };

  const pinned = messages.filter(m => m.pinned);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f8fafc', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Header - matches login card color */}
      <div style={{
        backgroundColor: '#2b2c35',
        padding: '12px 20px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          backgroundColor: '#6366f1', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontWeight: '700', fontSize: '16px', color: '#fff'
        }}>
          {username[0].toUpperCase()}
        </div>
        <div>
          <div style={{ fontWeight: '600', fontSize: '15px', color: '#f1f5f9' }}>{username}</div>
          <div style={{ fontSize: '12px', color: '#818cf8' }}>● online</div>
        </div>
      </div>

      <PinnedMessages messages={pinned} />

      {/* Messages - light bg */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column' }}>
        {messages.length === 0 && (
          <div style={{ textAlign: 'center', color: '#94a3b8', marginTop: '60px', fontSize: '14px' }}>
            No messages yet. Say hello! 👋
          </div>
        )}
        {messages.map(msg => (
          <MessageItem
            key={msg._id}
            message={msg}
            currentUser={username}
            onDelete={handleDelete}
            onPin={handlePin}
          />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        backgroundColor: '#fff', padding: '12px 16px',
        display: 'flex', gap: '10px', alignItems: 'center',
        borderTop: '1px solid #e2e8f0'
      }}>
        <input
          style={{
            flex: 1, padding: '11px 16px', borderRadius: '24px',
            border: '1.5px solid #e2e8f0', backgroundColor: '#f8fafc',
            fontSize: '14px', outline: 'none', color: '#1e293b',
          }}
          value={content}
          onChange={e => setContent(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: 'none', backgroundColor: '#6366f1',
            color: '#fff', cursor: 'pointer', fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}