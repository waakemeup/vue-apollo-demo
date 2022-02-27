<template>
  <div class="about">
    <h1>This is an about page</h1>
    This is Render in the template
    {{allCharacters}}
    <ul>
      <li v-for="character in allCharacters" :key="character">
        <h2 class="via-pink-300 p-2 border-rose-600 border-2 bg-fuchsia-300">
          {{character.name}}
        </h2>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import characters from '../graphql/characters.query.gql'
import { useQuery, useResult } from "@vue/apollo-composable";
import { onMounted,Fragment } from 'vue';

const { result } = useQuery(characters);

const allCharacters = useResult(result, null, (data) => data.characters.results);


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
