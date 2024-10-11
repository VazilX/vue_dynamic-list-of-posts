<script>
import TextAreaField from "./TextAreaField.vue";
import InputField from "./InputField.vue";

export default {
  name: "AddPost",
  components: {
    InputField,
    TextAreaField,
  },
  data() {
    return {
      newPostTitle: "",
      newPostText: "",
      isTitleHasErr: false,
      isTextHasErr: false,
    };
  },
};
</script>

<template>
  <div className="content">
    <h2>Create new post</h2>

    <form>
      <InputField
        name="title"
        placeholder="Post title"
        v-model="newPostTitle"
        errorMessage="Title is required"
        :hasError="isTitleHasErr"
      />
      <TextAreaField
        v-model="newPostText"
        :hasError="isTextHasErr"
        name="postText"
        title="Write Post Body"
        placeholder="Post body"
        errorText="Body is required"
      />

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">Save</button>
        </div>
        <div className="control">
          <button type="reset" className="button is-link is-light">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
