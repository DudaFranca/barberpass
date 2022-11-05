<template>
  <div>
    <div class="btn-padrao">
      <q-btn class="login botao" label="Estabelecimento" to="/estabelecimento" />
    </div>
    <div class="q-mt-lg btn-padrao">
      <q-btn class="botao" label="Cliente" to="/cliente" />
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
  }
}
</script>
