import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
const configurationStore = () => {
     const store = createStore(rootReducer);
     return store;
};
export default configurationStore;