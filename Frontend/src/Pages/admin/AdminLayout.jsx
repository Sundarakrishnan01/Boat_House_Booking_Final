import React from 'react'
import propTypes from 'prop-types';
import Sidebar from './AdminSidebar';
import Grid from '@mui/material/Grid';
import Admin from './Admin'
const AdminLayout =({children})=> {
    return (
        <div>
            <header>
                <Admin/>
            </header>
            <main style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {children}
            </main>
            <footer style={{width: '100%'}}>

            </footer>
        </div>
    )
}

AdminLayout.prototype = {
    children : propTypes.node.isRequired
}

export default AdminLayout
