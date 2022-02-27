<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{allCharacters}}
  </div>
</template>

<script setup lang="ts">
import characters from '../graphql/characters.query.gql'
import { useQuery, useResult } from "@vue/apollo-composable";

const { result } = useQuery(characters);

const allCharacters = useResult(result, null, (data) => data.characters);


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
