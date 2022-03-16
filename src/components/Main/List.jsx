import styled from 'styled-components'

const Wrapper = styled.div`
   padding: 140px 0 10px;
   display: flex;
   flex-direction: column;

   @media (min-width: 767px) {
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