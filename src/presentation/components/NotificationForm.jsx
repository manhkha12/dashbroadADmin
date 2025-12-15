import React, { useState, useEffect } from 'react';
import { X, Save, Eye, Pin, AlertCircle } from 'lucide-react';
import './NotificationForm.css';

const NotificationForm = ({ notification, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'normal',
    target: 'all',
    targetDetail: 'Toàn trường',
    status: 'draft',
    pinned: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (notification) {
      setFormData(notification);
    }
  }, [notification]);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Tiêu đề là bắt buộc';
    } else if (formData.title.length < 10) {
      newErrors.title = 'Tiêu đề phải có ít nhất 10 ký tự';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Nội dung là bắt buộc';
    } else if (formData.content.length < 20) {
      newErrors.content = 'Nội dung phải có ít nhất 20 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (status) => {
    if (!validate()) return;

    const dataToSave = {
      ...formData,
      status,
      updatedAt: new Date().toISOString()
    };

    if (!notification) {
      dataToSave.id = Date.now();
      dataToSave.createdAt = new Date().toISOString();
      dataToSave.author = 'Current User';
      dataToSave.views = 0;
    }

    onSave(dataToSave);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="notification-form">
      <div className="notification-form__header">
        <h2 className="notification-form__title">
          {notification ? 'Chỉnh sửa thông báo' : 'Tạo thông báo mới'}
        </h2>
        <button className="notification-form__close" onClick={onCancel}>
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="notification-form__body">
        {/* Title */}
        <div className="notification-form__field">
          <label className="notification-form__label">
            Tiêu đề <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className={`notification-form__input ${errors.title ? 'notification-form__input--error' : ''}`}
            placeholder="Nhập tiêu đề thông báo..."
          />
          {errors.title && (
            <p className="notification-form__error">{errors.title}</p>
          )}
        </div>

        {/* Content */}
        <div className="notification-form__field">
          <label className="notification-form__label">
            Nội dung <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => handleChange('content', e.target.value)}
            className={`notification-form__textarea ${errors.content ? 'notification-form__input--error' : ''}`}
            placeholder="Nhập nội dung thông báo..."
            rows="6"
          />
          {errors.content && (
            <p className="notification-form__error">{errors.content}</p>
          )}
        </div>

        {/* Type */}
        <div className="notification-form__field">
          <label className="notification-form__label">Loại thông báo</label>
          <select
            value={formData.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="notification-form__select"
          >
            <option value="normal">Thông thường</option>
            <option value="important">Quan trọng</option>
            <option value="urgent">Khẩn cấp</option>
          </select>
        </div>

        {/* Target */}
        <div className="notification-form__field">
          <label className="notification-form__label">Đối tượng</label>
          <select
            value={formData.target}
            onChange={(e) => handleChange('target', e.target.value)}
            className="notification-form__select"
          >
            <option value="all">Toàn trường</option>
            <option value="faculty">Theo khoa</option>
            <option value="class">Theo lớp</option>
          </select>
        </div>

        {/* Pinned */}
        <div className="notification-form__field">
          <label className="notification-form__checkbox-label">
            <input
              type="checkbox"
              checked={formData.pinned}
              onChange={(e) => handleChange('pinned', e.target.checked)}
              className="notification-form__checkbox"
            />
            <Pin className="w-4 h-4" />
            <span>Ghim thông báo lên đầu</span>
          </label>
        </div>
      </div>

      <div className="notification-form__footer">
        <button
          onClick={() => handleSubmit('draft')}
          className="notification-form__btn notification-form__btn--secondary"
        >
          <Save className="w-4 h-4" />
          Lưu nháp
        </button>
        <button
          onClick={() => handleSubmit('published')}
          className="notification-form__btn notification-form__btn--primary"
        >
          <Eye className="w-4 h-4" />
          Xuất bản
        </button>
      </div>
    </div>
  );
};

export default NotificationForm;