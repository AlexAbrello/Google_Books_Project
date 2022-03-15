import { Search } from "../components/Main/Search"
import { CustomSelect } from "../components/Main/Select"
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const SelectWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`
const genre = [
   { value: 'all', label: 'All' },
   { value: 'art', label: 'Art' },
   { value: 'biography', label: 'Biography' },
   { value: 'computers', label: 'Computers' },
   { value: 'history', label: 'History' },
   { value: 'medical', label: 'Medical' },
   { value: 'poetry', label: 'Poetry' }
]
const topicality = [
   { value: 'relevance', label: 'Relevance'},
   { value: 'newest', label: 'Newest'}
]

export const Homepage = () => {

   const [search, setSearch] = useState('')
   const [name, setName] = useState('')
   const [category, setCategory] = useState('all')
   const [date, setDate] = useState('relevance')

   useEffect(() => {
      if (name) {
         console.log(name)
         console.log(category)
         console.log(date)
      }
   }, [name])

   const startSearch = () => {
      setName(search)
      setSearch('')
   }

   return (
      <>
         <Search search={search} setSearch={setSearch} startSearch={startSearch} />
         <SelectWrapper>
            <CustomSelect options={genre}
               placeholder='Жанр'
               isClearable
               isSearchable={false}
               value={category}
               onChange={setCategory}
            />
            <CustomSelect options={topicality}
               placeholder='Актуальность'
               isClearable
               isSearchable={false}
               value={date}
               onChange={setDate}
            />
         </SelectWrapper>
      </>
   )
}