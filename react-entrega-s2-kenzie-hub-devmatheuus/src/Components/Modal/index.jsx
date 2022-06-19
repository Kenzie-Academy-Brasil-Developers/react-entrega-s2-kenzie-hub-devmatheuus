/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

import { Container } from './style'
import Button from '../Button'
import { FiX } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'
import API from '../../services/api'

const Modal = ({ setShowModal,  setTechs, techs }) =>{
  
  const MODAL_REF = useRef()

  useEffect(() =>{
    
    const handleOutClick = (e) => !MODAL_REF.current?.contains(e.target) && setShowModal(false) 
  
    document.addEventListener('mousedown', handleOutClick)

    return () => document.removeEventListener('mousedown', handleOutClick)
  }, [])


  const schema = yup.object().shape({
      
    title: yup
    .string()
    .min(2, 'Mínimo de 2 caracteres')
    .max(10, 'Máximo de 10 caracteres')
    .required('Campo obrigatório'),
    
  })

  const {
     register,
     handleSubmit,
     formState: { errors }
  } = useForm({resolver: yupResolver(schema) })

  const TOKEN = JSON.parse(localStorage.getItem('@KenzieHub:token'))
    
  const handleForm = (data) =>{
    API.post('/users/techs', data, {
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    })
    .then(res => {
      toast.success('Tecnologia adicionada')
      setTimeout(() =>{
        setTechs([...techs,res.data])
      }, 2000)
    })
    .catch( _ => toast.error('Algo deu errado'))  
  }  

  return(
    <Container>
      <div className="modal" ref={MODAL_REF}>
        <div className="modal-header">
          <div className='header-controls'>
            <p>Cadastrar Tecnologia</p>
            <button onClick={() => setShowModal(false)}>
              <FiX size={20}/>  
            </button>
          </div>
        </div>
        <div className="modal-form"> 
          <form onSubmit={handleSubmit(handleForm)}>  
            <label>Nome {errors.technology?.message && <span>- {errors.title?.message}</span>} </label>
            <input
              type='text'
              placeholder='Tecnologia'
              {...register('title')}
              maxLength='10'
            />
            <label>Selecionar status</label>
            <select {...register('status')}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <Button bgSchema='pink' type='submit'>Cadastrar Tecnologia</Button>
          </form>
        </div>
      </div>
    </Container>
  )
}
export default Modal;