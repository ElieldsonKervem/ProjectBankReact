import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss';
import { createServer, Model } from 'miragejs'; // Importe o Model do miragejs


createServer({
  models: {
    transaction: Model, // Use o nome do modelo no singular
  },

  seeds(server) {
    server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelancer de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id: 2,
            title: 'Internet payment',
            type: 'draw',
            category: 'Home',
            amount: 100,
            createdAt: new Date('2021-03-12 11:00:00')
          },
        ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction'); // Consistência no uso do modelo singular
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data); // Consistência no uso do modelo singular
    });
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
