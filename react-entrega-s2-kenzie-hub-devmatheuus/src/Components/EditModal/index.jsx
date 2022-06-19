/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

import { Container } from './style'
import { FiX } from 'react-icons/fi'
import Button from '../Button'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import API from '../../services/api'
import { toast } from 'react-toastify'

const EditModal = ({ setShowEditModal,  setTechs, techs, postInfos, loadTechs }) =>{
  
  const MODAL_REF = useRef()

  useEffect(() =>{
    const handleOutClick = (e) => !MODAL_REF.current?.contains(e.target) && setShowEditModal(false) 
  
    document.addEventListener('mousedown', handleOutClick)

    return () => document.removeEventListener('mousedown', handleOutClick)
  }, [])

  const schema = yup.object().shape({
    status: yup
    .string()
    .min(2, 'Mínimo de 2 caracteres')
    .required('Campo obrigatório')   
  })

  const {
    register,
    handleSubmit,
  } = useForm({resolver: yupResolver(schema) })

  const TOKEN = JSON.parse(localStorage.getItem('@KenzieHub:token'))

  const handleForm = (data) =>{

    API.put(`/users/techs/${postInfos.id}`, data, {
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    })
    .then( _ => {
      loadTechs()
      toast.success('Editado com sucesso')
    })
    .catch( _ => toast.error('Algo deu errado'))  
  }  

  const handleRemove = (e) =>{

    e.preventDefault()
    API.delete(`/users/techs/${postInfos.id}`,{
          headers:{
            Authorization: `Bearer ${TOKEN}`
          }
        })
        .then( _ => {
          toast.success('Excluído com sucesso')
          setShowEditModal(false) 
        })
        .catch( _ => toast.error('Houve um erro'))
        setTechs([...techs.filter(el => el !== postInfos)])
  }

  return(
    <Container>
      <div className="modal" ref={MODAL_REF}>
        <div className="modal-header">
          <div className='header-controls'>
            <p>Editar Tecnologia</p>
            <button onClick={() => setShowEditModal(false)}>
              <FiX size={20}/>  
            </button>
          </div>
        </div>
        <div className="modal-form">
          <form onSubmit={handleSubmit(handleForm)}>
            <label>Nome do Projeto</label>
            <input type="Text" disabled value={postInfos.title}/>
            <label>Status</label>
            <select {...register('status')}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option option>Avançado</option>
            </select>
            <div className="form-buttons">
              <Button bgSchema='pink' type='submit'>Salvar alterações</Button>
              <Button bgSchema='gray' type='submit' onClick={handleRemove}>Excluir</Button> 
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
export default EditModal;