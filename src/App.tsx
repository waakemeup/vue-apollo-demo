import { defineComponent, ref } from "vue";

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
    const message: string = "this is Message";
    return () => (
      <>
        Hello Vue TSX
        <p>{message}</p>
      </>
    );
  },
});
