import { Header } from "./Header/Header"
import { Main } from "./Main/Main"
import { Search } from "../components/Main/Search"
import { CustomSelect } from "../components/Main/Select"
import wallpaper from '../assets/wallpaper.jpeg'

import { Outlet } from "react-router-dom"
import styled from 'styled-components'
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
      left: 50%;
      transform: translateX(-50%);
      top: 50px;
      padding-top: 10px;
      background-size: cover;
      margin: 0 auto ;
   }
`
export const Loader = styled.div`
   color: #ffffff;
   font-size: 20px;
   width: 1em;
   height: 1em;
   border-radius: 50%;
   position: relative;
   top: 50%;
   left: 50%;
   text-indent: -9999em;
   -webkit-animation: load4 1.3s infinite linear;
   animation: load4 1.3s infinite linear;
   -webkit-transform: translateZ(0);
   -ms-transform: translateZ(0);
   transform: translateZ(0) translate(-50%, -50%);

   @keyframes load4 {
      0%,
      100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
      }
      12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
      }
      25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
      }
      37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
      }
      75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
      }
      87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
      }
    }
`
export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`

const genre = [
   { value: ' ', label: 'All (default)' },
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

export const Layout = () => {

   const [search, setSearch] = useState('')
   const [name, setName] = useState('')
   const [category, setCategory] = useState('')
   const [date, setDate] = useState('relevance')
   const [result, setResult] = useState(null)
   const [count, setCount] = useState(0)
   const [loader, setLoader] = useState(false)

   useEffect(() => {
      if (name) {
         setLoader(true)
         const genre = category.value || category
         const topicality = date.value || date
         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}+subject:${genre}&orderBy=${topicality}&startIndex=0&maxResults=10&key=AIzaSyAQD51IlqAMXVVt499lx7nSl1McaYFJCz8`)
            .then(res => setResult(res.data.items))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
      }
   }, [name, date, category])

   useEffect(() => {
      if (count > 0) {
         setLoader(true)
         const genre = category.value || category
         const topicality = date.value || date
         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}+subject:${genre}&orderBy=${topicality}&startIndex=${count}&maxResults=10&key=AIzaSyAQD51IlqAMXVVt499lx7nSl1McaYFJCz8`)
            .then(res => setResult([...result, ...res.data.items]))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
      }
   }, [count])

   const startSearch = () => {
      setName(search)
      setCount(0)
   }

   const loadMore = () => {
      setCount(count + 10)
   }
   return (
      <>
         <Header />
         <Main>
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
            <Outlet context={[result, loader, loadMore, name]} />
         </Main>
      </>
   )
}