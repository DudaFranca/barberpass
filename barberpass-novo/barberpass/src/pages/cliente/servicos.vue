<template>
  <q-page class="container">
    <div class="col-12 q-mt-xl">
      <div class="row">
        <div class="col-2">
          <div id="buttons">
            <q-btn
              type="submit"
              style="background-color: #fff"
              icon="logout"
              to="/"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <h4 class="titulo">Lista de serviços</h4>
      <p class="texto">Clique para agendar seu horario</p>
    </div>
    <div class="col-12 q-mt-lg">
      <q-card v-for="servico in servicos" :key="servico.id" class="my-card q-mt-md">
        <q-btn type="submit" style="background-color: #fff; width: 100%; height: 60px;" @click="agendarServico(servico)" class="q-mt-xs">
          Serviço: {{servico.name}} <br>
          Valor: R$ {{servico.value}}
        </q-btn>
      </q-card>
    </div>
    <div class="col-12 q-mt-lg" v-if="agendar">
      <h4 class="titulo">Agende seu horario</h4>
      <form @submit.prevent="cadastro" class="q-mt-md">
        <div id="form" class="row justify-between">
          <div class="col-12">
            <q-input
              ref="nome"
              v-model="nome"
              label="Nome do Serviço"
              outlined
              bg-color="secondary"
            />
          </div>
          <div class="col-12 q-mt-md">
            <q-input
              ref="hora"
              v-model="form.hour"
              label="Hora do atendimento"
              outlined
              bg-color="secondary"
              suffix=":00"
            />
          </div>
        </div>
        <div id="buttons" class="q-mt-md btn-padrao">
          <q-btn
            type="submit"
            class="botao"
            label="Cadastrar"
          />
        </div>
      </form>
    </div>
  </q-page>
</template>

<script>
  import { mapState,  mapActions } from "vuex";

  export default {
    name: 'Home',
    data() {
      return {
        agendar: false,
        nome: "",
        form: {
          barberShopService: null,
          hour: "",
          status: "marcado",
          user: 11,
          value: null
        }
      }
    },
    computed: {
      ...mapState("estabelecimento", ["servicos"])
    },

    methods: {
      ...mapActions("estabelecimento", ["ActionGetServico", "ActionSetServicos"]),
      ...mapActions("cliente", ["ActionUsuarioServicos", "ActionGetUsuariosAgendados"]),

      agendarServico(element) {
        this.agendar = true;
        this.nome = element.name;
        this.form.barberShopService = element.id,
        this.form.value = element.value        
      },

      cadastro() {
        this.ActionUsuarioServicos(this.form);
      }
    }
  }
</script>