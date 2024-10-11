<script>
import AddPost from "./components/AddPost.vue";
import PostsList from "./components/PostsList.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    PostsList,
    Sidebar,
    AddPost,
  },
  data() {
    return {
      inSidebar: "",
      postList: [],
    };
  },
  methods: {
    closeSidebar() {
      this.inSidebar = "";
    },
  },
};
</script>

<template>
  <main>
    <PostsList
      v-model="inSidebar"
      :postList="postList"
      @updatePostList="postList = $event"
    />
    <Sidebar :isOpen="inSidebar !== ''">
      <AddPost @close="closeSidebar" @updatePostList="postList.push($event)" />
    </Sidebar>
  </main>
</template>
