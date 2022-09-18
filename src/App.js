import { Box } from '@mui/material';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Box px={17} py={3}>
        <ContactList />
      </Box>
    </div>
  );
}

export default App;
