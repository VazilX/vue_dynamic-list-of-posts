<script>
import { deleteComment, getPostComments } from "@/api/comments";
import Comment from "./Comment.vue";
import PostPreview from "./PostPreview.vue";
import NoCommentsYet from "./NoCommentsYet.vue";
import Loader from "./Loader.vue";
import Message from "./Message.vue";

export default {
  name: "PostDetails",
  components: {
    PostPreview,
    Comment,
    NoCommentsYet,
    Loader,
    Message,
  },
  props: {
    currentPost: Object,
  },
  data() {
    return {
      commentsList: [],
      isCommentsLoading: false,
      errorMessage: "",
    };
  },
  watch: {
    currentPost: {
      immediate: true,
      deep: true,
      handler() {
        this.downloadCommentsList();
      },
    },
  },
  methods: {
    downloadCommentsList() {
      this.isCommentsLoading = true;

      getPostComments(this.currentPost.id)
        .then(({ data }) => {
          this.commentsList = data;
          console.log(data);
        })
        .catch(() => {
          this.errorMessage = "Didn't able to download comments";
        })
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
        .catch(() => {
          this.errorMessage = "Didn't able to delete comments";
        })
        .finally(() => {});
    },
  },
};
</script>

<template>
  <PostPreview :currentPost="currentPost" />
  <Loader v-if="isCommentsLoading" />
  <template v-else-if="errorMessage === ''">
    <Comment
      v-if="commentsList.length !== 0"
      v-for="comment of commentsList"
      :key="comment.id"
      :comment="comment"
      @delateComment="removeComment"
    />
    <NoCommentsYet v-else />
  </template>

  <Message v-if="errorMessage !== ''">
    <template #head>
      <p>Error</p>
    </template>
    {{ console.log("errorMessage", errorMessage) }}
    <p>{{ errorMessage }}</p>
  </Message>
</template>

<style></style>
