import { defineComponent, onMounted, onUpdated, ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import characters from "./graphql/characters.query.gql";
import AboutView from "./views/AboutView.vue";

/* export default defineComponent({
  render() {
    const message = "This is Message";
    const { result } = useQuery(characters);
    let allCharacters;
    onBeforeMount(() => {
      allCharacters = useResult(result, null, (data) => data.characters);
    });

    return (
      <>
        Hello Vue TSX
        <h2>{message}</h2>
        <div>{allCharacters}</div>
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

    let counter = ref<number>(1);

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
        <h3
          // style={{ color: "red", backgroundColor: "blue", height: "30vh" }}
          onClick={() => {
            counter.value++;
            // allCharacters.value = counter;
          }}
        >
          {counter.value}
          <br />
          <span style={{ fontFamily: "monaco" }}>
            {JSON.stringify(allCharacters.value, null, 2)}
          </span>
        </h3>
        <AboutView />
      </>
    );
  },
});
