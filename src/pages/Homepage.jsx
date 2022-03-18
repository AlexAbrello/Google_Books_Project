import styled from 'styled-components'

const Wrapper = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
`
const Title = styled.h1`
   color: white;
`

export const Homepage = () => {

   return (
      <Wrapper>
         <Title>Welcome to Google Books App</Title>
      </Wrapper>
   )
}