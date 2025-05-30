import { useEffect, useState } from 'react'
import { SearchIcon, SunIcon, UserCircleIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
import '../Header/header.css'
import { Link } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle/mode-toggle'
export default function Header() {
  const [userInfo, setUserInfo] = useState<{ firstName?: string; lastName?: string } | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo')
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser))
    }
  }, [])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    window.location.href = '/login'
  }
  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const [showToggle, setShowToggle] = useState(false)

  const handleClickIcon = () => {
    setShowToggle((prev) => !prev)
  }
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-button" onClick={handleToggleMobileMenu}>
            <MenuIcon className="menu-icon" />
            <span className="sr-only">Toggle menu</span>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              <Link to="/" className="mobile-nav-link">Trang chủ</Link>
              <Link to="/library" className="mobile-nav-link">Thư viện</Link>
              <Link to="/training" className="mobile-nav-link">Huấn luyện</Link>
              <Link to="/diagnostic" className="mobile-nav-link">Công cụ chẩn đoán</Link>
              <Link to="/forum" className="mobile-nav-link">Diễn đàn</Link>
              <Link to="/articles" className="mobile-nav-link">Bài viết</Link>
            </div>
          )}

          {/* Logo */}
          <Link to="/" className="logo-link">
            <span className="logo-text">
              <span className="logo-highlight">D</span>ogBehavior
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <Link to="/library" className="nav-link">Thư viện</Link>
            <Link to="/training" className="nav-link">Huấn luyện</Link>
            <Link to="/diagnostic" className="nav-link">Công cụ chẩn đoán</Link>
            <Link to="/forum" className="nav-link">Diễn đàn</Link>
            <Link to="/articles" className="nav-link">Bài viết</Link>
          </nav>
        </div>

        {/* Right section */}
        <div className="header-right">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input placeholder="Tìm kiếm..." className="search-input" />
          </div>
          <div className="mobile-search-button">
            <SearchIcon className="search-icon-mobile" />
            <span className="sr-only">Tìm kiếm</span>
          </div>
          <>
            <SunIcon className="mode-toggle-button" onClick={handleClickIcon} />
            <div>
              {showToggle && <ModeToggle />}
            </div>
          </>
          <div className="auth-section">
            {userInfo ? (
              <div className="user-info" onClick={handleToggleMenu}>
                <p className="header_name">
                  {userInfo.firstName}
                </p>
                {menuOpen && (
                  <ul className="header_menu_nav active">
                    <li onClick={handleLogout}>Log Out</li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="/login" className="login-button">Đăng nhập</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
