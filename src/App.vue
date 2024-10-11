<script>
import PostsList from "./components/PostsList.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    PostsList,
    Sidebar,
  },
  data() {
    return {
      inSidebar: '',
    };
  },
};
</script>

<template>
  <main>
    <PostsList v-model="inSidebar" />
    <Sidebar :isOpen="inSidebar !== ''">
      <!-- inputField -->
      <!-- textAreaField -->
    </Sidebar>
  </main>
</template>
