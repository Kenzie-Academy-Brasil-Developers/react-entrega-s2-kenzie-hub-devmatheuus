import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';

import Logo from '../../assets/Logo.svg'
import Button from '../../Components/Button';
import  Input  from '../../Components/Input'
import { Container, ImageBackground, Content, AnimateContainer } from './style'
import { FiMail, FiLock} from 'react-icons/fi'


import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'
import API from '../../services/api';

const Login = ({ authenticated,setAuthenticated }) => {  
  
  const HISTORY = useHistory()

  const schema = yup.object().shape({
      email: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório'),
      
      password: yup
      .string()
      .min(6, 'Mínimo de 6 dígitos')
      .required('Campo obrigatório'),
    })
  
    const {
       register,
       handleSubmit,
       formState: { errors }
    } = useForm({resolver: yupResolver(schema) })
  
    const handleForm = ({ email, password }) =>{
      
      const USER_DATA = { email: email, password: password}

      API.post('/sessions', USER_DATA)
      
      .then(res =>{
        
        const { user, token } = res.data
  
        localStorage.setItem('@KenzieHub:token', JSON.stringify(token))      
        localStorage.setItem('@KenzieHub:user', JSON.stringify(user))
        
        setAuthenticated(true)
        toast.success('Login efetuado com sucesso!')
        
        setTimeout(() =>{
           HISTORY.push('/dashboard')
        },1100)

      })
      .catch( _ => toast.error('Ops! Algo deu errado'))
    }

  if(authenticated){
    return <Redirect to='/dashboard'/>
  }  

  return (
    <Container>
      <ImageBackground/>
      <Content>
        <AnimateContainer>
          <form onSubmit={handleSubmit(handleForm)}>
            <div div className='form-header'>
              <img src={Logo} alt="" />
            </div>
            <div className='input-group'>
              <Input
                register={register}
                icon={FiMail}
                label='Email'
                placeholder='Digite aqui seu email'
                type='email'
                name='email'
                error={errors.email?.message}
              />
              <Input
                register={register}
                icon={FiLock}
                label='Senha'
                placeholder='Digite aqui seu senha'
                type='password'
                name='password'
                error={errors.password?.message} 
              />
              <Button bgSchema='pink' type='submit'>Entrar</Button>
            </div>
          </form>
          <div className='cadastro'>
            <p>Ainda não possui uma conta?</p>
            <Link to='/signup' className='Link'>
              <Button bgSchema='gray' type='submit'>Cadastre-se</Button>
            </Link>
          </div>
        </AnimateContainer>
      </Content>
    </Container>
  )
}

export default Login;
