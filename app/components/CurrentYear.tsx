'use client';
import { useEffect, useState } from 'react';

export default function CurrentYear() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return currentYear;
}
