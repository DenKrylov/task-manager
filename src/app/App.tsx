import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from 'app/router';
import { store } from 'app/store';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
