<script>
import { getUser } from "./api/users";
import { getLocaleStorage } from "./utils/getLocaleStorage";
import Login from "./components/Login.vue";
import MainContent from "./components/MainContent.vue";
import { nextTick } from "vue";

export default {
  name: "App",
  components: {
    Login,
    MainContent,
  },
  data() {
    return {
      needRegistration: true,
    };
  },
  beforeMount() {
    const user = getLocaleStorage("user");

    if (user) {
      this.gettingUser(user.id);
    } else {
      this.needRegistration = true;
    }
  },

  methods: {
    gettingUser(id) {
      getUser(id)
        .then(({ data }) => {
          if (data) {
            this.$store.commit("setUserId", data.id);
            this.needRegistration = false;
          } else {
            this.needRegistration = true;
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<template>
  <Login v-if="needRegistration" @gettingUser="gettingUser" />
  <MainContent v-else />
</template>

<style></style>
