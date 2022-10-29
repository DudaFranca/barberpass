<template>
    <div class="col-12" v-if="!loading">
      <h4 class="titulo">Dados financeiros</h4>
      <p class="texto">Informações financeiros do cliente</p>
      <form @submit.prevent="cadastroCliente()">
        <div id="form" >
          <div class="col-12">
            <q-input
              ref="numeroDoCartao"
              v-model="form.numeroDoCartao"
              label="Número do cartão"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o número do seu cartão corretamente']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="cvv"
              v-model="form.cvv"
              label="CVV"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o CVV do seu cartão']"
              lazy-rules
              bg-color="secondary"
              mask="###"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="dataExpiracao"
              v-model="form.dataExpiracao"
              label="Data de expiração do cartão"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha a data de expiração do seu cartão']"
              lazy-rules
              bg-color="secondary"
              mask="##/##/####"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="tipo"
              v-model="form.tipo"
              label="Tipo do cartão"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o tipo do seu cartão']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
        </div>
      </form>
    </div>
    <div v-else>
      <Loading />
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  import Loading from "../carregando/loading.vue";
  
  export default {
    name: 'Cliente',
    components: {
      Loading
    },
    data () {
      return {
        form: {
          numeroDoCartao: "",
          cvv: "",
          dataExpiracao: "",
          telefone: "",
        },
      }
    },
    methods: {
      ...mapActions("cadastro", ["ActionCadastroClinete"]),
      ...mapState("cadastro", ["loadingCreatePatient"]),
      
    }
  }
  </script>
  