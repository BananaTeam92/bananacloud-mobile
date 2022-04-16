import { combineReducers } from 'redux'

import user from './user'
import theme from './theme'
import langage from './langage'
import album from './album'

export default combineReducers({ user, theme, langage, album })
