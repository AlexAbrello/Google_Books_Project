import styled from 'styled-components'

const MainElement = styled.main`
   padding: 0 10px;
`

const Container = styled.div`
   margin: 0 auto;
   max-width: 1200px;
`


export const Main = ({children}) => {
   return (
      <>
         <MainElement>
            <Container>
               {children}
            </Container>
         </MainElement>
      </>
   )
}