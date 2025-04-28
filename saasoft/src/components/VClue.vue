<template>
  <div class="clue">
    <div class="clue__icon">
      <v-icon>mdi-help</v-icon>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.clue {
  padding: 5px;
  border-radius: 5px;
  display: flex;
  column-gap: 12px;
  align-items: center;
  background-color: rgba(102, 175, 238, 0.205);

  &__icon {
    padding: 2px;
    border: 1px solid black;
    border-radius: 50%;
  }
}
</style>
