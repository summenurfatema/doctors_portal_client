
import { loadStripe } from '@stripe/stripe-js';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Pages/Routes/RootRoute/RootRoute';


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
