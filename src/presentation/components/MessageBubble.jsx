import { Check, CheckCheck } from "lucide-react";
import './MessageBubble.css';
const MessageBubble = ({ message }) => {
  if (message.sender === 'system') {
    return (
      <div className="flex justify-center my-4">
        <div className="bg-gray-100 text-gray-600 text-xs px-4 py-2 rounded-full">
          {message.text}
        </div>
        <span className="text-xs text-gray-400 ml-2 self-center">{message.time}</span>
      </div>
    );
  }

  const isAdmin = message.sender === 'admin';

  return (
    <div className={`flex ${isAdmin ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-md ${isAdmin ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isAdmin
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-900 border border-gray-200'
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
        <div className={`flex items-center gap-1 mt-1 px-2 ${isAdmin ? 'justify-end' : 'justify-start'}`}>
          <span className="text-xs text-gray-500">{message.time}</span>
          {isAdmin && (
            <span>
              {message.status === 'read' ? (
                <CheckCheck className="w-3 h-3 text-blue-500" />
              ) : (
                <Check className="w-3 h-3 text-gray-400" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;