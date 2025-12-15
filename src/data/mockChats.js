const mockChats = [
  {
    id: 1,
    name: 'Nguyễn Văn An',
    studentId: '2021001',
    avatar: 'NVA',
    lastMessage: 'Em cần hỏi về lịch thi cuối kỳ ạ',
    time: '10:34',
    unread: 2,
    status: 'open',
    channel: 'Web',
    email: 'nguyenvanan@tlu.edu.vn',
    phone: '+84912345678',
    address: '54B1 Richmond View Suite 711 Sunrise, Kentucky, 42456-9838',
    tags: ['Thi cuối kỳ', 'Khẩn cấp']
  },
  {
    id: 2,
    name: 'Trần Thị Bích',
    studentId: '2021002',
    avatar: 'TTB',
    lastMessage: 'Re: I want to ask something...',
    time: '09:45',
    unread: 0,
    status: 'agent',
    channel: 'SMS',
    email: 'tranthibich@tlu.edu.vn',
    phone: '+84923456789',
    address: 'Hà Nội',
    tags: ['Học phí']
  },
  {
    id: 3,
    name: 'Lê Minh Cường',
    studentId: '2021003',
    avatar: 'LMC',
    lastMessage: 'Hi, this is Alex from Customer Support...',
    time: '08:12',
    unread: 1,
    status: 'paused',
    channel: 'WhatsApp',
    email: 'leminhcuong@tlu.edu.vn',
    phone: '+84934567890',
    address: 'Hồ Chí Minh',
    tags: ['Điểm danh']
  },
  {
    id: 4,
    name: 'Phạm Thu Hà',
    studentId: '2021004',
    avatar: 'PTH',
    lastMessage: 'Thank you. Please enter the amount and date...',
    time: 'Yesterday',
    unread: 0,
    status: 'awaiting',
    channel: 'Instagram',
    email: 'phamthuha@tlu.edu.vn',
    phone: '+84945678901',
    address: 'Đà Nẵng',
    tags: ['Học bổng']
  },
  {
    id: 5,
    name: 'Hoàng Đức Minh',
    studentId: '2021005',
    avatar: 'HDM',
    lastMessage: 'Re: I want to ask something...',
    time: 'Yesterday',
    unread: 0,
    status: 'open',
    channel: 'Web',
    email: 'hoangducminh@tlu.edu.vn',
    phone: '+84956789012',
    address: 'Hải Phòng',
    tags: ['Đăng ký môn học']
  }
];

const mockMessages = {
  1: [
    {
      id: 1,
      sender: 'student',
      text: 'Thank you. Please enter the amount and date of the transaction.',
      time: '10:24',
      date: 'Today, November 20th',
      status: 'read'
    },
    {
      id: 2,
      sender: 'admin',
      text: 'Hi, this is Alex from Customer Support. I see you\'re having an issue with your loan. What can I do for you?',
      time: '10:34',
      date: 'Today, November 20th',
      status: 'read'
    },
    {
      id: 3,
      sender: 'system',
      text: 'Speaking to a Representative',
      time: '10:34',
      date: 'Today, November 20th',
      status: 'read'
    },
    {
      id: 4,
      sender: 'student',
      text: 'Hi, this is Alex from Customer Support. I see you\'re having an issue with your loan. What can I do for you?',
      time: '10:34',
      date: 'Today, November 20th',
      status: 'delivered'
    }
  ]
};

export default mockChats;