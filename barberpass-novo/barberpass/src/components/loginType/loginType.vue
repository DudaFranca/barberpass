<template>
  <div>
    <div class="btn-padrao">
      <q-btn class="login botao" label="Estabelecimento" @click="estabelecimento" />
    </div>
    <div class="q-mt-lg btn-padrao">
      <q-btn class="botao" label="Cliente" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainAccess',
  data() {
    return {
      cliente: false,
      estabelecimento: false
    }
  },
  methods: {
    estabelecimento () {
      this.estabelecimento = true
    },

    cliente () {
      this.cliente = true
    }
  }
}
</script>
