import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Loader, LoaderWrapper } from './Homepage'

const Title = styled.h4`
   margin-top: 100px;
   color: white;
`

export const Details = () => {

   const { id } = useParams()

   const [book, setBook] = useState({})
   const [loader, setLoader] = useState(false)

   useEffect(() => {
      setLoader(true)
      axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
         .then(res => setBook(res.data.volumeInfo))
         .finally(() => setLoader(false))
   }, [])

   return (
      <>
         {
            loader &&
            <LoaderWrapper>
               <Loader />
            </LoaderWrapper>
         }
         <Title>{book.title}</Title>
      </>
   )
}