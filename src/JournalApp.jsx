// Punto de entrada de la aplicación
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const JournalApp = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  )
}
