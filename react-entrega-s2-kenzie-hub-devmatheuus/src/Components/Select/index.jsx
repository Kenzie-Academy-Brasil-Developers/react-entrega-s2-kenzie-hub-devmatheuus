import React  from 'react'

import { ContainerSelect, SelectContainer } from './style'

const Select = ({ label, icon: Icon, register, name, error, ...rest}) => {
  return( 
    <ContainerSelect>
      <small>{label} {!!error && <span> - {error}</span>}</small>
      <SelectContainer>
      {Icon && <Icon/>}
      <select {...register(name)} {...rest}>
        <option>Primeiro módulo (Introdução ao Frontend)</option>
        <option>Segundo módulo (Frontend Avançado)</option>
        <option>Terceiro módulo (Introdução ao Backend)</option>
        <option>Quarto módulo (Backend Avançado)</option>
      </select>
      </SelectContainer> 
    </ContainerSelect>
  )
}
export default Select;