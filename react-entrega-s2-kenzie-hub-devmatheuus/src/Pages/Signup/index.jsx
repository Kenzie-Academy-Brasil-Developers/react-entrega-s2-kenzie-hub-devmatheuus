/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';

import Logo from '../../assets/Logo.svg'

import Button from '../../Components/Button';
import Select from '../../Components/Select';
import { Container, ImageBackground, Content, AnimateContainer } from './style'
import  Input  from '../../Components/Input'
import {FiUser, FiMail, FiLock, FiLinkedin, FiSmartphone, FiBookOpen} from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'
import API from '../../services/api';
import { normalizeNumber } from '../../utils/phoneMask';

const Signup = ({ authenticated }) => {

  const HISTORY = useHistory()

  const schema = yup.object().shape({
    
    name: yup
    .string()
    .required('Campo obrigatório'),
    
    email: yup
    .string()
    .email('Email inválido')
    .required('Campo obrigatório'),
    
    password: yup
    .string()
    .min(6, 'Mínimo de 6 dígitos')
    .required('Campo obrigatório'),
    
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Senhas não conferem')
    .required('Campo obrigatório'),
    
    bio: yup
    .string()
    .required('Campo obrigatório'),
    
    contact: yup
    .string()
    .required('Campo obrigatório'),
    
    course_module: yup
    .string()
    .required('Campo obrigatório'),   
  })

  const {
     watch,
     setValue,
     register,
     handleSubmit,
     formState: { errors }
  } = useForm({resolver: yupResolver(schema) })


  const PHONE_VALUE = watch('contact')

  useEffect(() =>{
    setValue('contact', normalizeNumber(PHONE_VALUE) )
  },[PHONE_VALUE])
  
  const handleForm = ({ email, password, name, bio, contact, course_module }) =>{
    const USER_DATA = {
      email: email,
      password: password,
      name: name,
      bio: bio,
      contact: contact,
      course_module: course_module,
    }

    API.post('/users', USER_DATA)
    .then( _ => {
      toast.success('Conta criada com sucesso!')

      setTimeout(() =>{
        HISTORY.push('/login')
      }, 1100)
    
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
              <Link to='/login'>
                <Button bgSchema>Login</Button>
              </Link>
            </div>
            <div className='input-group'>
              <Input
                register={register}
                icon={FiUser}
                label='Nome'
                placeholder='Digite aqui seu nome'
                type='name'
                name='name'
                error={errors.name?.message} 
              />
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
              <Input
                register={register}
                icon={FiLock}
                label='Confirme sua senha'
                placeholder='Digite novamente sua senha'
                type='password'
                name='confirmPassword' 
                error={errors.confirmPassword?.message} 
              />
              <Input
                register={register}
                icon={FiLinkedin}
                label='Seu perfil do Linkedin'
                placeholder='linkedin/in/SeuUsuario'
                type='text' 
                name='bio' 
                error={errors.bio?.message} 
              />
              <Input
                register={register}
                icon={FiSmartphone}
                label='Celular'
                placeholder='Opção de contato'
                type='tell'
                name='contact' 
                error={errors.contact?.message} 
              />
              <Select
                register={register}
                icon={FiBookOpen}
                label='Módulo'
                name='course_module'
                error={errors.course_module?.message} 
              />
              <Button bgSchema='pink' type='submit'>Cadastrar</Button>
            </div>
          </form>
        </AnimateContainer>
      </Content>
    </Container>
  )
}

export default Signup;
