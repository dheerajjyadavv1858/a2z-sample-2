import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  location: string;
}

export interface Service {
  title: string;
  description: string;
  // Added React import to satisfy React.ReactNode type requirement
  icon: React.ReactNode;
}
