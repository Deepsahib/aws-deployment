import { useEffect, useState } from 'react';
import { BASE_URL } from './constant';

export default function App() {
  const [message, setMessage] = useState('loading...');

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.text())
      .then((text) => setMessage(text))
      .catch(() => setMessage('failed to load'));
  }, []);

  return <div>{message}</div>;
}
