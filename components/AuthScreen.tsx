import React, { useState } from 'react';
import { auth, db } from '../firebase.ts';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { UserRole } from '../types';
import { Music, CheckCircle2, Lock, AlertCircle, Key } from 'lucide-react';

interface AuthScreenProps {
  onLogin: (name: string, email: string, role: UserRole) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Riga 24: Aggiunta Password
  const [role, setRole] = useState<UserRole>('USER');
  const [adminCode, setAdminCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email || !password || (isRegistering && !name)) {
      setError('Compila tutti i campi obbligatori.');
      setLoading(false);
      return;
    }

    try {
      if (isRegistering) {
        // --- LOGICA REGISTRAZIONE ---
        if (role === 'ADMIN' && adminCode !== '3101') {
          setError('Codice Admin non valido.');
          setLoading(false);
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Salva il ruolo su Firestore
        await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          role,
          createdAt: new Date().toISOString()
        });

        onLogin(name, email, role);
      } else {
        // --- LOGICA ACCESSO ---
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // Recupera il ruolo dal database
        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          onLogin(userData.name || email, email, userData.role as UserRole);
        } else {
          onLogin(email.split('@')[0], email, 'USER');
        }
      }
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') setError('Email già registrata.');
      else if (err.code === 'auth/weak-password') setError('Password troppo debole (min 6 caratteri).');
      else if (err.code === 'auth/invalid-credential') setError('Email o Password errati.');
      else setError('Errore nel sistema. Riprova più tardi.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-aria-dark/80 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl bg-aria-dark/50 border border-white/10 m-4">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-12 bg-gradient-to-br from-aria-blue/90 to-aria-dark/90 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-aria-gold rounded-full text-aria-dark"><Music className="w-6 h-6" /></div>
                <h1 className="text-3xl font-serif font-bold tracking-wider">ARIA</h1>
              </div>
              <p className="text-aria-gold font-serif italic text-lg mb-4">"L'opera è il luogo dove si realizzano i sogni."</p>
              <p className="text-gray-300 font-light leading-relaxed">Scopri esperienze di viaggio esclusive nei teatri più prestigiosi d'Italia.</p>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-aria-gold" /><span>Accesso esclusivo ai teatri</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-aria-gold" /><span>Pernottamenti di lusso</span></div>
            </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-12 bg-white/5 backdrop-blur-md flex flex-col justify-center">
          <h2 className="text-2xl font-serif text-white mb-2">{isRegistering ? 'Crea il tuo Account' : 'Bentornato'}</h2>
          <p className="text-gray-400 text-sm mb-8">{isRegistering ? 'Iscriviti per le offerte esclusive.' : 'Accedi per gestire i tuoi viaggi.'}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 flex items-center gap-2 text-red-200 text-sm">
                <AlertCircle className="w-4 h-4" />{error}
              </div>
            )}

            {isRegistering && (
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Nome Completo</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aria-gold placeholder-gray-600" placeholder="Mario Rossi" />
              </div>
            )}
            
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aria-gold placeholder-gray-600" placeholder="mario@example.com" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aria-gold placeholder-gray-600" placeholder="••••••••" />
            </div>

            {isRegistering && (
              <div>
                 <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Tipo Profilo</label>
                 <div className="grid grid-cols-2 gap-4 mb-4">
                    <button type="button" onClick={() => { setRole('USER'); setError(null); }} className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${role === 'USER' ? 'bg-aria-gold text-aria-dark border-aria-gold' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'}`}>Turista</button>
                    <button type="button" onClick={() => setRole('ADMIN')} className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${role === 'ADMIN' ? 'bg-aria-gold text-aria-dark border-aria-gold' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'}`}>Admin</button>
                 </div>
                 {role === 'ADMIN' && (
                    <div className="animate-in fade-in slide-in-from-top-2">
                       <label className="block text-xs uppercase tracking-wider text-aria-gold mb-1 flex items-center gap-1"><Lock className="w-3 h-3" /> Codice Amministratore</label>
                       <input type="password" required value={adminCode} onChange={(e) => setAdminCode(e.target.value)} className="w-full bg-black/20 border border-aria-gold/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aria-gold" placeholder="Codice CEO" />
                    </div>
                 )}
              </div>
            )}

            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-aria-gold to-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5 mt-4 disabled:opacity-50">
              {loading ? 'Caricamento...' : (isRegistering ? 'Registrati' : 'Accedi')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={() => { setIsRegistering(!isRegistering); setError(null); setRole('USER'); setAdminCode(''); }} className="text-sm text-gray-400 hover:text-aria-gold transition-colors underline decoration-dotted">
              {isRegistering ? 'Hai già un account? Accedi' : 'Non hai un account? Registrati'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
