<script>
import { createPosts } from "./api/post";
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
    return {};
  },
  computed: {
    inSidebar() {
      return this.$store.state.inSidebar;
    },
  },
  watch: {
    inSidebar() {
      if (this.inSidebar === "" || this.inSidebar === "creatingPost") {
        this.$store.commit("setCurrentPost", null);
      }
    },
  },
  methods: {
    closeSidebar() {
      this.$store.commit("setInSidebar", "");
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
        <PostsList />

        <Sidebar :isOpen="inSidebar !== ''">
          <AddPost
            v-if="inSidebar === 'creatingPost' || inSidebar === 'updatingPost'"
            :title="
              inSidebar === 'creatingPost' ? 'Create new post' : 'Post editing'
            "
          />

          <PostDetails v-if="inSidebar === 'postDetails'" />
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
