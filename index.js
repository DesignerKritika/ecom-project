import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
const rootID = document.getElementById("root");
const root = createRoot(rootID);
root.render(<App />);           