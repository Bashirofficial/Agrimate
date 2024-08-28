import React from 'react';
import { Nav } from './components'
import { Hero, Footer, AboutUs, Resource, FAQ, JoinNow } from './sections'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  SignUp from './components/SignUp';
import  LogIn  from './components/LogIn';
import { wave1, bottom } from "./assets/icons";
import HomePage from './scene/HomePage';
import  UserProfile  from './scene/UserProfile';
import  ProtectedRoute  from  './components/ProtectedRoute';
import { UserContextProvider } from './components/UserContextProvider.jsx'
 
function App() {
  

  return (
    <UserContextProvider>
      <Router>
      <main>      
        <Routes>  
          <Route path="/" element={
            <>
              <section>
                <Nav />
              </section>
              <section className='bg-gradient-to-tl from-green-100 via-cyan-50 to-green-100'>
                <section >
                  <Hero />
                </section>
                <section >
                  <img
                    src={ wave1 }
                  />
                  <div className='padding-x '>
                    <AboutUs />
                  </div>
                  <img 
                    src={ bottom }
                  />
                </section>
                <section className='padding'>
                  <Resource />
                </section>
                <section>
                  <JoinNow className='padding-y'/>
                </section>
                <section>
                  <FAQ />
                </section>
              </section>
              
              <section className='bg-black padding-x padding-t pb-8'>
                <Footer />
              </section>
            </>
          } 
        />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </Router>
    </UserContextProvider>
    
  )
}

export default App
