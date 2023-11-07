import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Result() {
  const {
    state: { score },
  } = useLocation();
  return <div>{score}</div>;
}
