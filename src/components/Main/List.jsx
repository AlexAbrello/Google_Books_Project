import styled from 'styled-components'

const Wrapper = styled.div`
   padding: 140px 0 10px;
   display: flex;
   flex-direction: column;

   @media (min-width: 767px) {
      width: 100%;
      height: 100%;
      padding: 0;
      flex-direction: row;
      flex-wrap: wrap;
   }
`

export const List = ({ children }) => {
   return (
      <Wrapper>{children}</Wrapper>
   )
}