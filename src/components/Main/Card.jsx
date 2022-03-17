import styled from 'styled-components'
import noImage from '../../assets/noImage.jpg'

const Wrapper = styled.div`
   width: 200px;
   height: 350px;
   margin: 30px auto 0;
   background-color: #f1f1f1;
   outline: 1px solid #818181;
   box-shadow: 5px 5px 5px rgb(0 0 0 / 80%);
   cursor: pointer;
   padding: 10px 5px;

   @media (min-width: 767px) {
      margin: 30px 15px 0;
   }
`
const BookImage = styled.img`
   display: block;
   width: 60%;
   height: 30%;
   margin: auto;
   outline: 2px solid #818181;
   border-radius: 5px;
`
const CardBody = styled.div``
const BookCategory = styled.h5``
const BookTitle = styled.h5`
   text-align: center;
`
const BookAuthor = styled.h5``

export const Card = ({ id, title, description, authors, categories, image }) => {

   const picture = image === undefined ? noImage : image.thumbnail

   return (
      <Wrapper>
         <BookImage src={picture} alt={title} />
         <CardBody>
            <BookCategory></BookCategory>
            <BookTitle>{title}</BookTitle>
            <BookAuthor></BookAuthor>
         </CardBody>
      </Wrapper>
   )
}