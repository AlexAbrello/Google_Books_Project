import styled from 'styled-components'

const MainElement = styled.main`
   padding: 60px 10px 0;
`

const Container = styled.div`
   margin: 0 auto;
   max-width: 1200px;
   /* border: 1px solid white; */
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