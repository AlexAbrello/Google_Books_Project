import { Homepage } from './pages/Homepage'
import { Result } from './pages/Result'
import { Details } from './pages/Details'
import wallpaper from './assets/wallpaper.jpeg'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from './components/Layout'

const Wrapper = styled.div`
   height: 100vh;
   background: url(${wallpaper}) center no-repeat;
   background-size: cover;
   overflow-y: auto;
`

function App() {
   return (
      <Wrapper>

         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Homepage />} />
               <Route path='result' element={<Result />} />
               <Route path='result/:id' element={<Details />} />
            </Route>
         </Routes>
      </Wrapper>
   );
}

export default App;
