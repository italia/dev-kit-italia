import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Footer } from './components/Footer';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="react-app">
      <header className="app-header">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div class="container">
          <div>Vite + React</div>
          <nav className="app-nav">
            {AppRoutes.map((route) => (
              <Link key={route.path + 'link'} to={route.path}>
                {route.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="container mb-4">
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
      <it-back-to-top it-aria-label="Torna su" border></it-back-to-top>
    </BrowserRouter>
  );
}

export default App;
