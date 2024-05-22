import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

// eslint-disable-next-line react/prop-types
function AppProvider({ children }) {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  )
}

// eslint-disable-next-line react/no-typos
AppProvider.proptypes = {
  children: PropTypes.node,
}
export default AppProvider
