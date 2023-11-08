import { combineReducers, configureStore, Middleware, PreloadedState } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { createLogger } from "redux-logger";
import authReducer from "./slice/authSlice";
import sidebarReducer from "./slice/sidebarSlice";


const development: boolean = process.env.NODE_ENV === "development";
const middleware: Middleware[] = [];

if (development) {
  // const logger = createLogger({
  //   collapsed: (getState, action, logEntry) => !logEntry?.error,
  // });
  // middleware.push(logger);
}

export const allReducers = {
  auth: authReducer,
  sidebarSlice: sidebarReducer,
}

export const rootReducer = combineReducers(allReducers)

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   ...middleware,
  // ],
  // devTools: development,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export type AppSelector = typeof store.getState
export type AppStore = ReturnType<typeof setupStore>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
