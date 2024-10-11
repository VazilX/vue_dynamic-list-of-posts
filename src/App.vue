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
    };
  },
};
</script>

<template>
  <main>
    <PostsList v-model="inSidebar" />
    <Sidebar :isOpen="inSidebar !== ''">
      <AddPost />
    </Sidebar>
  </main>
</template>
