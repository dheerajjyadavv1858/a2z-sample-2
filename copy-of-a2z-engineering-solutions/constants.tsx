
import React from 'react';
import { Project, Service } from './types';

export const COLORS = {
  background: '#F9F8F6', // Warm Alabaster
  primary: '#1A2B3C',    // Blueprint Navy
  text: '#1A1A1A',       // Onyx
  accent: '#D4AF37',     // Subtle Gold/Warmth
  muted: '#6B7280'       // Slate Gray
};

export const CONTACT_INFO = {
  phone: '+91 94544 52770',
  email: 'info@a2zengineering.com',
  location: 'Lucknow, Uttar Pradesh, India'
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Linear Residence',
    category: 'Interior',
    location: 'Lucknow, UP',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '2',
    title: 'Gomti Nagar Corporate',
    category: 'Exterior',
    location: 'Vibhuti Khand',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '3',
    title: 'The Monolith Villa',
    category: 'Construction',
    location: 'Lucknow Heights',
    imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '4',
    title: 'Urban Loft Concept',
    category: 'Interior',
    location: 'Hazratganj',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600'
  }
];

export interface ExtendedService extends Service {
  imageUrl: string;
}

export const SERVICES: ExtendedService[] = [
  {
    title: 'Exterior',
    description: 'Defining the dialogue between form and sky.',
    icon: null,
    imageUrl: 'https://images.unsplash.com/photo-1449156003053-930cce580d3e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Interior',
    description: 'Refining the textures of daily existence.',
    icon: null,
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Construction',
    description: 'Precision in the act of building.',
    icon: null,
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Estimators',
    description: 'Rigorous clarity in project economics.',
    icon: null,
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200'
  }
];
