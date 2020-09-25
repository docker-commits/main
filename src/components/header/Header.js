import React from 'react'
import './Header.css'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import history from '../../routes/history'
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <FolderSharedIcon onClick={() => history.push('/addmembers')} />
      </div>
      <div className="header__right">
        <button onClick={() => history.push('/viewissues')}>All Issues</button>
        <select className="headerdrpdown__style" defaultValue="open">
          <option value="open">Open Issues</option>
          <option value="close">Closed Issues</option>
        </select>
      </div>
    </div>
  )
}

export default Header
