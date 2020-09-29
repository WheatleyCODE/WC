import React from 'react'
import HookUseState from './Hook_useState/Hook_useState'
import HookUseEffect from './Hook_useEffect/Hook_useEffect'
import HookUseRef from './Hook_useRef/Hook_useRef'
import HookUseMemo from './Hook_useMemo/Hook_useMemo'
import HookUseCallback from './Hook_useCallback/Hook_useCallback'
import HookUseContext from './Hook_useContext/Hook_useContext'
import HookUseReducer from './Hook_useReducer/Hook_useReducer'
import HookUseMyHook from './Hook_useMyHook/Hook_useMyHook'

function Hook_Learn() {
  return (
    <div>
      <HookUseState />
      <HookUseEffect />
      <HookUseRef />
      <HookUseMemo />
      <HookUseCallback />
      <HookUseContext />
      <HookUseReducer />
      <HookUseMyHook />
    </div>
  )
}

export default Hook_Learn
