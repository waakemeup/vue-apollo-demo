import { useQuery, useResult } from "@vue/apollo-composable";
import { defineComponent, onMounted, onUpdated, ref, toRaw, unref } from "vue";
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
      console.log("onMounted");
      console.log(message);
      console.log(characters);
    });
    onUpdated(() => {
      console.log("onUpdated");
      console.log(message);
    });

    const { result } = useQuery(characters);

    // console.log("result: ", result);

    const allCharacters = useResult(
      result,
      null,
      (data) => data.characters.results
    );
    // console.log("value: ", allCharacters);

    // console.log("unrefedValue: ", unref(allCharacters));
    // console.log("true or false: ", unref(allCharacters) === allCharacters);

    let counter = ref<number>(1);

    return () => (
      <>
        Hello Vue TSX
        <p
          onClick={() => {
            message.value += "e";
          }}
          class="font-bold bg-red-700 flex align-middle justify-center"
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
            {/* {String(allCharacters.value)} */}
            <br />
            <div class="bg-blue-400 p-5">
              {JSON.stringify(allCharacters.value)}
              {/* {allCharacters.value} */}
            </div>
          </span>
        </h3>
        <AboutView />
        {/*         <ul>
          {unref(allCharacters).value.results.map((singleCharacter: any) => {
            <>{singleCharacter}</>;
          })}
        </ul> */}
      </>
    );
  },
});
