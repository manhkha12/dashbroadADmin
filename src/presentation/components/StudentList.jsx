import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MessageCircle, 
  GraduationCap,
  AlertCircle,
  Search,
  Filter
} from 'lucide-react';
import './StudentList.css';

const StudentList = ({ students, onSelectStudent, selectedStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Get unique classes for filter
  const uniqueClasses = ['all', ...new Set(students.map(s => s.class))];

  // Filter students
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.includes(searchTerm) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesClass = filterClass === 'all' || student.class === filterClass;
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;

    return matchesSearch && matchesClass && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const badges = {
      active: { bg: 'bg-green-100', text: 'text-green-700', label: 'Tốt' },
      warning: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Cảnh báo' },
      danger: { bg: 'bg-red-100', text: 'text-red-700', label: 'Nguy cơ' }
    };
    return badges[status] || badges.active;
  };

  return (
    <div className="student-list">
      {/* Search and Filters */}
      <div className="student-list__filters">
        <div className="student-list__search">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm theo tên, MSSV..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="student-list__search-input"
          />
        </div>

        <div className="student-list__filter-row">
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="student-list__select"
          >
            {uniqueClasses.map(cls => (
              <option key={cls} value={cls}>
                {cls === 'all' ? 'Tất cả lớp' : cls}
              </option>
            ))}
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="student-list__select"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Tốt</option>
            <option value="warning">Cảnh báo</option>
            <option value="danger">Nguy cơ</option>
          </select>
        </div>
      </div>

      {/* Student Count */}
      <div className="student-list__count">
        <p className="text-sm text-gray-600">
          Tìm thấy <strong>{filteredStudents.length}</strong> sinh viên
        </p>
      </div>

      {/* Student Items */}
      <div className="student-list__items">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => {
            const statusBadge = getStatusBadge(student.status);
            const isSelected = selectedStudent?.id === student.id;

            return (
              <div
                key={student.id}
                onClick={() => onSelectStudent(student)}
                className={`student-list__item ${isSelected ? 'student-list__item--selected' : ''}`}
              >
                {/* Avatar */}
                <div className="student-list__avatar">
                  {student.avatar}
                </div>

                {/* Info */}
                <div className="student-list__info">
                  <div className="student-list__header">
                    <h4 className="student-list__name">{student.name}</h4>
                    {student.unreadChats > 0 && (
                      <span className="student-list__unread">{student.unreadChats}</span>
                    )}
                  </div>

                  <p className="student-list__id">MSSV: {student.studentId}</p>

                  <div className="student-list__meta">
                    <span className="student-list__class">{student.class}</span>
                    <span className={`student-list__status ${statusBadge.bg} ${statusBadge.text}`}>
                      {statusBadge.label}
                    </span>
                  </div>

                  <div className="student-list__stats">
                    <div className="student-list__stat">
                      <GraduationCap className="w-3 h-3" />
                      <span>GPA: {student.gpa}</span>
                    </div>
                    <div className="student-list__stat">
                      <MessageCircle className="w-3 h-3" />
                      <span>{student.totalChats} chats</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="student-list__empty">
            <AlertCircle className="w-12 h-12 text-gray-300 mb-3" />
            <p className="text-gray-600 font-medium">
              {searchTerm || filterClass !== 'all' || filterStatus !== 'all'
                ? 'Không tìm thấy sinh viên phù hợp'
                : 'Hiện tại bạn chưa được gán sinh viên phụ trách'}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {searchTerm || filterClass !== 'all' || filterStatus !== 'all'
                ? 'Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm'
                : 'Vui lòng liên hệ quản trị viên'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;