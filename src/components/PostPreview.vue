<script>
export default {
  name: "PostPreview",
  props: {
    currentPost: Object,
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
        <span className="icon is-small is-right is-clickable">
          <i className="fas fa-pen-to-square"></i>
        </span>
        <span
          className="icon is-small is-right has-text-danger is-clickable ml-3"
        >
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </div>
    <p data-cy="PostBody">{{ currentPost.body }}</p>
  </div>
</template>

<style></style>
