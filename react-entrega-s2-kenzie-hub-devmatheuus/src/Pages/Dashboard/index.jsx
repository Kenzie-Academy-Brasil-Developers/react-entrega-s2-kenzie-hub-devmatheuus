/* eslint-disable react-hooks/exhaustive-deps */
import {  useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import Logo from '../../assets/Logo.svg'
import dash from '../../assets/dash.gif'

import  Button  from '../../Components/Button/index'
import {
 Container,
 BorderContainer,
 ControlsHeader,
 Header,
 InfoContainer,
 TechnologiesItemList,
 TechnologiesListContainer
 } from './style';
import Modal from '../../Components/Modal';
import { FiTrash2 } from 'react-icons/fi'
import EditModal from '../../Components/EditModal';
import RemoveModal from '../../Components/DeleteModal';

import API from '../../services/api';

const Dashboard = ({ setAuthenticated, authenticated }) => {

  const HISTORY = useHistory()
  
  const USER_DATAS = JSON.parse(localStorage.getItem('@KenzieHub:user'))
  
  const [ techs, setTechs ] = useState([])
  const [ showModal, setShowModal ] = useState(false)
  const [ showEditModal, setShowEditModal ] = useState(false)
  const [ showRemoveModal, setShowRemoveModal ] = useState(false)
  const [ postInfos, setPostInfos ] = useState()
  

  const loadTechs = () =>{
    API.get(`/users/${USER_DATAS.id}`).then(res => setTechs(res.data.techs))
  }

  useEffect(() =>{
    loadTechs()
  }, [])
    
  const handleNavigation = (path) =>{
    localStorage.clear()
    setAuthenticated(false)      
    return HISTORY.push(path)
  }
 
  if(!authenticated){
    return <Redirect to='/'/>
  }

return (
  <Container>
    {showModal &&
       <Modal
        setShowModal={setShowModal}
        setTechs={setTechs}
        techs={techs}
       />
    }

    {showEditModal && 
       <EditModal 
        setShowEditModal={setShowEditModal}
        setTechs={setTechs}
        techs={techs}
        postInfos={postInfos}
        loadTechs={loadTechs}
       />
    }

    {showRemoveModal &&
       <RemoveModal
        setShowRemoveModal={setShowRemoveModal}
        postInfos={postInfos}
        loadTechs={loadTechs}
        setTechs={setTechs}
        techs={techs}
       />
    }
  
    <Header>
      <img src={Logo} alt='Logo' />
      <Button onClick={() => handleNavigation('/')}>Sair</Button>
    </Header>
    <BorderContainer>
      <InfoContainer>
        <h1>Olá, {USER_DATAS?.name && USER_DATAS?.name}</h1>
        <p>{USER_DATAS?.course_module && USER_DATAS?.course_module}</p> 
      </InfoContainer>
    </BorderContainer>
    <ControlsHeader>
      <p>Tecnologias</p>
      <Button onClick={() => setShowModal(true)}>+</Button>
    </ControlsHeader>
    <TechnologiesListContainer>
      {techs.length > 0 ? ( techs.map((item =>
      (
        <TechnologiesItemList
          key={item?.id}
          postInfos={item}
          onDoubleClick={() =>{
           setShowEditModal(true)
           setPostInfos(item)
           }} 
          >
          <div className="technology" id={item?.id}>
            <p id={item?.id}>{item?.title}</p>
          </div>
            <div className='infos'>
              <p id={item?.id}>{item?.status}</p>
              <Button id={item?.id} onClick={() => {
               setShowRemoveModal(true)
               setPostInfos(item)
               }}
              > 
               {!showModal && !showEditModal && setShowRemoveModal && 
                 <FiTrash2
                  size={13}
                  id={item.id}
                  item={item}
                  style={{opacity : showRemoveModal && '0'}}
                 />
               }
              </Button>            
            </div>
          </TechnologiesItemList>
      )))
      ) 
      : 
      (
        <div className='list-null'>
          <h2 style={{textAlign: 'center'}}>Adicione novas tecnologias!</h2>
          <img src={dash} alt="dash" />
        </div>
      )
    } 
    </TechnologiesListContainer>
  </Container>
  )
}

export default Dashboard;
