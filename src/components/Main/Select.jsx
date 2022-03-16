import Select from 'react-select'
import styled from 'styled-components'

export const CustomSelect = styled(Select).attrs({
   styles: {
      control: (provided) => ({
         ...provided,
         backgroundColor: 'white',
         borderRadius: '5px',
         height: '50px',
         border: '0',
         boxShadow: 'none'
      }),
      option: (provided, state) => ({
         ...provided,
         cursor: 'pointer',
         backgroundColor: 'white'
      })
   }
})`
   width: 45%;
   margin-top: 10px;

   & * {
      color: #333333 !important;
   }
`