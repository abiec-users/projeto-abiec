import React, {useState} from 'react'
import Navbar from './Navbar/Navbar';
import Autenticacao from './Autenticacao/Autenticacao';
import './Home.css'

import { faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {

  const [openAutenticacao, setOpenAutenticacao] = useState(false)

  return (
    <div>
        <Navbar/>
        <div className='wrapper'>
          <div className='main_content'>
            <div className='header'>Bem vindo(a) ao portal de conexão Abiec - Autocontrole!</div>
            <div className='info'>
        
              <div className='box'>
                Autenticação
                <button className='btn_option' onClick={()=>setOpenAutenticacao(true)}>
                  <FontAwesomeIcon icon={faPlus}/>
                </button>

                <Autenticacao trigger={openAutenticacao} setTrigger={setOpenAutenticacao}>
                  <h3>popup</h3>
                </Autenticacao>

                
              </div>
              <div className='box'>Adesão</div>
              <div className='box'>Cancelamento</div>
              <div className='box'>Ciclo</div>
              <div className='box'>Sorteio</div>
              <div className='box'>Consulta evento</div>



          </div>

        </div>

      </div>
        

    </div>
  )
}

export default Home