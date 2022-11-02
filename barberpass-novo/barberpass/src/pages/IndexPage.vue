<template>
  <q-page class="flex flex-center">
    <div class="logo logo-grande">
      <img src="../../public/img/logo.svg" alt="">
    </div>
    <div class="btn-padrao">
      <q-btn class="login botao" label="Estabelecimento" to="/estabelecimento" />
    </div>
    <div class="q-mt-lg btn-padrao">
      <q-btn class="botao" label="Cliente" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
