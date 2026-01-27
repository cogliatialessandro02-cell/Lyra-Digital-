export type UserRole = 'USER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  registeredAt: string;
}

export interface PackageDetail {
  title: string;
  description: string;
  included: boolean;
}

export interface TravelPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  location: string;
  description: string;
  details: PackageDetail[];
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export type ViewState = 'LOGIN' | 'OFFERS' | 'ABOUT' | 'ADMIN';
