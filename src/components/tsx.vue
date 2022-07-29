<script lang="tsx">
import { h, reactive, defineComponent, createApp } from 'vue'

const App = defineComponent(() => {
  const state = reactive({
    count: 0
  })

  function inc() {
    state.count++
  }

  let a: number = 1234

  return () => <button onClick={inc}>
    From the Vue:
    {state.count}-{a}
  </button>
})

export default App
</script>