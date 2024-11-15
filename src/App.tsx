import { useState } from 'react';
import './App.css';
import BottomNavBar from './components/common/BottomNavBar';
import { MainPage } from './pages/MainPage';
import { GamePage } from './pages/GamePage';
import { MyPage } from './pages/MyPage';
import { SearchPage } from './pages/SearchPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <MainPage />;
      case 'game':
        return <GamePage />;
      case 'search':
        return <SearchPage />;
      case 'profile':
        return <MyPage />;
      default:
        return <MainPage />;
    }
  };
  return (
    <>
      <div className="pb-16">
        {renderContent()}
        <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}

export default App;
