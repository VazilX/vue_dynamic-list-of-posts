<script>
import AddPost from "./components/AddPost.vue";
import PostDetails from "./components/PostDetails.vue";
import PostsList from "./components/PostsList.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    PostsList,
    Sidebar,
    AddPost,
    PostDetails,
  },
  data() {
    return {
      inSidebar: "",
      postList: [],
      currentPost: null,
    };
  },
  methods: {
    closeSidebar() {
      this.inSidebar = "";
    },

    clickCurrentPost(event) {
      this.currentPost = event;

      if (event) {
        this.inSidebar = "postDetails";
      } else {
        this.inSidebar = "";
      }
    },
  },
};
</script>

<template>
  <main class="section">
    <div class="container">
      <div class="tile is-ancestor custom-container">
        <PostsList
          v-model="inSidebar"
          :postList="postList"
          :currentPost="currentPost"
          @updatePostList="postList = $event"
          @clickCurrentPost="clickCurrentPost"
        />
        <Sidebar :isOpen="inSidebar !== ''">
          <AddPost
            v-if="inSidebar === 'creatingPost'"
            @close="closeSidebar"
            @updatePostList="postList.push($event)"
          />
          <PostDetails
            v-if="inSidebar === 'postDetails'"
            :currentPost="currentPost"
          />
        </Sidebar>
      </div>
    </div>
  </main>
</template>

<style>
.tile {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}


@media (min-width: 769px) {
  .tile:not(.is-child) {
    display: flex;
    align-items: stretch;
    flex-grow: 1;
  }
}
</style>
