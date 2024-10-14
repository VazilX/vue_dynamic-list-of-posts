<script>
export default {
  name: "PostPreview",
  computed: {
    currentPost() {
      return this.$store.state.currentPost;
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div className="block">
    <div
      className="is-flex is-justify-content-space-between is-align-items-center"
    >
      <h2>{{ `#${currentPost.id}: ${currentPost.title}` }}</h2>
      <div className="is-flex">
        <button type="button" @click="">
          <span className="icon is-small is-right is-clickable">
            <i className="fas fa-pen-to-square"></i>
          </span>
        </button>
        <button type="button">
          <span
            className="icon is-small is-right has-text-danger is-clickable ml-3"
          >
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </div>
    </div>
    <p data-cy="PostBody">{{ currentPost.body }}</p>
  </div>
</template>

<style></style>
