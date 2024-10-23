import React, { useState }  from 'react';
import {Outlet} from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={theme + ' font-sans h-full'}>
      <div className='bg-orange-100 dark:bg-slate-100 h-full'>
        <Header handleTheme={handleTheme} theme={theme}/>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
