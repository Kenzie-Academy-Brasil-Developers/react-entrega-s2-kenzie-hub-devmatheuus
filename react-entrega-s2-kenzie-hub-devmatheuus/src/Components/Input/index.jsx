import React  from 'react'

import { Container, InputContainer } from './style'

const Input = ({ label, icon: Icon, register, name, error, ...rest}) => {
  return( 
    <Container isErrored={!!error}>
      <small>{label} {!!error && <span> - {error}</span>}</small>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={15}/>}
        <input {...register(name)} {...rest} />
      </InputContainer> 
    </Container>
  )
}
export default Input;