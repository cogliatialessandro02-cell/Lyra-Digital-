import { TeamMember, TravelPackage } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Alessandro Cogliati', role: 'CEO' },
  { name: 'Carlo Alberto Lupi', role: 'Marketing' },
  { name: 'Pietro Scotti', role: 'Risorse Umane' },
  { name: 'Marco Iperboli', role: 'Dipartimento Implementazione' },
  { name: 'Nava Emanuele', role: 'Direttore Finanziario' },
];

export const PACKAGES: TravelPackage[] = [
  {
    id: '1',
    title: 'Armonia Scaligera',
    subtitle: 'Offerta Esclusiva',
    duration: '4 Giorni / 3 Notti',
    location: 'Milano',
    price: '€1.380',
    description: 'Un\'esperienza indimenticabile nel cuore di Milano, combinando il lusso con la magia del Teatro alla Scala.',
    image: 'https://picsum.photos/800/600',
    details: [
      {
        title: 'Pernottamento',
        description: '3 notti in un elegante Hotel 4 Stelle in zona centrale (vicino alla Scala) con colazione inclusa.',
        included: true
      },
      {
        title: 'Opera Lirica',
        description: '2 Biglietti di Categoria Premium (Platea o Palco Centrale) per due titoli differenti al Teatro alla Scala.',
        included: true
      },
      {
        title: 'Cultura & Storia',
        description: 'Visita Guidata Esclusiva: Tour del Teatro alla Scala e del Museo Teatrale, condotto da un esperto d\'opera.',
        included: true
      },
      {
        title: 'Gastronomia',
        description: 'Cena di Gala di Benvenuto in un ristorante selezionato, per iniziare l\'esperienza con i sapori milanesi.',
        included: true
      },
      {
        title: 'Logistica',
        description: 'Trasferimento privato A/R dall\'Aeroporto/Stazione di Milano.',
        included: true
      },
      {
        title: 'Assistenza',
        description: 'Assistenza dedicata 24/7 dal nostro referente locale.',
        included: true
      }
    ]
  },
  {
    id: '2',
    title: 'Notte Veneziana',
    subtitle: 'Magia in Laguna',
    duration: '3 Giorni / 2 Notti',
    location: 'Venezia',
    price: '€1.250',
    description: 'Scopri il Teatro La Fenice e perditi tra le calli di Venezia con un tour privato in gondola.',
    image: 'https://picsum.photos/801/601',
    details: [
      {
        title: 'Pernottamento',
        description: 'Hotel storico con vista sul Canal Grande.',
        included: true
      },
      {
        title: 'Opera Lirica',
        description: 'Poltronissima per la prima al Teatro La Fenice.',
        included: true
      }
    ]
  },
  {
    id: '3',
    title: 'Arena Sotto le Stelle',
    subtitle: 'Estate Lirica',
    duration: '3 Giorni / 2 Notti',
    location: 'Verona',
    price: '€980',
    description: 'L\'emozione unica dell\'opera all\'aperto nell\'antica Arena di Verona.',
    image: 'https://picsum.photos/802/602',
    details: [
      {
        title: 'Spettacolo',
        description: 'Posti numerati in platea per l\'Aida.',
        included: true
      },
      {
        title: 'Cena',
        description: 'Cena pre-opera in Piazza Bra.',
        included: true
      }
    ]
  }
];

export const COMPANY_USPS = [
  {
    id: '01',
    title: 'Pacchetti Specializzati',
    desc: 'Pacchetti turistici dedicati esclusivamente agli appassionati d\'opera.'
  },
  {
    id: '02',
    title: 'Soluzioni Integrate',
    desc: 'Viaggi completi per raggiungere i teatri d\'opera più prestigiosi.'
  },
  {
    id: '03',
    title: 'Itinerari Personalizzati',
    desc: 'Programmi su misura basati sui calendari degli spettacoli.'
  },
  {
    id: '04',
    title: 'Servizio Completo',
    desc: 'Assistenza end-to-end dalla prenotazione all\'esperienza finale.'
  }
];
