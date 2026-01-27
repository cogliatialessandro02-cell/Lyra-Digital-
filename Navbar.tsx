import React from 'react';
import { Music, User as UserIcon, LogOut, LayoutDashboard } from 'lucide-react';
import { User, ViewState } from '../types';

interface NavbarProps {
  currentUser: User;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser, currentView, onNavigate, onLogout }) => {
  return (
    <nav className="bg-aria-dark/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('OFFERS')}>
            <div className="flex-shrink-0 bg-gradient-to-br from-aria-blue to-black p-2 rounded-full border border-aria-gold/50">
              <Music className="h-6 w-6 text-aria-gold" />
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-serif text-white tracking-wider">ARIA</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">by Lyra Digital</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => onNavigate('OFFERS')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'OFFERS' ? 'text-aria-gold' : 'text-gray-300 hover:text-white'
                }`}
              >
                Le Nostre Offerte
              </button>

              <button
                onClick={() => onNavigate('ABOUT')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'ABOUT' ? 'text-aria-gold' : 'text-gray-300 hover:text-white'
                }`}
              >
                Chi Siamo
              </button>

              {currentUser.role === 'ADMIN' && (
                <button
                  onClick={() => onNavigate('ADMIN')}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === 'ADMIN' ? 'text-red-400' : 'text-gray-300 hover:text-red-300'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Admin Panel
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm text-white font-medium">{currentUser.name}</span>
              <span className="text-xs text-aria-gold uppercase">{currentUser.role}</span>
            </div>
            <button
              onClick={onLogout}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
