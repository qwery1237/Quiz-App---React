import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Result() {
  const score = localStorage.score;
  return <div>{score}</div>;
}
