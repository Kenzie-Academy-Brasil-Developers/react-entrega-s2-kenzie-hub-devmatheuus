import React from 'react'
import Button from '../../Components/Button/Button'
import { Container } from './style'
import Logo from '../../Assets/Logo.svg'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import  { yupResolver } from '@hookform/resolvers/yup'

// import { toast } from "react-toastify"


const Register = () => {


  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório').min(2, 'Mínimo de 2 dígitos'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(8, 'Mínimo de 8 dígitos').required('Campo obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senhas diferentes ').required('Campo obrigatório'),
    contact: yup.string().required('Campo obrigatório'),
  })

  const { register, handleSubmit, formState : { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const handleForm = data =>{
    console.log(data)
  }
  return (
    <Container>
      <div>
          <img src={Logo} alt="Logo" />
          <Button>Voltar</Button>
      </div>
      <div>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa</p>
      </div>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor='name'>Nome {!!errors && <span>{errors.name?.message}</span>}</label>
        <input
         type='text'
         name='name'
         placeholder='Digite aqui seu nome'
        {...register('name')}
        />
        
        <label htmlFor='Email'>Email {!!errors && <span> {errors.email?.message}</span>}</label>
        <input type='text' name='email' placeholder='Digite aqui seu email' {...register('email')}/>
        
        <label htmlFor='Senha'>Senha {!!errors && <span> {errors.password?.message}</span>}</label>
        <input type='text' name='password' placeholder='Digite aqui sua senha' {...register('password')}/>
        
        <label htmlFor='Senha'>Confirmar senha {!!errors && <span> {errors.confirmPassword?.message}</span>}</label>
        <input type='text' name='confirmPassword' placeholder='Digite novamente sua senha' {...register('confirmPassword')}
        />
        
        <label htmlFor='Bio'>Bio</label>
        <input type='text' name='bio' placeholder='Fale sobre você' />
        
        <label htmlFor='Contato'>Contato {!!errors && <span> {errors.contact?.message}</span>}</label>
        <input type='text' name='contact' placeholder='Opção Contato'{...register('contact')} />
        
        <label htmlFor="Modulo">Selecionar módulo</label>
        <select name="module" {...register('module')}>
          <option>Primeiro Módulo</option>
          <option>Segundo Módulo</option>
          <option>Terceiro Módulo</option>
        </select>

        <Button bgSchema='pink' type='submit'>Cadastrar</Button>
      </form>
    </Container>
  )
}

export default Register
