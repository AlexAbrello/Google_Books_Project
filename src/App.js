import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Homepage } from './pages/Homepage'
import { Details } from './pages/Details'
import wallpaper from './assets/wallpaper.jpeg'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
   height: 100vh;
   background: url(${wallpaper}) center no-repeat;
   background-size: cover;
   overflow-y: auto;
`

function App() {
   return (
      <Wrapper>
         <Header />
         <Main>
            <Routes>
               <Route exact path='/' element={<Homepage />} >
                  <Route path='details/:id' element={<Details />} />
               </Route>
            </Routes>
         </Main>
      </Wrapper>
   );
}

export default App;
