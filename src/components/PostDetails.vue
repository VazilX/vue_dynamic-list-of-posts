<script>
import { getPostComments } from "@/api/comments";
import Comment from "./Comment.vue";
import PostPreview from "./PostPreview.vue";
import NoCommentsYet from "./NoCommentsYet.vue";

export default {
  name: "PostDetails",
  components: {
    PostPreview,
    Comment,
    NoCommentsYet,
  },
  props: {
    currentPost: Object,
  },
  data() {
    return {
      commentsList: [],
    };
  },
  mounted() {
    this.downloadCommentsList();
  },
  updated() {
    this.downloadCommentsList();
  },
  methods: {
    downloadCommentsList() {
      getPostComments(this.currentPost.id)
        .then(({ data }) => {
          if (JSON.stringify(this.commentsList) !== JSON.stringify(data)) {
            this.commentsList = data;
            console.log(data);
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
  },
};
</script>

<template>
  <PostPreview :currentPost="currentPost" />
  <Comment
    v-if="commentsList.length !== 0"
    v-for="comment of commentsList"
    :key="comment.id"
    :comment="comment"
  />
  <NoCommentsYet v-else />
</template>

<style></style>
