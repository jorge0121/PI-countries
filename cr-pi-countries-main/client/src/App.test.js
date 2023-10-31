import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from './componentes/Landing/Landing'

describe('Rendereización del componente Home en la ruta "/"', () => {
  it('Renderiza el componente Home en la ruta "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Landing />
      </MemoryRouter>
    );

    // Verifica que el componente esté siendo renderizado en la ruta "/"
    expect(screen.getByText('Texto presente en el componente Home')).toBeInTheDocument();
    // Puedes cambiar 'Texto presente en el componente Home' por un texto que esperas encontrar en tu componente Home
  });
});