<script>
import { deleteComment, getPostComments } from "@/api/comments";
import Comment from "./Comment.vue";
import PostPreview from "./PostPreview.vue";
import NoCommentsYet from "./NoCommentsYet.vue";
import Loader from "./Loader.vue";

export default {
  name: "PostDetails",
  components: {
    PostPreview,
    Comment,
    NoCommentsYet,
    Loader,
  },
  props: {
    currentPost: Object,
  },
  data() {
    return {
      commentsList: [],
      isCommentsLoading: false,
    };
  },
  watch: {
    currentPost: {
      immediate: true,
      deep: true,
      handler() {
        this.downloadCommentsList();
      },
    }
  },
  methods: {
    downloadCommentsList() {
      this.isCommentsLoading = true;

      getPostComments(this.currentPost.id)
        .then(({ data }) => {
          this.commentsList = data;
          console.log(data);
        })
        .catch(() => {})
        .finally(() => {
          this.isCommentsLoading = false;
        });
    },

    removeComment(commentId) {
      deleteComment(commentId)
        .then(({ data }) => {
          if (data === 1) {
            const index = this.commentsList.findIndex(
              (comment) => comment.id === commentId
            );
            this.commentsList.splice(index, 1);
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
  <Loader v-if="isCommentsLoading" />
  <template v-else>
    <Comment
      v-if="commentsList.length !== 0"
      v-for="comment of commentsList"
      :key="comment.id"
      :comment="comment"
      @delateComment="removeComment"
    />
    <NoCommentsYet v-else />
  </template>
</template>

<style></style>
