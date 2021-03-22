import React from 'react'
import { BrowserRouter as Router,Switch,Route,NavLink, Redirect } from "react-router-dom" 
import { HashLink as Link } from 'react-router-hash-link'
import './Dropmenu.css'
function Dropmenu(props) {
  const {account, actions, handleLogout, comment, setState, state} = props
 const accountrow = account && account.map(link=>{
      return <Link  to={link.link} className='menulink flexrow' onClick={()=>setState(state)}>
        <i className={link.icon}></i>
        <p>{link.text}</p>
      </Link>
  })

  const actionsrow = actions && actions.map(link=>{
    return <Link smooth  to={link.link} className='menulink flexrow' onClick={()=>{link.text==='Logout'?handleLogout():''; setState(state)}}>
    <i className={link.icon}></i>
    <p>{link.text}</p>
  </Link>
  })
  return (
    <div className="menu box-shadow-br">
    
      <><span className='menutitle'><strong>Account</strong></span>
          {accountrow}
      <span className='menutitle'><strong>Actions</strong></span>
      {actionsrow}
      </>
    </div>
  )
}
export default Dropmenu