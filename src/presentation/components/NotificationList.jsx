import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Plus,
  Edit2,
  Trash2,
  Eye,
  Pin,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import './NotificationList.css';

const NotificationList = ({ 
  notifications, 
  onSelectNotification, 
  selectedNotification,
  onCreateNew,
  onDelete 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Filter notifications
  const filteredNotifications = notifications.filter(notif => {
    const matchesSearch = 
      notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || notif.type === filterType;
    const matchesStatus = filterStatus === 'all' || notif.status === filterStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  // Sort: pinned first, then by date
  const sortedNotifications = [...filteredNotifications].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const getTypeBadge = (type) => {
    const badges = {
      important: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Quan trọng', icon: '!' },
      normal: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Thông thường', icon: 'i' },
      urgent: { bg: 'bg-red-100', text: 'text-red-700', label: 'Khẩn cấp', icon: '!!' }
    };
    return badges[type] || badges.normal;
  };

  const getStatusBadge = (status) => {
    const badges = {
      published: { bg: 'bg-green-100', text: 'text-green-700', label: 'Đã xuất bản' },
      draft: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Nháp' },
      archived: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Đã lưu trữ' }
    };
    return badges[status] || badges.draft;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Hôm nay';
    if (days === 1) return 'Hôm qua';
    if (days < 7) return `${days} ngày trước`;
    return date.toLocaleDateString('vi-VN');
  };

  return (
    <div className="notification-list">
      {/* Header */}
      <div className="notification-list__header">
        <div className="notification-list__title-row">
          <h2 className="notification-list__title">Quản lý thông báo</h2>
          <button 
            className="notification-list__create-btn"
            onClick={onCreateNew}
          >
            <Plus className="w-4 h-4" />
            Tạo mới
          </button>
        </div>

        {/* Search */}
        <div className="notification-list__search">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm thông báo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="notification-list__search-input"
          />
        </div>

        {/* Filters */}
        <div className="notification-list__filters">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="notification-list__select"
          >
            <option value="all">Tất cả loại</option>
            <option value="urgent">Khẩn cấp</option>
            <option value="important">Quan trọng</option>
            <option value="normal">Thông thường</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="notification-list__select"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="published">Đã xuất bản</option>
            <option value="draft">Nháp</option>
            <option value="archived">Đã lưu trữ</option>
          </select>
        </div>

        {/* Stats */}
        <div className="notification-list__stats">
          <div className="notification-list__stat">
            <span className="notification-list__stat-label">Tổng:</span>
            <span className="notification-list__stat-value">{notifications.length}</span>
          </div>
          <div className="notification-list__stat">
            <span className="notification-list__stat-label">Đã xuất bản:</span>
            <span className="notification-list__stat-value text-green-600">
              {notifications.filter(n => n.status === 'published').length}
            </span>
          </div>
          <div className="notification-list__stat">
            <span className="notification-list__stat-label">Ghim:</span>
            <span className="notification-list__stat-value text-blue-600">
              {notifications.filter(n => n.pinned).length}
            </span>
          </div>
        </div>
      </div>

      {/* Notification Items */}
      <div className="notification-list__items">
        {sortedNotifications.length > 0 ? (
          sortedNotifications.map((notif) => {
            const typeBadge = getTypeBadge(notif.type);
            const statusBadge = getStatusBadge(notif.status);
            const isSelected = selectedNotification?.id === notif.id;

            return (
              <div
                key={notif.id}
                onClick={() => onSelectNotification(notif)}
                className={`notification-list__item ${isSelected ? 'notification-list__item--selected' : ''}`}
              >
                {/* Left indicator */}
                <div className={`notification-list__indicator ${typeBadge.bg}`} />

                {/* Content */}
                <div className="notification-list__item-content">
                  {/* Header row */}
                  <div className="notification-list__item-header">
                    <div className="notification-list__item-title-row">
                      {notif.pinned && (
                        <Pin className="w-3 h-3 text-blue-500 fill-blue-500" />
                      )}
                      <h3 className="notification-list__item-title">{notif.title}</h3>
                    </div>
                    <button 
                      className="notification-list__delete-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(notif.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content preview */}
                  <p className="notification-list__item-preview">
                    {notif.content.substring(0, 100)}...
                  </p>

                  {/* Meta row */}
                  <div className="notification-list__item-meta">
                    <div className="notification-list__item-badges">
                      <span className={`notification-list__badge ${typeBadge.bg} ${typeBadge.text}`}>
                        {typeBadge.label}
                      </span>
                      <span className={`notification-list__badge ${statusBadge.bg} ${statusBadge.text}`}>
                        {statusBadge.label}
                      </span>
                      <span className="notification-list__badge bg-purple-100 text-purple-700">
                        {notif.targetDetail}
                      </span>
                    </div>

                    <div className="notification-list__item-stats">
                      <div className="notification-list__stat-item">
                        <Eye className="w-3 h-3" />
                        <span>{notif.views}</span>
                      </div>
                      <div className="notification-list__stat-item">
                        <Clock className="w-3 h-3" />
                        <span>{formatDate(notif.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="notification-list__item-author">
                    Người tạo: <strong>{notif.author}</strong>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="notification-list__empty">
            <Bell className="w-12 h-12 text-gray-300 mb-3" />
            <p className="text-gray-600 font-medium">
              {searchTerm || filterType !== 'all' || filterStatus !== 'all'
                ? 'Không tìm thấy thông báo phù hợp'
                : 'Chưa có thông báo nào'}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {searchTerm || filterType !== 'all' || filterStatus !== 'all'
                ? 'Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm'
                : 'Nhấn "Tạo mới" để thêm thông báo đầu tiên'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationList;