import { createApp } from "vue";
import App from "./App.vue";

import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      inSidebar: "",
      postList: [],
      currentPost: null,
    };
  },

  mutations: {
    addPostList(state, posts) {
      if (Array.isArray(posts)) {
        state.postList = [...state.postList, ...posts];
      } else {
        state.postList.push(posts);
      }
    },

    setInSidebar(state, newStatus) {
      state.inSidebar = newStatus;
    },

    setCurrentPost(state, newPost) {
      state.currentPost = newPost;
    },
  },
});

createApp(App).use(store).mount("#app");
