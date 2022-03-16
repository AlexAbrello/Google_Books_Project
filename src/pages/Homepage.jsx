import { Search } from "../components/Main/Search"
import { CustomSelect } from "../components/Main/Select"
import { List } from '../components/Main/List'
import { Card } from '../components/Main/Card'
import wallpaper from '../assets/wallpaper.jpeg'


import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SelectWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`
const ControlWrapper = styled.div`
   width: 95%;
   background: url(${wallpaper}) center;
   position: absolute;
   margin: 50px auto 0;

   @media (min-width: 767px) {
      position: static;
      width: 100%;
      margin: 10px auto 0;
   }
`
const genre = [
   { value: '', label: 'All (default)' },
   { value: 'art', label: 'Art' },
   { value: 'biography', label: 'Biography' },
   { value: 'computers', label: 'Computers' },
   { value: 'history', label: 'History' },
   { value: 'medical', label: 'Medical' },
   { value: 'poetry', label: 'Poetry' }
]
const topicality = [
   { value: 'relevance', label: 'Relevance (default)' },
   { value: 'newest', label: 'Newest' }
]

export const Homepage = () => {

   const [search, setSearch] = useState('')
   const [name, setName] = useState('')
   const [category, setCategory] = useState('')
   const [date, setDate] = useState('relevance')
   const [result, setResult] = useState([])

   useEffect(() => {
      if (name) {
         const genre = category.value || category
         const topicality = date.value || date
         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}+subject:${genre}&orderBy=${topicality}&maxResults=3&key=AIzaSyAQD51IlqAMXVVt499lx7nSl1McaYFJCz8`)
            .then(res => setResult(res.data.items))
      }
   }, [name, date, category])

   const startSearch = () => {
      setName(search)
   }

   console.log(result)

   return (
      <>
         <ControlWrapper>
            <Search search={search} setSearch={setSearch} startSearch={startSearch} />
            <SelectWrapper>
               <CustomSelect options={genre}
                  placeholder='Genre'
                  isSearchable={false}
                  value={category}
                  onChange={setCategory}
               />
               <CustomSelect options={topicality}
                  placeholder='Topicality'
                  isSearchable={false}
                  value={date}
                  onChange={setDate}
               />
            </SelectWrapper>
         </ControlWrapper>
         <List>
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
                     <Link key={book.id} to={`/details/${book.id}`}>
                        <Card key={book.id} {...bookInfo} />
                     </Link>
                  )
               })
            }
         </List>
      </>
   )
}