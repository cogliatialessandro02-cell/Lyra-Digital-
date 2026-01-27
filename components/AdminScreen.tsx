import React from 'react';
import { User } from '../types';
import { Shield, Mail, Calendar, Search } from 'lucide-react';

interface AdminScreenProps {
  users: User[];
}

export const AdminScreen: React.FC<AdminScreenProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-aria-dark p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
            <div>
                <h1 className="text-3xl font-serif text-white mb-2">Pannello Amministratore</h1>
                <p className="text-gray-400">Gestione iscritti alla piattaforma</p>
            </div>
            <div className="bg-aria-blue/30 px-4 py-2 rounded-lg border border-aria-gold/20 flex items-center gap-3">
                <div className="text-3xl font-bold text-aria-gold">{users.length}</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Utenti<br/>Registrati</div>
            </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Utente</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Ruolo</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Data Iscrizione</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium text-white group-hover:text-aria-gold transition-colors">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Mail className="w-3 h-3 text-gray-500" />
                        {user.email}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        user.role === 'ADMIN' 
                          ? 'bg-red-900/30 text-red-200 border-red-800/50' 
                          : 'bg-green-900/30 text-green-200 border-green-800/50'
                      }`}>
                        {user.role === 'ADMIN' && <Shield className="w-3 h-3 mr-1" />}
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-3 h-3 text-gray-600" />
                        {new Date(user.registeredAt).toLocaleDateString('it-IT')}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {users.length === 0 && (
             <div className="p-12 text-center text-gray-500">
                 Nessun utente registrato.
             </div>
          )}
        </div>
      </div>
    </div>
  );
};