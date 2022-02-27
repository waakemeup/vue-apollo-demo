import { defineComponent, onMounted, onUpdated, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import characters from "./graphql/characters.query.gql";

/* export default defineComponent({
  render() {
    const message = "This is Message";
    return (
      <>
        Hello Vue TSX
        <h2>{message}</h2>
      </>
    );
  },
}); */

export default defineComponent({
  setup() {
    const message = ref("this is Message");
    onMounted(() => {
      console.log(message);
      console.log(characters);
    });
    onUpdated(() => {
      console.log(message);
    });
    return () => (
      <>
        Hello Vue TSX
        <p
          onClick={() => {
            message.value += "e";
          }}
        >
          {message.value}
        </p>
      </>
    );
  },
});
