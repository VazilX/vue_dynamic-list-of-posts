<script>
import TextAreaField from "./TextAreaField.vue";
import InputField from "./InputField.vue";
import { createPosts } from "@/api/post";

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
      hasErrorTitle: false,
      hasErrorText: false,
    };
  },
  emits: ["close", "updatePostList"],
  methods: {
    createNewPost() {
      if (!this.validation()) {
        return;
      }

      const sendData = {
        body: this.newPostText,
        title: this.newPostTitle,
        userId: 1546,
      };

      createPosts(sendData).then(({ data }) => {
        this.$emit("updatePostList", data);
      });

      this.reset();
    },

    validation() {
      let hasErr = false;

      switch ("") {
        case this.newPostTitle:
          hasErr = true;
          this.hasErrorTitle = true;

        case this.newPostText:
          hasErr = true;
          this.hasErrorText = true;
          break;

        default:
          hasErr = false;
          break;
      }

      return !hasErr;
    },

    closeSidebar() {
      this.reset();

      this.$emit("close");
    },

    reset() {
      this.newPostTitle = "";
      this.newPostText = "";
      this.hasErrorTitle = false;
      this.hasErrorText = false;
    },
  },
};
</script>

<template>
  <div className="content">
    <h2>Create new post</h2>

    <form @submit.prevent="createNewPost">
      <InputField
        v-model.trim="newPostTitle"
        :hasError="hasErrorTitle"
        name="title"
        title="Title"
        placeholder="Post title"
        errorText="Title is required"
        @removeErr="hasErrorTitle = false"
      />
      <TextAreaField
        v-model.trim="newPostText"
        :hasError="hasErrorText"
        name="postText"
        title="Write Post Body"
        placeholder="Post body"
        errorText="Body is required"
        @removeErr="hasErrorText = false"
      />

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">Save</button>
        </div>
        <div class="control">
          <button
            @click="closeSidebar"
            type="reset"
            class="button is-link is-light"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
