import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Loader, LoaderWrapper } from './Homepage'

const Title = styled.h4`
   color: white;
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

   return (
      <>
         {
            loader
               ? <LoaderWrapper>
                  <Loader />
               </LoaderWrapper>
               : <LoaderWrapper>
                  <Title>{book.title}</Title>
                  <button onClick={goBack}>Back</button>
               </LoaderWrapper>
         }
      </>
   )
}