<script>
import { getUserByEmail } from "@/api/users";
import { setLocaleStorage } from "@/utils/setLocaleStorage";

export default {
  name: "Login",
  emits: ['gettingUser'],
  data() {
    return {
      email: "",
    };
  },
  methods: {
    login() {
      getUserByEmail(this.email).then(({ data }) => {
        if (data.length !== 0) {
          setLocaleStorage('user', data[0])
          this.$emit('gettingUser', data[0].id)
        }
      });
    },
  },
};
</script>

<template>
  <section class="container is-flex is-justify-content-center">
    <form @submit.prevent="login" class="box mt-5">
      <h1 class="title is-3">You need to register"</h1>

      <div class="field">
        <label class="label" htmlFor="user-email"> Email </label>

        <div class="control has-icons-left">
          <input
            v-model="email"
            type="email"
            id="user-email"
            name="email"
            class="input"
            placeholder="Enter your email"
            required
          />

          <span class="icon is-small is-left">
            <i class="fas fa-envelope" />
          </span>
        </div>

        <p class="help is-danger">error message</p>
      </div>

      <div class="field">
        <button type="submit" class="button is-primary">Login</button>
      </div>
    </form>
  </section>
</template>
