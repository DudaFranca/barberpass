<template>
  <q-page class="container fundo">
    <div class="logo">
      <img src="../../../public/img/logo.svg" class="logo-mini">
    </div>
    <div v-if="cliente" class="row">
      <Cliente />
    </div>
    <div v-if="estabelecimento" class="row">
      <Estabelecimento />
    </div>
  </q-page>
</template>

<script>
import Cliente from '../../components/cliente/cliente.vue'
import Estabelecimento from '../../components/estabelecimento/estabelecimento.vue'
export default {
  name: 'MainAccess',
  components: {
    Cliente,
    Estabelecimento
  },
  data () {
    return {
      estabelecimento: true,
      cliente: false
    }
  },
  // methods: {
    
  // }
}
</script>