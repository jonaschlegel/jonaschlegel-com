'use client';
import React, { Suspense, useEffect, useState } from 'react';

function YearComponent() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return currentYear;
}

export default function CurrentYear() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <YearComponent />
    </Suspense>
  );
}
