import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectThemeMode } from '../themeSlice';
import styles from '../styles/components/Navigation.module.css';

/**
 * 导航栏组件
 * 全局导航栏，包含菜单、主题切换等功能
 */
function Navigation() {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);

  const navItems = [
    { label: '首页', path: '/' },
    { label: '项目', path: '/projects' },
    { label: '关于我', path: '/about' },
    { label: '联系', path: '/contact' }
  ];

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles['nav-container']}>
        {/* Logo */}
        <Link to="/" className={styles['nav-logo']}>
          <span className={styles['logo-icon']}>💼</span>
          <span className={styles['logo-text']}>Portfolio</span>
        </Link>

        {/* 导航链接 */}
        <ul className={styles['nav-menu']}>
          {navItems.map((item) => (
            <li key={item.path} className={styles['nav-item']}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles['nav-link']}${isActive ? ` ${styles.active}` : ''}`
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 主题切换按钮 */}
        <button
          className={styles['theme-toggle']}
          onClick={handleThemeToggle}
          title={`切换到${themeMode === 'light' ? '暗色' : '亮色'}模式`}
          aria-label="切换主题"
        >
          {themeMode === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
