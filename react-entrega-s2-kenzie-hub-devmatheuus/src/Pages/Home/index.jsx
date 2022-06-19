import { Container, Content } from './style'
import { Redirect, useHistory } from 'react-router-dom'

import  Button   from '../../Components/Button/index';

const Home = ({ authenticated }) =>{

  const HISTORY = useHistory()

  const handleNavigation = path => HISTORY.push(path)

  if(authenticated){
    return <Redirect to='/dashboard'/>
  }  

  return(
    <Container>
      <Content>
        <h1>Kenzie Hub</h1>
        <span>Uma maneira fácil e rápida para você organizar seus projetos</span>
        <div>
          <Button bgSchema='pink' onClick={()=> handleNavigation('/signup')} >Cadastre-se</Button>
          <Button bgSchema='gray'onClick={()=> handleNavigation('/login')} >Entre</Button>
        </div>
      </Content>
    </Container>
  )
}
export default Home;