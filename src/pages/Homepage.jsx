import { Search } from "../components/Main/Search"
import { CustomSelect } from "../components/Main/Select"
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const SelectWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`
const genre = [
   { value: 'all', label: 'All (default)' },
   { value: 'art', label: 'Art' },
   { value: 'biography', label: 'Biography' },
   { value: 'computers', label: 'Computers' },
   { value: 'history', label: 'History' },
   { value: 'medical', label: 'Medical' },
   { value: 'poetry', label: 'Poetry' }
]
const topicality = [
   { value: 'relevance', label: 'Relevance (default)'},
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
         const a = category.value || category
         console.log(a)
         console.log(date.value || date)
      }
   }, [name, date, category])

   const startSearch = () => {
      setName(search)
   }

   return (
      <>
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
      </>
   )
}