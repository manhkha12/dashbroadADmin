import './ChatListItem.css';

const ChatListItem = ({ chat, isSelected, onClick }) => {
  const getStatusColor = (status) => {
    const colors = {
      open: 'bg-blue-100 text-blue-700',
      agent: 'bg-green-100 text-green-700',
      paused: 'bg-gray-100 text-gray-700',
      awaiting: 'bg-yellow-100 text-yellow-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div
      onClick={onClick}
      className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
        isSelected ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
          {chat.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-sm text-gray-900 truncate">{chat.name}</h3>
            <span className="text-xs text-gray-500">{chat.time}</span>
          </div>
          <p className="text-xs text-gray-600 truncate mb-1">{chat.lastMessage}</p>
          <div className="flex items-center justify-between">
            <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(chat.status)}`}>
              {chat.status}
            </span>
            {chat.unread > 0 && (
              <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {chat.unread}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;