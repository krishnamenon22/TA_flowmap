import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserObject = {
  id?: number
  name?: string
  email?: string
  picture?: string
  last_login?: string
  date_joined?: string
  role?: "analyst" | "manager"
}

export type GroupObject = {
  id: string;
  displayName: string;
}

export type LoginAPIResponse = {
  user_info: UserObject
  token: string
  groups: Array<GroupObject>
}

export type InitialState = {
  isAuthenticated: boolean
  userInfo: UserObject
  outletLoading: boolean
}

const initialUserInfo: UserObject = {
  id: 0,
  name: '',
  email: '',
  picture: '',
  last_login: '',
  date_joined: '',
}

const initialState: InitialState = {
  isAuthenticated: true,
  userInfo: initialUserInfo,
  outletLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state: InitialState, action: PayloadAction<LoginAPIResponse>) {
      state.isAuthenticated = true
      state.userInfo = action.payload.user_info
    },
    logoutUser(state: InitialState) {
      localStorage.clear()
      localStorage.setItem('redirectPathBS', '/')
      state.isAuthenticated = false
      state.userInfo = initialUserInfo
    },
    setOutletLoading(state, action: PayloadAction<boolean>) {
      state.outletLoading = action.payload;
    },
  },
})

export const { loginUser, logoutUser, setOutletLoading } = authSlice.actions

export default authSlice.reducer
