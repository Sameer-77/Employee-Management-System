import React, { useEffect, useState } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({ changeUser, username }) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={changeUser} username={username} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
