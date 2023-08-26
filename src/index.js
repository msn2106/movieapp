import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

// curryied way
// const logger = function ({dispatch, getState}) {
//   return function (next) {
//     return function (action) {
//       console.log(`ACTION : ${action.type}`);
//       next(action)
//     }
//   }
// }
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log(`ACTION : ${action.type}`);
    }
    next(action);
  };

// below functionality is handled via redux-thunk thunk function
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// console.log('store', store);
// console.log('STATE', store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{name: 'Superman'}]
// })
// console.log('STATE', store.getState());


// we are using Provider from react-redux for this
// export const StoreContext = createContext();
// console.log("StoreContext:", StoreContext);

// we are using Provider from react-redux for this
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return <StoreContext.Provider value={store}>{this.props.children}</StoreContext.Provider>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// we are using Provider from react-redux for this
// export function connect (callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor (props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }

//       render() {
//         const {store} = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch}/>
//         );
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render () {
//         return(
//           <StoreContext.Consumer>
//             {(store)=> <ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         )
//       }
//     }

//     return ConnectedComponentWrapper;
//   }
// }