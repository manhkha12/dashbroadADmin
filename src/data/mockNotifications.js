const mockNotifications = [
  {
    id: 1,
    title: 'Thông báo nghỉ Tết Nguyên Đán 2025',
    content: 'Nhà trường thông báo lịch nghỉ Tết Nguyên Đán 2025 từ ngày 27/01 đến 05/02. Sinh viên lưu ý sắp xếp lịch học và về quê đúng thời gian.',
    type: 'important', // important, normal, urgent
    target: 'all', // all, faculty, class
    targetDetail: 'Toàn trường',
    author: 'Admin TLU',
    createdAt: '2024-12-15T10:30:00',
    updatedAt: '2024-12-15T10:30:00',
    status: 'published', // draft, published, archived
    views: 245,
    pinned: true
  },
  {
    id: 2,
    title: 'Đăng ký học phần học kỳ 2 năm học 2024-2025',
    content: 'Sinh viên đăng ký học phần từ 20/12/2024 đến 25/12/2024. Lưu ý kiểm tra điều kiện tiên quyết và môn học tương đương trước khi đăng ký.',
    type: 'important',
    target: 'all',
    targetDetail: 'Toàn trường',
    author: 'Phòng Đào tạo',
    createdAt: '2024-12-10T14:20:00',
    updatedAt: '2024-12-10T14:20:00',
    status: 'published',
    views: 523,
    pinned: true
  },
  {
    id: 3,
    title: 'Hội thảo Công nghệ AI trong Giáo dục',
    content: 'Khoa CNTT tổ chức hội thảo về ứng dụng AI trong giáo dục vào ngày 18/12/2024. Sinh viên quan tâm đăng ký tham dự.',
    type: 'normal',
    target: 'faculty',
    targetDetail: 'Khoa Công nghệ thông tin',
    author: 'Khoa CNTT',
    createdAt: '2024-12-08T09:15:00',
    updatedAt: '2024-12-08T09:15:00',
    status: 'published',
    views: 178,
    pinned: false
  },
  {
    id: 4,
    title: 'Nộp học phí học kỳ 2',
    content: 'Sinh viên nộp học phí học kỳ 2 trước ngày 10/01/2025 để tránh bị khóa tài khoản học vụ.',
    type: 'urgent',
    target: 'all',
    targetDetail: 'Toàn trường',
    author: 'Phòng Tài chính',
    createdAt: '2024-12-05T16:45:00',
    updatedAt: '2024-12-05T16:45:00',
    status: 'published',
    views: 612,
    pinned: true
  },
  {
    id: 5,
    title: 'Lịch thi cuối kỳ học kỳ 1',
    content: 'Phòng Khảo thí công bố lịch thi cuối kỳ học kỳ 1. Sinh viên vào cổng thông tin để xem chi tiết lịch thi của mình.',
    type: 'important',
    target: 'all',
    targetDetail: 'Toàn trường',
    author: 'Phòng Khảo thí',
    createdAt: '2024-12-01T11:00:00',
    updatedAt: '2024-12-01T11:00:00',
    status: 'published',
    views: 890,
    pinned: false
  },
  {
    id: 6,
    title: 'Bảo trì hệ thống',
    content: 'Hệ thống sẽ được bảo trì vào lúc 2h sáng ngày 16/12/2024. Dự kiến hoàn thành trong 2 giờ.',
    type: 'normal',
    target: 'all',
    targetDetail: 'Toàn trường',
    author: 'Trung tâm CNTT',
    createdAt: '2024-11-28T10:30:00',
    updatedAt: '2024-11-28T10:30:00',
    status: 'archived',
    views: 156,
    pinned: false
  }
];

export default mockNotifications;
