import { defineComponent, onMounted, onUpdated, ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import characters from "./graphql/characters.query.gql";
import AboutView from "./views/AboutView.vue";

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

    const { result } = useQuery(characters);

    console.log("result: ", result);

    const allCharacters = useResult(result, null, (data) => data.characters);
    console.log("value: ", allCharacters);

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
        <h3 /* style={{ color: "red", backgroundColor: "blue", height: "30vh" }} */
        >
          {allCharacters.value}
          This is Text
        </h3>
        <AboutView />
      </>
    );
  },
});
