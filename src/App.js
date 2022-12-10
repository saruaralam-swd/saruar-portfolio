import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto App'>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
