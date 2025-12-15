import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap,
  Calendar,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';
import './StudentDetail.css';

const StudentDetail = ({ student }) => {
  if (!student) {
    return (
      <div className="student-detail__empty">
        <User className="w-16 h-16 text-gray-300 mb-3" />
        <p className="text-gray-500">Chọn sinh viên để xem chi tiết</p>
      </div>
    );
  }

  const getStatusInfo = (status) => {
    const statusMap = {
      active: { 
        color: 'text-green-600', 
        bg: 'bg-green-100',
        icon: '✓',
        label: 'Học tập tốt',
        desc: 'Sinh viên đang theo kịp chương trình học'
      },
      warning: { 
        color: 'text-yellow-600', 
        bg: 'bg-yellow-100',
        icon: '⚠',
        label: 'Cần theo dõi',
        desc: 'GPA thấp hoặc ít tương tác gần đây'
      },
      danger: { 
        color: 'text-red-600', 
        bg: 'bg-red-100',
        icon: '!',
        label: 'Nguy cơ cao',
        desc: 'GPA dưới 2.5 hoặc không liên lạc lâu ngày'
      }
    };
    return statusMap[status] || statusMap.active;
  };

  const statusInfo = getStatusInfo(student.status);

  return (
    <div className="student-detail">
      {/* Header */}
      <div className="student-detail__header">
        <div className="student-detail__avatar">
          {student.avatar}
        </div>
        <h2 className="student-detail__name">{student.name}</h2>
        <p className="student-detail__id">MSSV: {student.studentId}</p>
        
        <div className={`student-detail__status ${statusInfo.bg} ${statusInfo.color}`}>
          <span className="student-detail__status-icon">{statusInfo.icon}</span>
          <div>
            <p className="student-detail__status-label">{statusInfo.label}</p>
            <p className="student-detail__status-desc">{statusInfo.desc}</p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="student-detail__section">
        <h3 className="student-detail__section-title">Thông tin liên hệ</h3>
        
        <div className="student-detail__info-grid">
          <div className="student-detail__info-item">
            <Mail className="w-4 h-4 text-gray-400" />
            <div>
              <p className="student-detail__info-label">Email</p>
              <p className="student-detail__info-value">{student.email}</p>
            </div>
          </div>

          <div className="student-detail__info-item">
            <Phone className="w-4 h-4 text-gray-400" />
            <div>
              <p className="student-detail__info-label">Số điện thoại</p>
              <p className="student-detail__info-value">{student.phone}</p>
            </div>
          </div>

          <div className="student-detail__info-item">
            <MapPin className="w-4 h-4 text-gray-400" />
            <div>
              <p className="student-detail__info-label">Địa chỉ</p>
              <p className="student-detail__info-value">{student.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div className="student-detail__section">
        <h3 className="student-detail__section-title">Thông tin học vấn</h3>
        
        <div className="student-detail__info-grid">
          <div className="student-detail__info-item">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <div>
              <p className="student-detail__info-label">Lớp</p>
              <p className="student-detail__info-value">{student.class}</p>
            </div>
          </div>

          <div className="student-detail__info-item">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <div>
              <p className="student-detail__info-label">Khoa</p>
              <p className="student-detail__info-value">{student.faculty}</p>
            </div>
          </div>

          <div className="student-detail__info-item">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <div>
              <p className="student-detail__info-label">GPA</p>
              <p className={`student-detail__info-value font-bold ${
                student.gpa >= 3.5 ? 'text-green-600' : 
                student.gpa >= 2.5 ? 'text-yellow-600' : 
                'text-red-600'
              }`}>
                {student.gpa.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Stats */}
      <div className="student-detail__section">
        <h3 className="student-detail__section-title">Thống kê tương tác</h3>
        
        <div className="student-detail__stats">
          <div className="student-detail__stat-card">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            <div>
              <p className="student-detail__stat-value">{student.totalChats}</p>
              <p className="student-detail__stat-label">Tổng cuộc trò chuyện</p>
            </div>
          </div>

          <div className="student-detail__stat-card">
            <Calendar className="w-5 h-5 text-purple-500" />
            <div>
              <p className="student-detail__stat-value">
                {new Date(student.lastContact).toLocaleDateString('vi-VN')}
              </p>
              <p className="student-detail__stat-label">Liên hệ gần nhất</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="student-detail__actions">
        <button className="student-detail__action-btn student-detail__action-btn--primary">
          <MessageCircle className="w-4 h-4" />
          Nhắn tin
        </button>
        <button className="student-detail__action-btn student-detail__action-btn--secondary">
          <User className="w-4 h-4" />
          Xem hồ sơ đầy đủ
        </button>
      </div>
    </div>
  );
};

export default StudentDetail;