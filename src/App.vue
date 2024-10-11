<script>
import InputField from "./components/InputField.vue";
import PostsList from "./components/PostsList.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    PostsList,
    Sidebar,
    InputField,
  },
  data() {
    return {
      inSidebar: "",
      newPostTitle: "",
      isTitleHasErr: false,
    };
  },
  watch: {
    newPostTitle() {
      console.log(this.newPostTitle);
    },
  },
};
</script>

<template>
  <main>
    <PostsList v-model="inSidebar" />
    <Sidebar :isOpen="inSidebar !== ''">
      <InputField
        name="title"
        placeholder="Post title"
        v-model="newPostTitle"
        errorMessage="Title is required"
        :hasError="isTitleHasErr"
      />
      <!-- textAreaField -->
    </Sidebar>
  </main>
</template>
