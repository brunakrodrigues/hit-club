import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { RewardsCatalog } from './components/RewardsCatalog';
import { RewardDetail } from './components/RewardDetail';
import { UserProfile } from './components/UserProfile';
import { PointsHistory } from './components/PointsHistory';
import { LoginModal } from './components/LoginModal';

type Page = 'home' | 'dashboard' | 'rewards' | 'reward-detail' | 'profile' | 'history' | 'card';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedRewardId, setSelectedRewardId] = useState<number | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Mock user data
  const userName = "João Silva";
  const userPoints = 7850;

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRewardClick = (rewardId: number) => {
    setSelectedRewardId(rewardId);
    setCurrentPage('reward-detail');
  };

  const handleBackToCatalog = () => {
    setCurrentPage('rewards');
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      return <LandingPage onLogin={handleLoginClick} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard userName={userName} onNavigate={handleNavigate} />;
      case 'rewards':
        return <RewardsCatalog userPoints={userPoints} onRewardClick={handleRewardClick} />;
      case 'reward-detail':
        return selectedRewardId ? (
          <RewardDetail 
            rewardId={selectedRewardId} 
            userPoints={userPoints} 
            onBack={handleBackToCatalog}
            onNavigate={handleNavigate}
          />
        ) : null;
      case 'profile':
        return <UserProfile userName={userName} userPoints={userPoints} />;
      case 'history':
        return <PointsHistory userName={userName} />;
      default:
        return <Dashboard userName={userName} onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black transition-colors">
        <Header 
          isLoggedIn={isLoggedIn} 
          onLogin={handleLoginClick}
          onNavigate={handleNavigate}
        />
        
        {renderPage()}
        
        <LoginModal 
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      </div>
    </ThemeProvider>
  );
}