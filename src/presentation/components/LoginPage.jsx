import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.password) {
      newErrors.password = 'Mật khẩu là bắt buộc';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - In production, this comes from API
      const userData = {
        id: 1,
        name: 'Admin TLU',
        email: formData.email,
        role: 'admin',
        avatar: 'AD'
      };

      onLogin(userData);
    } catch (error) {
      setErrors({ general: 'Đăng nhập thất bại. Vui lòng thử lại.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Quick login for demo
  const handleQuickLogin = () => {
    const demoUser = {
      id: 1,
      name: 'Demo Admin',
      email: 'demo@tlu.edu.vn',
      role: 'admin',
      avatar: 'DA'
    };
    onLogin(demoUser);
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        {/* Left Side - Branding */}
        <div className="login-page__left">
          <div className="login-page__branding">
            <div className="login-page__logo">
              <div className="login-page__logo-icon">TLU</div>
            </div>
            <h1 className="login-page__title">Admin Chat System</h1>
            <p className="login-page__subtitle">
              Hệ thống quản lý tin nhắn sinh viên
            </p>
            <div className="login-page__features">
              <div className="login-page__feature">
                <div className="login-page__feature-icon">✓</div>
                <span>Quản lý tin nhắn real-time</span>
              </div>
              <div className="login-page__feature">
                <div className="login-page__feature-icon">✓</div>
                <span>Hỗ trợ đa kênh</span>
              </div>
              <div className="login-page__feature">
                <div className="login-page__feature-icon">✓</div>
                <span>Theo dõi lịch sử</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-page__right">
          <div className="login-page__form-container">
            <div className="login-page__form-header">
              <h2 className="login-page__form-title">Đăng nhập</h2>
              <p className="login-page__form-subtitle">
                Nhập thông tin để truy cập hệ thống
              </p>
            </div>

            <form className="login-page__form" onSubmit={handleSubmit}>
              {/* General Error */}
              {errors.general && (
                <div className="login-page__error-banner">
                  {errors.general}
                </div>
              )}

              {/* Email Field */}
              <div className="login-page__field">
                <label className="login-page__label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`login-page__input ${errors.email ? 'login-page__input--error' : ''}`}
                  placeholder="admin@tlu.edu.vn"
                  disabled={isLoading}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="login-page__error">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="login-page__field">
                <label className="login-page__label" htmlFor="password">
                  Mật khẩu
                </label>
                <div className="login-page__password-wrapper">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className={`login-page__input ${errors.password ? 'login-page__input--error' : ''}`}
                    placeholder="••••••••"
                    disabled={isLoading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="login-page__password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="login-page__error">{errors.password}</p>
                )}
              </div>

              {/* Options */}
              <div className="login-page__options">
                <label className="login-page__checkbox-label">
                  <input type="checkbox" className="login-page__checkbox" />
                  <span>Ghi nhớ đăng nhập</span>
                </label>
                <button 
                  type="button" 
                  className="login-page__forgot-password"
                >
                  Quên mật khẩu?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="login-page__submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="login-page__loading">
                    <span className="login-page__spinner"></span>
                    Đang đăng nhập...
                  </span>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Đăng nhập
                  </>
                )}
              </button>

              {/* Demo Button */}
              <button
                type="button"
                onClick={handleQuickLogin}
                className="login-page__demo-button"
              >
                Đăng nhập nhanh (Demo)
              </button>
            </form>

            {/* Footer */}
            <div className="login-page__form-footer">
              <p className="login-page__footer-text">
                © 2024 TLU. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;