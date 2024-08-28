import React from 'react'
import'./App.css'
import { faChessPawn,faChessRook,faChessBishop,faChessKing,faChessKnight,faChessQueen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  return (
    <div className='board'>
      <table>
        <tr>
          <th className='white key' ><FontAwesomeIcon className='bk' icon={faChessRook} /></th>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessKnight} /></th>
          <th className='white key'><FontAwesomeIcon className='bk' icon={faChessBishop} /></th>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessQueen} /></th>
          <th className='white key'><FontAwesomeIcon className='bk' icon={faChessKing} /></th>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessBishop} /></th>
          <th className='white key'><FontAwesomeIcon className='bk' icon={faChessKnight} /></th>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessRook} /></th>
        </tr>
        <tr>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
          <th className='white key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
          <th className='white key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
          <th className='white key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
          <th className='key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
          <th className='white key'><FontAwesomeIcon className='bk' icon={faChessPawn} /></th>
        </tr>
        <tr>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
        </tr><tr>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
        </tr>
        <tr>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
          <th></th>
          <th className='white'></th>
        </tr><tr>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessPawn} style={{color: "#ffffff",}} /></th>
          <th className='key'><FontAwesomeIcon className='wk'icon={faChessPawn} style={{color: "#ffffff",}} /></th>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessPawn} style={{color: "#ffffff",}} /></th>
          <th className='key'><FontAwesomeIcon className='wk' icon={faChessPawn} style={{color: "#ffffff",}} /></th>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessPawn} style={{color: "#ffffff",}} /></th>
          <th className='key'><FontAwesomeIcon className='wk' icon={faChessPawn} style={{color: "#ffffff",}} /></th>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessPawn} style={{color: "#ffffff",}} /></th>
          <th className='key'><FontAwesomeIcon className='wk' icon={faChessPawn} style={{color: "#ffffff",}} /></th>
        </tr>
        <tr>
          <th className='key'><FontAwesomeIcon className='wk' icon={faChessRook} style={{color: "#ffffff",}} /></th>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessKnight} style={{color: "#ffffff",}} /></th>
          <th className='key'><FontAwesomeIcon className='wk' icon={faChessBishop} style={{color: "#ffffff",}} /></th>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessQueen} style={{color: "#ffffff",}} /></th>
          <th className='key'><FontAwesomeIcon className='wk' icon={faChessKing} style={{color: "#ffffff",}} /></th>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessBishop} style={{color: "#ffffff",}} /></th>
          <th className='key'><FontAwesomeIcon className='wk' icon={faChessKnight} style={{color: "#ffffff",}} /></th>
          <th className='white key'><FontAwesomeIcon className='wk' icon={faChessRook} style={{color: "#ffffff",}} /></th>
        </tr>

      </table>
    </div>
  )
}

export default App