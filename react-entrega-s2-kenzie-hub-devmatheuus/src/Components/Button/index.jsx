import { Container }  from './style'

const Button = ({ children, bgSchema, ...rest }) =>{
  return(
    <Container bgSchema={bgSchema}  {...rest}>
      {children}
    </Container>
  )
}
export default Button;