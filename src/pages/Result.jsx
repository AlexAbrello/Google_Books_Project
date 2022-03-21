import { Loader, LoaderWrapper } from '../components/Layout'
import { List } from '../components/Main/List'
import { Card } from '../components/Main/Card'

import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
   padding: 10px;
   margin-bottom: 10px;
   position: relative;
   left: 50%;
   transform: translateX(-50%);
   cursor: pointer;

   @media (min-width: 767px) {
      margin: 10px 0;
   }
`
const LinkCard = styled(Link)`
   text-decoration: none;
`

export const Result = () => {

   const [result, loader, loadMore, name] = useOutletContext()

   return (
      <>
         <List>
            {
               loader &&
               <LoaderWrapper>
                  <Loader />
               </LoaderWrapper>
            }
            {
               result &&
               result.map(book => {
                     const bookInfo = {
                        id: book.id,
                        title: book.volumeInfo.title,
                        description: book.volumeInfo.description,
                        authors: book.volumeInfo.authors,
                        categories: book.volumeInfo.categories,
                        image: book.volumeInfo.imageLinks
                     }
                     return (
                        <LinkCard key={Math.random()} to={`/result/${book.id}`}>
                           <Card key={Math.random()} {...bookInfo} />
                        </LinkCard>
                     )
               })
            }
         </List>
         {result && <Button onClick={loadMore}>LOAD MORE</Button>}
      </>
   )
}