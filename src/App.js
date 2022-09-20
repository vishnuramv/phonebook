import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import Login from './pages/Login';
import { userStore } from './store';

function App() {
  const isLoggedIn = userStore.useState(s => s.isLoggedIn);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<h1>hh</h1>} />
        <Route path="/" element={<h1>h</h1>} /> */}
        {
          !isLoggedIn ? (
            <>
              <Route path="/" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="/" element={
                <>
                  <Header />
                  <Box px={17} py={3}>
                    <ContactList />
                  </Box>
                </>
              } />
            </>
          )
        }
      </Routes>
    </div>
  );
}

export default App;
