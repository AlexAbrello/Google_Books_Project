import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Loader, LoaderWrapper } from '../components/Layout'
import noImage from '../assets/noImage.jpg'
import wallpaper from '../assets/wallpaper.jpeg'


const Text = styled.h4`
   color: white;
`
const TextDescription = styled.p`
   color: white;
`
const Img = styled.img`
   float: left;
   margin: 10px 10px 0 0;
`
const Wrapper = styled.div`
   padding: 155px 0 60px;
`
const TitleWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
`
const ButtonWrapper = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: space-around;
   padding: 0 10px;
   align-items: center;
   position: fixed;
   bottom: 0;
   left: 0;
   background: url(${wallpaper}) center;
   background-size: contain;

   @media (min-width: 1024px) {
      border-top: 3px solid #000;
   }
`
const BackButton = styled.button`
   padding: 5px 15px;
   cursor: pointer;
`

export const Details = () => {

   const { id } = useParams()

   const [book, setBook] = useState({})
   const [loader, setLoader] = useState(false)

   const navigate = useNavigate()
   const goBack = () => navigate(-1)

   useEffect(() => {
      setLoader(true)
      axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
         .then(res => setBook(res.data.volumeInfo))
         .finally(() => setLoader(false))
   }, [])

   const picture = book.imageLinks === undefined ? noImage : book.imageLinks.thumbnail
   const author = book.authors === undefined ? 'Unknow' : book.authors[0]

   return (
      <>
         {
            loader &&
            <LoaderWrapper>
               <Loader />
            </LoaderWrapper>
         }
         {
            book &&
            <>
               <Wrapper>
                  <TitleWrapper>
                     <Text>{book.title}</Text>
                     <Text>Author: {author}</Text>
                  </TitleWrapper>
                  <TextDescription><Img src={picture} alt={book.title} />{book.description}</TextDescription>
               </Wrapper>
               <ButtonWrapper>
                  <BackButton onClick={goBack}>Back</BackButton>
                  <BackButton>Buy to..</BackButton>
               </ButtonWrapper>
            </>
         }
      </>
   )
}