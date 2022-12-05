<template>
  <div class="col-12">
    <div class="row">
      <div class="col-2 q-mt-xl" id="buttons">
        <q-btn
          type="submit"
          style="background-color: #fff"
          icon="logout"
          to="/"
        />
      </div>
      <div class="col-auto q-mt-xl" id="buttons">
        <q-btn
          type="submit"
          style="background-color: #fff"
          label="Clientes agendados"
          to="/estabelecimento/clientes-agendados"
        />
      </div>
    </div>
    <h4 class="titulo">Cadastre seus Serviços</h4>
    <p class="texto">Cadastre os serviços fornecidos pela sua barbearia</p>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-between">
        <div class="col-12 q-mt-md">
          <q-input
            ref="nome"
            v-model="form.name"
            label="Nome do Serviço"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="valor"
            v-model="form.value"
            label="Valor"
            outlined
            prefix="R$"
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="foto"
            v-model="form.urlPhoto"
            label="Url da foto do serviço"
            outlined
            bg-color="secondary"
          />
        </div>
      </div>
      <div id="buttons" class="q-mt-lg btn-padrao">
        <q-btn
          type="submit"
          class="botao"
          label="Cadastrar"
        />
      </div>
    </form>
  </div>
</template>
  
<script>
  import { mapActions } from "vuex";

  export default {
    name: 'CadastroServicos',
    data () {
      return {
        form: {
          barberShop: "10",
          name: "",
          value: null,
          urlPhoto: "",
        }
      }
    },
    methods: {
      ...mapActions("estabelecimento", ["ActionCadastroServicos", "ActionGetServico"]),

      cadastro() {
        if(
          this.form.name == "" ||
          this.form.value == "" ||
          this.form.urlPhoto == "" 
        ) {
          alert("Preencha todos os campos");
        } else {
          this.ActionCadastroServicos(this.form);
          this.ActionGetServico(this.form.barberShop);
          this.limpar();
        }
      },

      limpar() {
        this.form.name = "";
        this.form.value = null;
        this.form.urlPhoto = "";
      }
    },
  }
</script>
  