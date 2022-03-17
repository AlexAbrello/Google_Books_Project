import styled from 'styled-components'
import wallpaper from '../../assets/wallpaper.jpeg'
import {Link} from 'react-router-dom'


const HeaderElement = styled.header`
   width: 100%;
   height: 50px;
   background: url(${wallpaper}) center;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;

   @media (min-width: 767px) {
      position: static;
      background-size: contain;
   }
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