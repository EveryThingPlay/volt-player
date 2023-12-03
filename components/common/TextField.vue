<template>
  <div
    ref="field"
    class="TextField"
    @click="onFocus"
  >
    <div class="TextField-input">
      <label
        for="input"
        class="TextField-input-label"
      >
        Label
      </label>
      <input
        ref="input"
        v-model="value"
        placeholder="Placeholder"
        name="input"
        @blur="onBlur"
        @input="$emit('update:model-value', value)"
        @focus="onFocus"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

defineEmits(['update:model-value']);

const field = ref<HTMLElement>();
const input = ref<HTMLInputElement>();

const onFocus = () => {
	field.value?.classList.add('focus');
	if (document.activeElement !== input.value) {
		input.value?.focus();
	}
};

const onBlur = () => {
	(field.value as HTMLElement).classList.remove('focus');
};

const value = ref('');

watch(value, val => {
	if (val) {
		field.value?.classList.add('value');
	} else {
		field.value?.classList.remove('value');
	}
});
</script>

<style scoped lang="postcss">
  .TextField {
    font-family: 'Roboto', sans-serif;
    @apply bg-white w-72 h-11 rounded-full cursor-text px-6 py-2.5 font-semibold;

    .TextField-input {
      @apply self-center bg-transparent text-black;

      input {
        @apply placeholder:invisible focus:outline-none w-full placeholder:text-gray-400 placeholder:font-medium;
      }

      .TextField-input-label {
        @apply absolute transform-gpu -translate-y-0 -translate-x-0 scale-100 duration-100;
      }

    }
    &.focus, &.value {

        input {
          @apply placeholder:visible;
        }
        .TextField-input-label {
          @apply block transform-gpu -translate-y-4 -translate-x-1.5 scale-75 duration-100
        }
      }
  }
</style>
