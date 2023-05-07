import React from 'react'
import NavbarAdmin from './NavbarAdmin';
import ShowData from './ShowData';
import AdminToolsBar from './AdminToolsBar';
const Admin = () => {
    return (
    <div>
      <NavbarAdmin />
      <AdminToolsBar/>
      <ShowData />
    </div>
  )
}

export default Admin
