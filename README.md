# vitejs-vite-nu2fdy

## Playing with CSS font-size

```js
h1 {
  font-size: 1rem; // 32px browser default
}

p {
  font-size: 1rem; // 16px browser default
}

a {
  font-size: .875em; // 16px x .875 = 12 will inherit p font-size and reduce .875 from p. Unless it uses rem instead
}
```

## React Router v6.6

### main.jsx

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-nu2fdy)
