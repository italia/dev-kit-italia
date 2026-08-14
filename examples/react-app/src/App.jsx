import { BrowserRouter, Routes, Route, useHref, useLinkClickHandler, useLocation } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Footer } from './components/Footer';
import reactLogo from './assets/react.svg';

import './App.css';

function MyDropdownItem({ to, children }) {
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to);

  return (
    <it-dropdown-item href={href} onClick={handleClick}>
      {children}
    </it-dropdown-item>
  );
}

function AppContent() {
  const location = useLocation();
  const isFullHeaderPage = ['/header-complete-full-example', '/header-complete-full-sticky-example'].includes(
    location.pathname,
  );

  return (
    <>
      {!isFullHeaderPage && (
        <header className="app-header bg-primary">
          <div>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div className="container">
            <nav className="navbar navbar-expand-lg" aria-label="Menu principale">
              <div className="navbar-collapsable" id="navbar-A" tabIndex="-1">
                <div className="menu-wrapper justify-content-lg-between">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <it-megamenu label="Componenti" columns="6">
                        {AppRoutes.map((route) => (
                          <MyDropdownItem key={route.path + 'link'} to={route.path}>
                            <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
                            {route.title}
                          </MyDropdownItem>
                        ))}
                      </it-megamenu>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      )}

      <main className={isFullHeaderPage ? undefined : 'container mb-4'}>
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      <>
        <Footer />
        <it-back-to-top it-aria-label="Torna su" border></it-back-to-top>
      </>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
