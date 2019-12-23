import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Banking App</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '15px'
}


export default Header
