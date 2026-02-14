import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeaturePoint {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface AuditFormData {
  companyName: string;
  email: string;
  currentVelocity: 'low' | 'medium' | 'high';
  notes: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}