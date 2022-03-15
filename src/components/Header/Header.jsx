import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HeaderElement = styled.header`
   width: 100%;
   height: 50px;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;

`

const Title = styled(Link).attrs({
   to: '/'
})`
   font-family: 'Roboto';
   color: white;
   font-size: 30px;
   text-decoration: none;
`


export const Header = () => {
   return (
      <>
         <HeaderElement>
            <Title>
               Google Books App
            </Title>
         </HeaderElement>
      </>
   )
}