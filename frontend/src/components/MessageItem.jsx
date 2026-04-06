import { useState } from 'react';

export default function MessageItem({ message, currentUser, onDelete, onPin }) {
  const [showOptions, setShowOptions] = useState(false);
  const isOwner = message.username === currentUser;
  const time = new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
      style={{
        display: 'flex',
        justifyContent: isOwner ? 'flex-end' : 'flex-start',
        marginBottom: '8px',
        position: 'relative',
        paddingLeft: isOwner ? '60px' : '0',
        paddingRight: isOwner ? '0' : '60px',
        paddingTop: '28px',
      }}
    >
      <div style={{ position: 'relative' }}>
        {showOptions && (
          <div style={{
            position: 'absolute',
            bottom: '100%',
            [isOwner ? 'right' : 'left']: '0',
            marginBottom: '4px',
            display: 'flex',
            gap: '4px',
            backgroundColor: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '5px 8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
            zIndex: 10,
            whiteSpace: 'nowrap',
          }}>
            <button onClick={() => onPin(message._id)} style={btn('#6366f1')}>
              {message.pinned ? '📌 Unpin' : '📌 Pin'}
            </button>
            <button onClick={() => onDelete(message._id, 'me')} style={btn('#64748b')}>
              🗑 Del Me
            </button>
            {isOwner && (
              <button onClick={() => onDelete(message._id, 'everyone')} style={btn('#ef4444')}>
                ✕ Del All
              </button>
            )}
          </div>
        )}

        <div style={{
          padding: '9px 14px',
          borderRadius: isOwner ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
          backgroundColor: isOwner ? '#6366f1' : '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          maxWidth: '380px',
        }}>
          {!isOwner && (
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#6366f1', marginBottom: '3px' }}>
              {message.username}
            </div>
          )}
          <div style={{ fontSize: '14px', color: isOwner ? '#fff' : '#1e293b', wordBreak: 'break-word' }}>
            {message.content}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', marginTop: '3px' }}>
            {message.pinned && <span style={{ fontSize: '10px', color: isOwner ? '#c7d2fe' : '#94a3b8' }}>📌</span>}
            <span style={{ fontSize: '11px', color: isOwner ? '#c7d2fe' : '#94a3b8' }}>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const btn = (color) => ({
  fontSize: '11px', padding: '4px 9px', borderRadius: '6px',
  border: 'none', backgroundColor: color, color: '#fff',
  cursor: 'pointer', fontWeight: '500'
});