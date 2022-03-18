import styled from 'styled-components'
import noImage from '../../assets/noImage.jpg'

const Wrapper = styled.div`
   width: 200px;
   height: 350px;
   margin: 30px auto 0;
   background-color: #FFFDD0;
   outline: 1px solid #818181;
   box-shadow: 5px 5px 5px rgb(0 0 0 / 80%);
   cursor: pointer;
   padding-top: 10px;

   @media (min-width: 767px) {
      margin: 30px 15px 0;
   }
`
const BookImage = styled.img`
   display: block;
   width: 60%;
   height: 30%;
   margin: 0 auto 5px;
   outline: 2px solid #818181;
   border-radius: 5px;
`
const CardBody = styled.div`
   display: flex;
   flex-direction: column;
   overflow-y: hidden;
`
const Title = styled.p`
   text-align: center;
   font-weight: 700;
   font-size: 14px;
   margin: 5px;
   color: #333333;
`
const Text = styled.p`
   font-size: 14px;
   text-align: center;
   margin: 5px;
   color: #333333;
`
const BookAuthor = styled.p``

export const Card = ({ title, authors, image }) => {
   
   const picture = image === undefined ? noImage : image.thumbnail

   const author = authors === undefined ? 'Unknow' : authors[0]

   return (
      <Wrapper>
         <BookImage src={picture} alt={title} />
         <CardBody>
            <Text>{title}</Text>
            <Title>Author</Title>
            <Text>{author}</Text>
         </CardBody>
      </Wrapper>
   )
}