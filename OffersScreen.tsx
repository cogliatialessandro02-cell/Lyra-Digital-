import React from 'react';
import { PACKAGES } from '../constants';
import { Clock, MapPin, Check, Star, ArrowRight } from 'lucide-react';

export const OffersScreen: React.FC = () => {
  const featuredPackage = PACKAGES[0];
  const otherPackages = PACKAGES.slice(1);

  return (
    <div className="min-h-screen bg-aria-dark pb-20">
      {/* Hero Section - Featured Package */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url('${featuredPackage.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-aria-dark via-aria-dark/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <div className="inline-block bg-aria-gold text-aria-dark px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-4">
            {featuredPackage.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
            {featuredPackage.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-200 mb-8 font-light">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-aria-gold" />
              <span>{featuredPackage.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-aria-gold" />
              <span>{featuredPackage.location}</span>
            </div>
            <div className="text-2xl font-serif text-aria-gold">
              {featuredPackage.price} <span className="text-sm text-white/60 font-sans">/ persona</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10">
            <div>
              <h3 className="text-xl font-serif mb-4 text-white">L'Esperienza Include</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {featuredPackage.description}
              </p>
              <button className="bg-aria-gold text-aria-dark px-8 py-3 rounded hover:bg-white transition-colors font-bold uppercase tracking-wider text-sm">
                Prenota Ora
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {featuredPackage.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-white/10 p-1 rounded-full">
                    <Check className="w-3 h-3 text-aria-gold" />
                  </div>
                  <div>
                    <span className="text-white font-medium block text-sm">{detail.title}</span>
                    <span className="text-gray-400 text-xs">{detail.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">
          Altre Destinazioni Esclusive
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPackages.map((pkg) => (
            <div key={pkg.id} className="group bg-aria-blue/20 border border-white/5 rounded-xl overflow-hidden hover:border-aria-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-aria-gold/10">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-xl font-serif text-white">{pkg.title}</h3>
                  <div className="bg-aria-gold text-aria-dark text-xs font-bold px-2 py-1 rounded">
                    {pkg.location}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>
                <div className="space-y-3 mb-6">
                  {pkg.details.slice(0, 2).map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <Star className="w-3 h-3 text-aria-gold" />
                      <span>{detail.description}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xl font-serif text-white">{pkg.price}</span>
                  <button className="flex items-center text-aria-gold text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                    Dettagli <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};