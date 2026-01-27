import React from 'react';
import { TEAM_MEMBERS, COMPANY_USPS } from '../constants';
import { Globe, Users, Award, ShieldCheck } from 'lucide-react';

export const AboutScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-aria-dark">
      {/* Header */}
      <div className="bg-aria-blue/10 py-20 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            L'Arte del Viaggio Lirico
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Aria by Lyra Digital nasce per colmare il divario tra turismo di lusso e passione per l'opera. 
            Creiamo connessioni emotive attraverso viaggi curati che celebrano la bellezza della musica italiana.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* USPs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {COMPANY_USPS.map((usp, index) => (
            <div key={usp.id} className="bg-white/5 p-8 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <div className="text-aria-gold font-serif text-4xl opacity-20 mb-4">{usp.id}</div>
              <h3 className="text-xl font-serif text-white mb-3">{usp.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {usp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
            <div className="flex items-center mb-12">
                <div className="h-px bg-white/20 flex-grow"></div>
                <h2 className="text-3xl font-serif text-white px-8">Il Nostro Team</h2>
                <div className="h-px bg-white/20 flex-grow"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {TEAM_MEMBERS.map((member, idx) => (
                    <div key={idx} className="group relative">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-aria-blue/30 relative">
                             {/* Placeholder avatar logic since we don't have real photos */}
                            <div className="absolute inset-0 flex items-center justify-center text-aria-gold/20">
                                <Users className="w-12 h-12" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-aria-dark to-transparent opacity-60"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-white font-medium text-lg leading-tight">{member.name}</h3>
                                <p className="text-aria-gold text-xs uppercase tracking-wider mt-1">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Values/Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
            <div className="flex flex-col items-center text-center p-6">
                <Globe className="w-10 h-10 text-aria-gold mb-4" />
                <h4 className="text-white font-serif text-lg mb-2">Presenza Nazionale</h4>
                <p className="text-gray-400 text-sm">Copertura dei principali teatri d'opera italiani da Nord a Sud.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
                <Award className="w-10 h-10 text-aria-gold mb-4" />
                <h4 className="text-white font-serif text-lg mb-2">Qualità Certificata</h4>
                <p className="text-gray-400 text-sm">Partner ufficiali delle migliori strutture ricettive.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
                <ShieldCheck className="w-10 h-10 text-aria-gold mb-4" />
                <h4 className="text-white font-serif text-lg mb-2">Garanzia Totale</h4>
                <p className="text-gray-400 text-sm">Assistenza clienti dedicata prima, durante e dopo il viaggio.</p>
            </div>
        </div>
      </div>
    </div>
  );
};