import { createRoot } from 'react-dom/client'

import './styles/index.css';
import './styles/reset.css';
import './styles/normalize.css';
import './styles/variables.css';


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />);