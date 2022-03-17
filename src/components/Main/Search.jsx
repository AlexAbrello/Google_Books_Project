import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const InputContainer = styled.label`
   background-color: white;
   display: flex;
   align-items: center;
   border-radius: 5px;
   padding: 5px 10px;
`

const Input = styled.input.attrs({
   type: 'search',
   placeholder: 'Search'
})`
   width: 100%;
   height: 40px;
   margin-right: 10px;
   padding: 10px;
   font-size: 18px;
   border: none;
   color: #333333;
   font-weight: 100;

   :focus {
      outline: none;
   }
`
const Button = styled(Link).attrs({
   to: 'result'
})`
   width: 70px;
   background-color: transparent;
   border: none;
   outline: 1px solid grey;
   border-radius: 5px;
   text-align: center;
   color: #333333;
   cursor: pointer;

   * {
      font-size: 30px;
   }
`

export const Search = ({ search, setSearch, startSearch }) => {
   return (
      <InputContainer>
         <Input onChange={(e) => setSearch(e.currentTarget.value)} value={search} />
         <Button><BiSearchAlt onClick={startSearch} /></Button>
      </InputContainer>
   )
}