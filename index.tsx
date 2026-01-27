import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { AuthScreen } from './components/AuthScreen';
import { OffersScreen } from './components/OffersScreen';
import { AboutScreen } from './components/AboutScreen';
import { AdminScreen } from './components/AdminScreen';
import { User, UserRole, ViewState } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('OFFERS');
  const [users, setUsers] = useState<User[]>([]);

  const handleLogin = (name: string, email: string, role: UserRole) => {
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    
    let userToLogin: User;

    if (existingUser) {
      // Login existing
      userToLogin = existingUser;
    } else {
      // Register new
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role,
        registeredAt: new Date().toISOString()
      };
      setUsers(prev => [...prev, newUser]);
      userToLogin = newUser;
    }

    setCurrentUser(userToLogin);
    // Reset view to OFFERS after login
    setCurrentView('OFFERS');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('LOGIN');
  };

  // Guard: If not logged in, always show AuthScreen
  if (!currentUser) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'OFFERS':
        return <OffersScreen />;
      case 'ABOUT':
        return <AboutScreen />;
      case 'ADMIN':
        // Protected route
        return currentUser.role === 'ADMIN' ? <AdminScreen users={users} /> : <OffersScreen />;
      default:
        return <OffersScreen />;
    }
  };

  return (
    <div className="bg-aria-dark min-h-screen text-white font-sans selection:bg-aria-gold selection:text-aria-dark">
      <Navbar 
        currentUser={currentUser} 
        currentView={currentView}
        onNavigate={setCurrentView}
        onLogout={handleLogout}
      />
      <main>
        {renderView()}
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);