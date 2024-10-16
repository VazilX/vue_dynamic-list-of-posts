<script>
import { getUserByEmail, registrationUser } from "@/api/users";
import { setLocaleStorage } from "@/utils/setLocaleStorage";
import NeedToRegister from "./NeedToRegister.vue";

export default {
  name: "Login",
  components: {
    NeedToRegister,
  },
  emits: ["login"],
  data() {
    return {
      email: "",
      name: "",
      errMessage: "",
      isLoading: false,
      needRegistration: false,
      errMessageRegistration: "",
    };
  },
  methods: {
    login() {
      if (!this.validation()) return;

      this.isLoading = true;

      if (!this.needRegistration) {
        getUserByEmail(this.email)
          .then(({ data }) => {
            if (data.length !== 0) {
              setLocaleStorage("user", data[0]);
              this.$store.commit("setUserId", data[0].id);
              this.$emit("login");
            } else {
              this.needRegistration = true;
            }
          })
          .catch(() => {
            this.errMessage = "Ops, something went wrong";
          })
          .finally(() => {
            this.isLoading = false;
          });
      } else {
        registrationUser(this.email, this.name)
          .then(({ data }) => {
            setLocaleStorage("user", data);
            this.$store.commit("setUserId", data.id);
            this.$emit("login");
          })
          .catch(() => {
            this.errMessageRegistration = "Ops, something went wrong";
          })
          .finally(() => {
            this.needRegistration = true;
          });
      }
    },

    validation() {
      if (this.email === "") {
        this.errMessage = "Email is required";
        return false;
      }

      if (this.needRegistration && this.name === "") {
        this.errMessageRegistration = "Name is required";
        return false;
      }

      return true;
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
            :class="{ 'is-danger': errMessage }"
            @input="errMessage = ''"
            :disabled="needRegistration"
            type="email"
            id="user-email"
            name="email"
            class="input"
            placeholder="Enter your email"
            required
          />

          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>

        <p class="help" :class="{ 'is-danger': errMessage }">
          {{ errMessage }}
        </p>
      </div>

      <NeedToRegister
        v-if="needRegistration"
        v-model="name"
        :errMessage="errMessageRegistration"
        @onInput="errMessageRegistration = ''"
      />

      <div class="field">
        <button
          type="submit"
          class="button is-primary"
          :class="{ 'is-loading': isLoading }"
        >
          Login
        </button>
      </div>
    </form>
  </section>
</template>
