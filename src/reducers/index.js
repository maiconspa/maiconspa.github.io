import { themeReducer } from './themeReducer'
import {i18nState} from 'redux-i18n'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  themeState: themeReducer,
  i18nState
})