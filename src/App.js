import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from './apiClient/userApi';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { userStore } from './store';

function App() {
  const isLoggedIn = userStore.useState(s => s.isLoggedIn);
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!!token) {
      userStore.update(s => {
        s.isLoggedIn = true
        s.token = token
      })
      getUser().then(res => {
        userStore.update(s => {
          s.user = res
        })
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [])


  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<h1>hh</h1>} />
        <Route path="/" element={<h1>h</h1>} /> */}
        {
          !isLoggedIn ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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
