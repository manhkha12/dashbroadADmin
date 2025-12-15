// import React, { useState, useEffect } from "react";
// import mockChats from "../../data/mockChats";
// import mockMessages from "../../data/mockMessages";
// import mockActivities from "../../data/mockActivities";
// import SidebarFilter from "../components/SidebarFilter.jsx";
// import mockAgents  from "../../data/mockAgents.js";
// import ActivityList from "../components/ActivityList.jsx";
// import ChatListItem from "../components/ChatListItem.jsx";
// import ContactInfoCard from "../components/ContactInfoCard.jsx";
// import MessageBubble from "../components/MessageBubble.jsx";
// import UserMenu from '../components/UserMenu';
// import LoginModal from '../components/LoginModal';
// import './AdminChatPage.css';

// import { Send, Search, Paperclip, MoreVertical, User, Clock, Check, CheckCheck, Phone, Mail, MapPin, Calendar, Tag } from 'lucide-react';



// const AdminChatPage = () => {
//   const [selectedChat, setSelectedChat] = useState(mockChats[0]);
//   const [message, setMessage] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [channelFilter, setChannelFilter] = useState('all');

//   const messages = selectedChat ? mockMessages[selectedChat.id] || [] : [];

//   const filteredChats = mockChats.filter(chat => {
//     const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          chat.studentId.includes(searchQuery);
//     const matchesStatus = statusFilter === 'all' || chat.status === statusFilter;
//     const matchesChannel = channelFilter === 'all' || chat.channel.toLowerCase() === channelFilter;
//     return matchesSearch && matchesStatus && matchesChannel;
//   });

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       console.log('Sending:', message);
//       setMessage('');
//     }
//   };
//     const handleLogin = (userData) => {
//     setCurrentUser(userData);
//     // Lưu vào localStorage nếu cần
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const handleLogout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem('user');
//     // Redirect hoặc reset state
//   };
//   const handleViewProfile = () => {
//     console.log('View profile clicked');
//     // Navigate to profile page
//   };
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//    React.useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setCurrentUser(JSON.parse(savedUser));
//     }
//   }, []);

//   const statusItems = [
//     { label: 'All', value: 'all', count: 156 },
//     { label: 'Assigned to me', value: 'assigned', count: 6 },
//     { label: 'Unassigned', value: 'unassigned', count: 6 }
//   ];

//   const statusTypeItems = [
//     { label: 'All', value: 'all', count: 156 },
//     { label: 'Open', value: 'open', count: 123 },
//     { label: 'Agent', value: 'agent', count: 34 },
//     { label: 'Awaiting agent', value: 'awaiting', count: 34 },
//     { label: 'Paused', value: 'paused', count: 89 }
//   ];

//   // const channelItems = [
//   //   { label: 'All', value: 'all', count: 156 },
//   //   { label: 'SMS', value: 'sms', count: 123 },
//   //   { label: 'WhatsApp', value: 'whatsapp', count: 34 },
//   //   { label: 'Instagram', value: 'instagram', count: 89 },
//   //   { label: 'Web', value: 'web', count: 89 }
//   // ];

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Left Sidebar - Filters & Chat List */}
//       <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
//         {/* Header */}
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-lg font-bold text-gray-800">{currentUser ? currentUser.name : 'Guest'}</h1>
//             <UserMenu
//               currentUser={currentUser}
//               onLogin={() => setShowLoginModal(true)}
//               onLogout={handleLogout}
//               onViewProfile={handleViewProfile}
//             />
//           </div>
          
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search chat"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//             />
//           </div>

//           <div className="flex gap-2 mt-3">
//             <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md hover:bg-gray-50">
//               Open
//             </button>
//             <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md hover:bg-gray-50">
//               Newest
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex-1 overflow-y-auto p-3">
//           <SidebarFilter
//             title="INBOX"
//             items={statusItems}
//             selected={statusFilter}
//             onSelect={setStatusFilter}
//           />
//           <SidebarFilter
//             title="STATUS"
//             items={statusTypeItems}
//             selected={statusFilter}
//             onSelect={setStatusFilter}
//           />
//           {/* <SidebarFilter
//             title="CHANNEL"
//             items={channelItems}
//             selected={channelFilter}
//             onSelect={setChannelFilter}
//           /> */}

//           <div className="mt-4">
//             <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">AGENTS</h3>
//             <div className="space-y-1">
//               {mockAgents.map((agent) => (
//                 <div key={agent.id} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
//                   <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
//                     {agent.avatar}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm text-gray-900">{agent.name}</p>
//                     <p className="text-xs text-gray-500">{agent.status}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Section - Chat List */}
//       <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
//         <div className="p-4 border-b border-gray-200">
//           <h2 className="font-semibold text-gray-900">Conversations ({filteredChats.length})</h2>
//         </div>
//         <div className="flex-1 overflow-y-auto">
//           {filteredChats.map((chat) => (
//             <ChatListItem
//               key={chat.id}
//               chat={chat}
//               isSelected={selectedChat?.id === chat.id}
//               onClick={() => setSelectedChat(chat)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col">
//         {selectedChat ? (
//           <>
//             {/* Chat Header */}
//             <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
//                   {selectedChat.avatar}
//                 </div>
//                 <div>
//                   <h2 className="font-semibold text-gray-900">{selectedChat.name}</h2>
//                   <p className="text-sm text-gray-500">{selectedChat.channel}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 {/* <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
//                   Pause
//                 </button>
//                 <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">
//                   Close
//                 </button> */}
//                 <button className="p-2 hover:bg-gray-100 rounded-lg">
//                   <MoreVertical className="w-5 h-5 text-gray-600" />
//                 </button>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
//               <div className="max-w-3xl mx-auto">
//                 {messages.map((msg) => (
//                   <MessageBubble key={msg.id} message={msg} />
//                 ))}
//               </div>
//             </div>

//             {/* Input Area */}
//             <div className="bg-white border-t border-gray-200 p-4">
//               <div className="max-w-3xl mx-auto">
//                 <div className="flex items-end gap-2">
//                   <button className="p-2 hover:bg-gray-100 rounded-lg">
//                     <Paperclip className="w-5 h-5 text-gray-600" />
//                   </button>
                  
//                   <div className="flex-1">
//                     <input
//                       type="text"
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Type or use template message"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
//                     Assign to Form
//                   </button> */}
//                   <button
//                     onClick={handleSendMessage}
//                     className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2"
//                   >
//                     <Send className="w-4 h-4" />
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="flex-1 flex items-center justify-center">
//             <p className="text-gray-500">Chọn một cuộc trò chuyện để bắt đầu</p>
//           </div>
//         )}
//       </div>

//       {/* Right Sidebar - Contact Info */}
//       {selectedChat && (
//         <div className="w-80 bg-gray-50 overflow-y-auto p-4">
//           <ContactInfoCard chat={selectedChat} />
//           <ActivityList activities={mockActivities} />
//         </div>
//       )}

//        <LoginModal
//         isOpen={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         onLogin={handleLogin}
//       />

 
//     </div>
//   );
// };
// export default AdminChatPage;

// src/presentation/pages/AdminChatPage.jsx

// ==================== APP.JSX - MAIN ROUTER ====================
// src/App.jsx

// ==================== UPDATED ADMIN CHAT PAGE WITH UC14 ====================
// src/presentation/pages/AdminChatPage.jsx

// import React, { useState, useEffect } from "react";
// import mockChats from "../../data/mockChats";
// import mockMessages from "../../data/mockMessages";
// import mockActivities from "../../data/mockActivities";
// import mockAgents from "../../data/mockAgents.js";
// import mockStudents from "../../data/mockStudents.js"; // NEW

// // Components
// import SidebarFilter from "../components/SidebarFilter.jsx";
// import ActivityList from "../components/ActivityList.jsx";
// import ChatListItem from "../components/ChatListItem.jsx";
// import ContactInfoCard from "../components/ContactInfoCard.jsx";
// import MessageBubble from "../components/MessageBubble.jsx";
// import UserMenu from '../components/UserMenu';
// import StudentList from '../components/StudentList.jsx'; // NEW
// import StudentDetail from '../components/StudentDetail.jsx'; // NEW
// import NotificationList from '../components/NotificationList';
// import NotificationForm from '../components/NotificationForm';
// import mockNotifications from '../../data/mockNotifications';
// // Styles
// import './AdminChatPage.css';

// // Icons
// import { 
//   Send, 
//   Search, 
//   Paperclip, 
//   MoreVertical, 
//   User, 
//   Mail,
//   Users, // NEW
//   MessageCircle // NEW
// } from 'lucide-react';

// const AdminChatPage = ({ currentUser, onLogout }) => {
//   // ==================== STATE DECLARATIONS ====================
//   const [selectedChat, setSelectedChat] = useState(mockChats[0]);
//   const [message, setMessage] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [channelFilter, setChannelFilter] = useState('all');
  
//   // NEW: Student management states
//   const [viewMode, setViewMode] = useState('chats'); // 'chats' or 'students'
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [notifications, setNotifications] = useState(mockNotifications);
// const [selectedNotification, setSelectedNotification] = useState(null);
// const [showNotificationForm, setShowNotificationForm] = useState(false);

//   // ==================== COMPUTED VALUES ====================
//   const messages = selectedChat ? mockMessages[selectedChat.id] || [] : [];

//   const filteredChats = mockChats.filter(chat => {
//     const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          chat.studentId.includes(searchQuery);
//     const matchesStatus = statusFilter === 'all' || chat.status === statusFilter;
//     const matchesChannel = channelFilter === 'all' || chat.channel.toLowerCase() === channelFilter;
//     return matchesSearch && matchesStatus && matchesChannel;
//   });

//   // ==================== EVENT HANDLERS ====================
//   const handleSendMessage = () => {
//     if (message.trim()) {
//       console.log('Sending:', message);
//       setMessage('');
//     }
//   };

//   const handleCreateNotification = () => {
//   setSelectedNotification(null);
//   setShowNotificationForm(true);
// };

// const handleEditNotification = (notif) => {
//   setSelectedNotification(notif);
//   setShowNotificationForm(true);
// };

// const handleSaveNotification = (data) => {
//   if (data.id && notifications.find(n => n.id === data.id)) {
//     // Update existing
//     setNotifications(prev => prev.map(n => n.id === data.id ? data : n));
//   } else {
//     // Create new
//     setNotifications(prev => [data, ...prev]);
//   }
//   setShowNotificationForm(false);
//   setSelectedNotification(null);
// };
// const handleDeleteNotification = (id) => {
//   if (confirm('Bạn có chắc chắn muốn xóa thông báo này?')) {
//     setNotifications(prev => prev.filter(n => n.id !== id));
//   }
// };
//   const handleViewProfile = () => {
//     console.log('View profile clicked');
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const handleChatSelect = (chat) => {
//     setSelectedChat(chat);
//     setViewMode('chats');
//   };

//   const handleStudentSelect = (student) => {
//     setSelectedStudent(student);
//   };

//   const handleViewModeChange = (mode) => {
//     setViewMode(mode);
//     if (mode === 'students') {
//       setSelectedChat(null);
//     } else {
//       setSelectedStudent(null);
//     }
//   };

//   // ==================== FILTER ITEMS ====================
//   const statusItems = [
//     { label: 'All', value: 'all', count: mockChats.length },
//     { label: 'Assigned to me', value: 'assigned', count: 6 },
//     { label: 'Unassigned', value: 'unassigned', count: 6 }
//   ];

//   const statusTypeItems = [
//     { label: 'All', value: 'all', count: mockChats.length },
//     { label: 'Open', value: 'open', count: mockChats.filter(c => c.status === 'open').length },
//     { label: 'Agent', value: 'agent', count: mockChats.filter(c => c.status === 'agent').length },
//     { label: 'Awaiting agent', value: 'awaiting', count: mockChats.filter(c => c.status === 'awaiting').length },
//     { label: 'Paused', value: 'paused', count: mockChats.filter(c => c.status === 'paused').length }
//   ];

//   // ==================== RENDER ====================
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* ==================== LEFT SIDEBAR ==================== */}
//       <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
//         {/* Header */}
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-lg font-bold text-gray-800">
//               {currentUser ? currentUser.name : 'Guest'}
//             </h1>
//             <UserMenu
//               currentUser={currentUser}
//               onLogout={onLogout}
//               onViewProfile={handleViewProfile}
//             />
//           </div>
          
//           {/* View Mode Toggle - NEW */}
//           <div className="flex gap-2 mb-3">
//             <button
//               onClick={() => handleViewModeChange('chats')}
//               className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition ${
//                 viewMode === 'chats'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               <MessageCircle className="w-4 h-4" />
//               Tin nhắn
//             </button>
//             <button
//               onClick={() => handleViewModeChange('students')}
//               className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition ${
//                 viewMode === 'students'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               <Users className="w-4 h-4" />
//               Sinh viên
//             </button>
//           </div>

//           {/* Search Bar - Only for chats view */}
//           {viewMode === 'chats' && (
//             <>
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   placeholder="Search chat"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//                 />
//               </div>

//               {/* Filter Buttons */}
//               <div className="flex gap-2 mt-3">
//                 <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
//                   Open
//                 </button>
//                 <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
//                   Newest
//                 </button>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Filters Section - Only for chats view */}
//         {viewMode === 'chats' && (
//           <div className="flex-1 overflow-y-auto p-3">
//             <SidebarFilter
//               title="INBOX"
//               items={statusItems}
//               selected={statusFilter}
//               onSelect={setStatusFilter}
//             />
//             <SidebarFilter
//               title="STATUS"
//               items={statusTypeItems}
//               selected={statusFilter}
//               onSelect={setStatusFilter}
//             />

//             {/* Agents List */}
//             <div className="mt-4">
//               <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">
//                 AGENTS
//               </h3>
//               <div className="space-y-1">
//                 {mockAgents.map((agent) => (
//                   <div 
//                     key={agent.id} 
//                     className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition"
//                   >
//                     <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
//                       {agent.avatar}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-sm text-gray-900 truncate">{agent.name}</p>
//                       <p className="text-xs text-gray-500">{agent.status}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Student Statistics - Only for students view - NEW */}
//         {viewMode === 'students' && (
//           <div className="flex-1 overflow-y-auto p-3">
//             <div className="space-y-3">
//               <div className="bg-blue-50 p-3 rounded-lg">
//                 <div className="flex items-center justify-between mb-1">
//                   <span className="text-xs font-medium text-blue-600">Tổng sinh viên</span>
//                   <span className="text-2xl font-bold text-blue-600">{mockStudents.length}</span>
//                 </div>
//               </div>

//               <div className="bg-green-50 p-3 rounded-lg">
//                 <div className="flex items-center justify-between mb-1">
//                   <span className="text-xs font-medium text-green-600">Học tập tốt</span>
//                   <span className="text-2xl font-bold text-green-600">
//                     {mockStudents.filter(s => s.status === 'active').length}
//                   </span>
//                 </div>
//               </div>

//               <div className="bg-yellow-50 p-3 rounded-lg">
//                 <div className="flex items-center justify-between mb-1">
//                   <span className="text-xs font-medium text-yellow-600">Cần theo dõi</span>
//                   <span className="text-2xl font-bold text-yellow-600">
//                     {mockStudents.filter(s => s.status === 'warning').length}
//                   </span>
//                 </div>
//               </div>

//               <div className="bg-red-50 p-3 rounded-lg">
//                 <div className="flex items-center justify-between mb-1">
//                   <span className="text-xs font-medium text-red-600">Nguy cơ cao</span>
//                   <span className="text-2xl font-bold text-red-600">
//                     {mockStudents.filter(s => s.status === 'danger').length}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ==================== MIDDLE SECTION ==================== */}
//       <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
//         {viewMode === 'chats' ? (
//           /* CHAT LIST */
//           <>
//             <div className="p-4 border-b border-gray-200">
//               <h2 className="font-semibold text-gray-900">
//                 Conversations ({filteredChats.length})
//               </h2>
//             </div>
//             <div className="flex-1 overflow-y-auto">
//               {filteredChats.length > 0 ? (
//                 filteredChats.map((chat) => (
//                   <ChatListItem
//                     key={chat.id}
//                     chat={chat}
//                     isSelected={selectedChat?.id === chat.id}
//                     onClick={() => handleChatSelect(chat)}
//                   />
//                 ))
//               ) : (
//                 <div className="flex flex-col items-center justify-center h-full p-4 text-center">
//                   <p className="text-gray-500 text-sm">No conversations found</p>
//                   <p className="text-gray-400 text-xs mt-1">Try adjusting your filters</p>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           /* STUDENT LIST - NEW */
//           <StudentList
//             students={mockStudents}
//             onSelectStudent={handleStudentSelect}
//             selectedStudent={selectedStudent}
//           />
//         )}
//       </div>

//       {/* ==================== MAIN AREA ==================== */}
//       <div className="flex-1 flex flex-col">
//         {viewMode === 'chats' ? (
//           /* CHAT AREA */
//           selectedChat ? (
//             <>
//               {/* Chat Header */}
//               <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
//                     {selectedChat.avatar}
//                   </div>
//                   <div>
//                     <h2 className="font-semibold text-gray-900">{selectedChat.name}</h2>
//                     <p className="text-sm text-gray-500">{selectedChat.channel}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button 
//                     className="p-2 hover:bg-gray-100 rounded-lg transition"
//                     title="More options"
//                   >
//                     <MoreVertical className="w-5 h-5 text-gray-600" />
//                   </button>
//                 </div>
//               </div>

//               {/* Messages Area */}
//               <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
//                 <div className="max-w-3xl mx-auto">
//                   {messages.length > 0 ? (
//                     messages.map((msg) => (
//                       <MessageBubble key={msg.id} message={msg} />
//                     ))
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-full text-center">
//                       <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
//                         <Mail className="w-8 h-8 text-gray-400" />
//                       </div>
//                       <p className="text-gray-500">No messages yet</p>
//                       <p className="text-gray-400 text-sm mt-1">Start the conversation</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Input Area */}
//               <div className="bg-white border-t border-gray-200 p-4">
//                 <div className="max-w-3xl mx-auto">
//                   <div className="flex items-end gap-2">
//                     <button 
//                       className="p-2 hover:bg-gray-100 rounded-lg transition"
//                       title="Attach file"
//                     >
//                       <Paperclip className="w-5 h-5 text-gray-600" />
//                     </button>
                    
//                     <div className="flex-1">
//                       <input
//                         type="text"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         placeholder="Type or use template message"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                       />
//                     </div>

//                     <button
//                       onClick={handleSendMessage}
//                       disabled={!message.trim()}
//                       className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <Send className="w-4 h-4" />
//                       Send
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="flex-1 flex items-center justify-center bg-gray-50">
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <User className="w-10 h-10 text-gray-400" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   Select a conversation
//                 </h3>
//                 <p className="text-gray-500">
//                   Choose a student from the list to start messaging
//                 </p>
//               </div>
//             </div>
//           )
//         ) : (
//           /* STUDENT DETAIL AREA - NEW */
//           <div className="flex-1 bg-white">
//             <StudentDetail student={selectedStudent} />
//           </div>
//         )}
//       </div>

//       {/* ==================== RIGHT SIDEBAR ==================== */}
//       {viewMode === 'chats' && selectedChat && (
//         <div className="w-80 bg-gray-50 overflow-y-auto p-4">
//           <ContactInfoCard chat={selectedChat} />
//           <ActivityList activities={mockActivities} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminChatPage;


// src/presentation/pages/AdminChatPage.jsx
// src/presentation/pages/AdminChatPage.jsx

import React, { useState, useEffect } from "react";
import mockChats from "../../data/mockChats";
import mockMessages from "../../data/mockMessages";
import mockActivities from "../../data/mockActivities";
import mockAgents from "../../data/mockAgents.js";
import mockStudents from "../../data/mockStudents.js";
import mockNotifications from '../../data/mockNotifications';

// Components
import SidebarFilter from "../components/SidebarFilter.jsx";
import ActivityList from "../components/ActivityList.jsx";
import ChatListItem from "../components/ChatListItem.jsx";
import ContactInfoCard from "../components/ContactInfoCard.jsx";
import MessageBubble from "../components/MessageBubble.jsx";
import UserMenu from '../components/UserMenu';
import StudentList from '../components/StudentList.jsx';
import StudentDetail from '../components/StudentDetail.jsx';
import NotificationList from '../components/NotificationList';
import NotificationForm from '../components/NotificationForm';

// Styles
import './AdminChatPage.css';

// Icons
import { 
  Send, 
  Search, 
  Paperclip, 
  MoreVertical, 
  User, 
  Mail,
  Users,
  MessageCircle,
  Bell // NEW
} from 'lucide-react';

const AdminChatPage = ({ currentUser, onLogout }) => {
  // ==================== STATE DECLARATIONS ====================
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [channelFilter, setChannelFilter] = useState('all');
  
  // View modes: 'chats', 'students', 'notifications'
  const [viewMode, setViewMode] = useState('chats');
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // Notification states
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showNotificationForm, setShowNotificationForm] = useState(false);

  // ==================== COMPUTED VALUES ====================
  const messages = selectedChat ? mockMessages[selectedChat.id] || [] : [];

  const filteredChats = mockChats.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chat.studentId.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || chat.status === statusFilter;
    const matchesChannel = channelFilter === 'all' || chat.channel.toLowerCase() === channelFilter;
    return matchesSearch && matchesStatus && matchesChannel;
  });

  // ==================== EVENT HANDLERS ====================
  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending:', message);
      setMessage('');
    }
  };

  // Notification handlers
  const handleCreateNotification = () => {
    setSelectedNotification(null);
    setShowNotificationForm(true);
  };

  const handleEditNotification = (notif) => {
    setSelectedNotification(notif);
    setShowNotificationForm(true);
  };

  const handleSaveNotification = (data) => {
    if (data.id && notifications.find(n => n.id === data.id)) {
      // Update existing
      setNotifications(prev => prev.map(n => n.id === data.id ? data : n));
    } else {
      // Create new
      setNotifications(prev => [data, ...prev]);
    }
    setShowNotificationForm(false);
    setSelectedNotification(null);
  };

  const handleDeleteNotification = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa thông báo này?')) {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }
  };

  const handleViewProfile = () => {
    console.log('View profile clicked');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setViewMode('chats');
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    if (mode === 'students') {
      setSelectedChat(null);
    } else if (mode === 'notifications') {
      setSelectedStudent(null);
      setSelectedChat(null);
      setShowNotificationForm(false);
    } else {
      setSelectedStudent(null);
      setShowNotificationForm(false);
    }
  };

  // ==================== FILTER ITEMS ====================
  const statusItems = [
    { label: 'All', value: 'all', count: mockChats.length },
    { label: 'Assigned to me', value: 'assigned', count: 6 },
    { label: 'Unassigned', value: 'unassigned', count: 6 }
  ];

  const statusTypeItems = [
    { label: 'All', value: 'all', count: mockChats.length },
    { label: 'Open', value: 'open', count: mockChats.filter(c => c.status === 'open').length },
    { label: 'Agent', value: 'agent', count: mockChats.filter(c => c.status === 'agent').length },
    { label: 'Awaiting agent', value: 'awaiting', count: mockChats.filter(c => c.status === 'awaiting').length },
    { label: 'Paused', value: 'paused', count: mockChats.filter(c => c.status === 'paused').length }
  ];

  // ==================== RENDER ====================
  return (
    <div className="flex h-screen bg-gray-50">
      {/* ==================== LEFT SIDEBAR ==================== */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold text-gray-800">
              {currentUser ? currentUser.name : 'Guest'}
            </h1>
            <UserMenu
              currentUser={currentUser}
              onLogout={onLogout}
              onViewProfile={handleViewProfile}
            />
          </div>
          
          {/* View Mode Toggle - 3 tabs */}
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex gap-2">
              <button
                onClick={() => handleViewModeChange('chats')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition ${
                  viewMode === 'chats'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Tin nhắn
              </button>
              <button
                onClick={() => handleViewModeChange('students')}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition ${
                  viewMode === 'students'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Users className="w-4 h-4" />
                Sinh viên
              </button>
            </div>
            <button
              onClick={() => handleViewModeChange('notifications')}
              className={`w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition ${
                viewMode === 'notifications'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Bell className="w-4 h-4" />
              Thông báo
            </button>
          </div>

          {/* Search Bar - Only for chats view */}
          {viewMode === 'chats' && (
            <>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search chat"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
                  Open
                </button>
                <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
                  Newest
                </button>
              </div>
            </>
          )}
        </div>

        {/* Dynamic Content based on viewMode */}
        <div className="flex-1 overflow-y-auto p-3">
          {viewMode === 'chats' && (
            <>
              <SidebarFilter
                title="INBOX"
                items={statusItems}
                selected={statusFilter}
                onSelect={setStatusFilter}
              />

              {/* Agents List */}
              <div className="mt-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">
                  AGENTS
                </h3>
                <div className="space-y-1">
                  {mockAgents.map((agent) => (
                    <div 
                      key={agent.id} 
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {agent.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 truncate">{agent.name}</p>
                        <p className="text-xs text-gray-500">{agent.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {viewMode === 'students' && (
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-600">Tổng sinh viên</span>
                  <span className="text-2xl font-bold text-blue-600">{mockStudents.length}</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-green-600">Học tập tốt</span>
                  <span className="text-2xl font-bold text-green-600">
                    {mockStudents.filter(s => s.status === 'active').length}
                  </span>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-yellow-600">Cần theo dõi</span>
                  <span className="text-2xl font-bold text-yellow-600">
                    {mockStudents.filter(s => s.status === 'warning').length}
                  </span>
                </div>
              </div>

              <div className="bg-red-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-red-600">Nguy cơ cao</span>
                  <span className="text-2xl font-bold text-red-600">
                    {mockStudents.filter(s => s.status === 'danger').length}
                  </span>
                </div>
              </div>
            </div>
          )}

          {viewMode === 'notifications' && (
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-600">Tổng thông báo</span>
                  <span className="text-2xl font-bold text-blue-600">{notifications.length}</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-green-600">Đã xuất bản</span>
                  <span className="text-2xl font-bold text-green-600">
                    {notifications.filter(n => n.status === 'published').length}
                  </span>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-yellow-600">Nháp</span>
                  <span className="text-2xl font-bold text-yellow-600">
                    {notifications.filter(n => n.status === 'draft').length}
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-purple-600">Ghim</span>
                  <span className="text-2xl font-bold text-purple-600">
                    {notifications.filter(n => n.pinned).length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ==================== MIDDLE SECTION ==================== */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {viewMode === 'chats' && (
          <>
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">
                Conversations ({filteredChats.length})
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredChats.length > 0 ? (
                filteredChats.map((chat) => (
                  <ChatListItem
                    key={chat.id}
                    chat={chat}
                    isSelected={selectedChat?.id === chat.id}
                    onClick={() => handleChatSelect(chat)}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  <p className="text-gray-500 text-sm">No conversations found</p>
                  <p className="text-gray-400 text-xs mt-1">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </>
        )}

        {viewMode === 'students' && (
          <StudentList
            students={mockStudents}
            onSelectStudent={handleStudentSelect}
            selectedStudent={selectedStudent}
          />
        )}

        {viewMode === 'notifications' && (
          <NotificationList
            notifications={notifications}
            onSelectNotification={handleEditNotification}
            selectedNotification={selectedNotification}
            onCreateNew={handleCreateNotification}
            onDelete={handleDeleteNotification}
          />
        )}
      </div>

      {/* ==================== MAIN AREA ==================== */}
      <div className="flex-1 flex flex-col">
        {viewMode === 'chats' && (
          selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {selectedChat.avatar}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">{selectedChat.name}</h2>
                    <p className="text-sm text-gray-500">{selectedChat.channel}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                    title="More options"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                  {messages.length > 0 ? (
                    messages.map((msg) => (
                      <MessageBubble key={msg.id} message={msg} />
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <Mail className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">No messages yet</p>
                      <p className="text-gray-400 text-sm mt-1">Start the conversation</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-white border-t border-gray-200 p-4">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-end gap-2">
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-lg transition"
                      title="Attach file"
                    >
                      <Paperclip className="w-5 h-5 text-gray-600" />
                    </button>
                    
                    <div className="flex-1">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type or use template message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>

                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Select a conversation
                </h3>
                <p className="text-gray-500">
                  Choose a student from the list to start messaging
                </p>
              </div>
            </div>
          )
        )}

        {viewMode === 'students' && (
          <div className="flex-1 bg-white">
            <StudentDetail student={selectedStudent} />
          </div>
        )}

        {viewMode === 'notifications' && (
          showNotificationForm ? (
            <NotificationForm
              notification={selectedNotification}
              onSave={handleSaveNotification}
              onCancel={() => setShowNotificationForm(false)}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Chọn thông báo để chỉnh sửa
                </h3>
                <p className="text-gray-500 mb-4">
                  Hoặc tạo thông báo mới từ danh sách bên trái
                </p>
                <button
                  onClick={handleCreateNotification}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Tạo thông báo mới
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/* ==================== RIGHT SIDEBAR ==================== */}
      {viewMode === 'chats' && selectedChat && (
        <div className="w-80 bg-gray-50 overflow-y-auto p-4">
          <ContactInfoCard chat={selectedChat} />
          <ActivityList activities={mockActivities} />
        </div>
      )}
    </div>
  );
};

export default AdminChatPage;