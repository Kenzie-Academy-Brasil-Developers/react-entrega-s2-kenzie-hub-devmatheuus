/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

import { Container } from './style'
import Button from '../Button'

import API from '../../services/api'
import { toast } from 'react-toastify'

const RemoveModal = ({ setShowRemoveModal,  postInfos, setTechs, techs }) =>{
  
  const MODAL_REF = useRef()

  useEffect(() =>{
    const handleOutClick = (e) => !MODAL_REF.current?.contains(e.target) && setShowRemoveModal(false) 
  
    document.addEventListener('mousedown', handleOutClick)

    return () => document.removeEventListener('mousedown', handleOutClick)
  }, [])

  const TOKEN = JSON.parse(localStorage.getItem('@KenzieHub:token'))

 const handleRemove = (e) =>{

    e.preventDefault()
    API.delete(`/users/techs/${postInfos.id}`,{
          headers:{
            Authorization: `Bearer ${TOKEN}`
          }
        })
        .then( _ => {
          toast.success('Excluído com sucesso')
          setShowRemoveModal(false) 
        })
        .catch( _ => toast.error('Houve um erro'))
        setTechs([...techs.filter(el => el !== postInfos)])
  }

  return(
    <Container>
      
      <div className="modal" ref={MODAL_REF}>
        <div className="modal-header">
          <div className='header-controls'>
            <p>Deseja remover a tecnologia?</p>
          </div>
      </div>
      <div className="form-buttons">
        <Button bgSchema='gray' type='submit' onClick={() => setShowRemoveModal(false)}>Cancelar</Button> 
        <Button bgSchema='pink' type='submit' onClick={handleRemove}>Excluir</Button>
      </div>    
      </div>
    </Container>
  )
}

export default RemoveModal;