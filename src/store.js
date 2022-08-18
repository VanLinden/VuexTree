import { createStore } from "vuex";

const state = [{
  "name": "/",
  "children": [
      {
        "name": "Dir 1"
      },
      {
        "name": "Dir 1-1"
      },
      {
        "name": "File 1-1-1"
      },
      {
        "name": "File 1-2",
        "children": [
          {
            "name": "Dir 2",
            "children": [
              {
                "name": "Dir 2-1"
              },
              {
                "name": "File 2-2"
              },
              {
                "name": "File 2"
              }
            ]
          }
        ]
      }
    ]
  }];

const mutations = {
  DELETE_NODE(state, node) {
    state.filter(function() { 
      return state.name !== node.name;  
   });
   console.log('newState', state)
 }
};

const actions = {
  addNode(context, node) {
    context.commit("ADD_NODE", node);
  },
  deleteNode(context, node) {
    context.commit("DELETE_NODE", node);
  }
};

const getters = {
  getNumbers(state) {
    return state;
  }
};

export default createStore({
  state,
  mutations,
  actions,
  getters
});
