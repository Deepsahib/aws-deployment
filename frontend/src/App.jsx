import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('loading...');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.text())
      .then((text) => setMessage(text))
      .catch(() => setMessage('failed to load'));
  }, []);

  return <div>{message}</div>;
}
