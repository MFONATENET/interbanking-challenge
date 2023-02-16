import { expect, it, jest } from '@jest/globals';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { StrictMode } from 'react';

import { Home } from '../pages/home/Home';
const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  });

it('Gallery Test', async () => {
  const { findByText } = render(
    <StrictMode>
      <Home />
    </StrictMode>
  );
  
  // valor de entrada por defecto
  await findByText('No cards found, please create one.');
});
  
it('Card Test', async () => {
  
  const { findByText } = render(
    <StrictMode>
      <Home />
    </StrictMode>
  );
  //abro modal.
  const addCardBtn = screen.getByTestId("add-card");
  act(() => {
    addCardBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  // hago el submit y espero que se llene una card con valores por defecto.
  const submitCardBtn = screen.getByTestId("submit-card");
  act(() => {
    submitCardBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  
  //Busco los datos de la tarjeta despues de un rato que renderiza
  sleep(3000).then(async () => {
    const createdCard = screen.getByTestId("card0");
    expect(createdCard).toBeDefined();
    await findByText('No title');
    await findByText('No subtitle');
    await findByText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  })
 });