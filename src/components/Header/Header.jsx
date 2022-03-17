import styled from 'styled-components'
import wallpaper from '../../assets/wallpaper.jpeg'


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
const Title = styled.h1`
   font-family: 'Roboto';
   color: white;
   font-size: 30px;
   font-weight: 100;
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