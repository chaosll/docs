---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>
<img src="./png/img_5.jpg"></img>

<style module>
.button {
  padding: .1rem 0;
  border: 2px solid;
  font-weight: bold;
}
img {
  margin-top: 1rem;
}
</style>
