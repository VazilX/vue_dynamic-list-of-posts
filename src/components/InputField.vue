<script>
export default {
  name: "InputField",
  props: {
    name: String,
    placeholder: String,
    errorMessage: String,
    modelValue: String,
    hasError: Boolean,
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
};
</script>

<template>
  <div class="field" data-cy="NameField">
    <label
      class="label input-field__label"
      :htmlFor="`comment-author-name-${name}`"
    >
      {{ name }}
    </label>
    <div
      class="control has-icons-left has-icons-right"
    >
      <input
        type="text"
        :name="name"
        :id="`comment-author-name-${name}`"
        :placeholder="placeholder"
        class="input"
        :class="{ 'is-danger': hasError }"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>

      <span
        class="icon is-small is-right has-text-danger"
        data-cy="ErrorIcon"
        v-if="hasError"
      >
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>

    <p class="help is-danger" data-cy="ErrorMessage" v-if="hasError">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style>
.input-field__label {
  text-transform: capitalize;
}
</style>
