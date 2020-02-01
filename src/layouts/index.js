import React from 'react'

function Layout({children}) {
  return (
    <div style={{
      background: 'gray',
      border: '5px solid purple',
      minHeight: '100vh'
    }}>{children}</div>
  )
}

export default Layout
