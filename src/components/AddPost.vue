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
      hasErrorTitle: false,
      hasErrorText: false,
    };
  },
  emits: ["close"],
  methods: {
    createNewPost() {
      if (!this.validation()) {
        return;
      }
    },

    validation() {
      console.log("validation start");
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

      console.log("validation finish");
      console.log("hasErr", hasErr);
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
        placeholder="Post title"
        errorText="Title is required"
      />
      <TextAreaField
        v-model.trim="newPostText"
        :hasError="hasErrorText"
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
          <button
            @click="closeSidebar"
            type="reset"
            className="button is-link is-light"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
