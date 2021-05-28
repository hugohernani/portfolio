import { render } from '@testing-library/react';

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui); // TODO:  render(ui, { wrapper: BrowserRouter });
};

export { renderWithRouter };
