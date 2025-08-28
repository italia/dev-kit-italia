import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppRoutes } from './routes';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import '@italia/design-web-components/fonts.css';
import '@italia/design-web-components/styles.css';
import '@italia/design-web-components/elements.js';

function App() {
  return (
    <BrowserRouter>
      <div className="app-header">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>Vite + React</div>
        <div className="app-nav">
          {AppRoutes.map((route) => (
            <Link key={route.path + 'link'} to={route.path}>
              {route.title}
            </Link>
          ))}
        </div>
      </div>
      <Routes>
        {AppRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
