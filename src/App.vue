<script>
import InputField from "./components/InputField.vue";
import PostsList from "./components/PostsList.vue";
import Sidebar from "./components/Sidebar.vue";
import TextAreaField from "./components/TextAreaField.vue";

export default {
  components: {
    PostsList,
    Sidebar,
    InputField,
    TextAreaField,
  },
  data() {
    return {
      inSidebar: "",
      newPostTitle: "",
      newPostText: "",
      isTitleHasErr: false,
      isTextHasErr: false,
    };
  },
  watch: {
    newPostTitle() {
      console.log(this.newPostTitle);
    },
    newPostText() {
      console.log(this.newPostText);
    }
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
      <TextAreaField 
        v-model="newPostText"
        :hasError="isTextHasErr"
        name="postText"
        title="Write Post Body"
        placeholder="Post body"
      />
    </Sidebar>
  </main>
</template>
