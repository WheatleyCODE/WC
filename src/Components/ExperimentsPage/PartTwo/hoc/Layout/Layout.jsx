import React from 'react'
import s from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={s.divLayout}>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout
