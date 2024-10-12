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
  <main>
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
      <PostDetails v-if="inSidebar === 'postDetails'" :currentPost="currentPost" />
    </Sidebar>
  </main>
</template>
