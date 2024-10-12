<script>
import PostPreview from "./PostPreview.vue";

export default {
  name: "PostDetails",
  components: {
    PostPreview,
  },
  props: {
    currentPost: Object,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <PostPreview :currentPost="currentPost" />
</template>

<style></style>
