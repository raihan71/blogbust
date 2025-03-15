import { root } from '@lynx-js/react';
import { MemoryRouter } from 'react-router';
import './global.css';
import App from './App.tsx';

root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
