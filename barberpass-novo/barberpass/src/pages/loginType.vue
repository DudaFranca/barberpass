<template>
  <div>
    <div class="logo logo-grande">
      <img src="../../public/img/logo.svg" alt="">
    </div>
    <div class="btn-padrao">
      <q-btn class="login botao" label="Estabelecimento" to="/acesso-estabelecimento" />
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
  }
}
</script>
