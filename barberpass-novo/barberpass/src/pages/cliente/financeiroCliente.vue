<template>
  <div class="col-12">
    <h4 class="titulo">Dados financeiros</h4>
    <p class="texto">Informações financeiros do cliente</p>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-evenly">
        <div class="col-12">
          <q-input
            ref="numeroCartao"
            v-model="form.numeroCartao"
            label="Número do Cartão"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu número do cartão']"
            lazy-rules
            bg-color="secondary"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="nomeCartao"
            v-model="form.nomeCartao"
            label="Nome do Cartão"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu nome do cartão']"
            lazy-rules
            bg-color="secondary"
          />
        </div>
        <div class="col-6">
          <q-input
            ref="cvv"
            v-model="form.cvv"
            label="CVV"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o CVV do cartão']"
            lazy-rules
            bg-color="secondary"
            mask="###"
          />
        </div>
        <div class="col-6">
          <q-input
            ref="vencimento"
            v-model="form.vencimento"
            label="Data de vencimento"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha data de vencimento']"
            lazy-rules
            bg-color="secondary"
            mask="##/####"
          />
        </div>
        <div id="buttons" class="q-mt-sm btn-padrao">
          <q-btn
            type="submit"
            class="botao"
            label="Cadastrar"
          />
        </div>
      </div>
    </form>
  </div>
</template>
  
<script>
  import { mapActions } from "vuex";

  export default {
    name: 'Estabelecimento',
    data () {
      return {
        form: {
          numeroCartao: "",
          nomeCartao: "",
          cvv: "",
          vencimento: "",
        },
        isPwd: true,
      }
    },
    methods: {
      ...mapActions("cliente", ["ActionCadastroCliente"]),
      
      cadastro() {
        this.ActionCadastroCliente(this.form);
      }
    },
    // watch: {
    //   cep: function(novoCep, velhoCep) {
    //     if (novoCep.length === 8) this.getCep()
    //     else this.form.response = null
    //   }
    // }
  }
</script>
  