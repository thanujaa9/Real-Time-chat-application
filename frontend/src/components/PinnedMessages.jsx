export default function PinnedMessages({ messages }) {
  if (messages.length === 0) return null;
  return (
    <div style={{
      backgroundColor: '#eef2ff',
      borderBottom: '1px solid #e0e7ff',
      borderLeft: '4px solid #6366f1',
      padding: '8px 20px',
    }}>
      <div style={{ fontSize: '11px', fontWeight: '600', color: '#6366f1', marginBottom: '3px' }}>
        📌 PINNED
      </div>
      {messages.map(m => (
        <div key={m._id} style={{ fontSize: '13px', color: '#475569', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <span style={{ fontWeight: '600', color: '#6366f1' }}>{m.username}: </span>
          {m.content}
        </div>
      ))}
    </div>
  );
}