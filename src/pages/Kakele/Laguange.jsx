import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function Language() {
  const { selectedlanguage } = useParams();
  const languages = ['en', 'pt'];
  const language = languages.includes(selectedlanguage)
    ? selectedlanguage
    : 'en';

  return <Outlet context={language} />;
}
