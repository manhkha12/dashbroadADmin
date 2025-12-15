import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, UserCircle, LogIn } from 'lucide-react';
import './UserMenu.css';

const UserMenu = ({ currentUser, onLogin, onLogout, onViewProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (action) => {
    setIsOpen(false);
    action();
  };

  return (
    <div className="user-menu" ref={menuRef}>
      <button 
        className="user-menu__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="user-menu__dropdown">
          {currentUser ? (
            <>
              {/* User info header */}
              <div className="user-menu__header">
                <div className="user-menu__avatar">
                  {currentUser.name?.charAt(0) || 'U'}
                </div>
                <div className="user-menu__user-info">
                  <p className="user-menu__username">{currentUser.name}</p>
                  <p className="user-menu__email">{currentUser.email}</p>
                </div>
              </div>

              <div className="user-menu__divider" />

              {/* Menu items */}
              <button 
                className="user-menu__item"
                onClick={() => handleMenuClick(onViewProfile)}
              >
                <UserCircle className="w-4 h-4" />
                <span>View Profile</span>
              </button>

              <div className="user-menu__divider" />

              <button 
                className="user-menu__item user-menu__item--danger"
                onClick={() => handleMenuClick(onLogout)}
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <button 
              className="user-menu__item"
              onClick={() => handleMenuClick(onLogin)}
            >
              <LogIn className="w-4 h-4" />
              <span>Đăng nhập</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;