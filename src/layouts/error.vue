<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

type Props = {
  error: any
}

const component = createComponent({
  layout: 'empty',
  props: {
    error: {
      type: Object, // TODO: 型がObjectのままで良いか確認
      default: null,
    },
  } as Props,
  setup(props: Props) {
    const pageNotFound = '404 Not Found'
    const otherError = 'An error occurred'

    // TODO: 本来はnuxtのheadだがうまく動かないので暫定でこちらに置いている
    function head() {
      const title =
        props.error.hasOwnProperty('statusCode') &&
        props.error.statusCode === 404
          ? pageNotFound
          : otherError
      return {
        title,
      }
    }

    return {
      pageNotFound,
      otherError,
      head,
    }
  },
})

export default component
// export default {
//   layout: 'empty',
//   props: {
//     error: {
//       type: Object,
//       default: null,
//     },
//   },
//   head() {
//     const title =
//       this.error.statusCode === 404 ? this.pageNotFound : this.otherError
//     return {
//       title,
//     }
//   },
//   data() {
//     return {
//       pageNotFound: '404 Not Found',
//       otherError: 'An error occurred',
//     }
//   },
// }
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
