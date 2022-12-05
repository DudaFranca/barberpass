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
        <div class="col-2">
          <div id="buttons">
            <q-btn
              type="submit"
              style="background-color: #fff"
              icon="person"
              to="/cliente/perfil"
            />
          </div>
        </div>
        <div class="col-auto">
          <div id="buttons">
            <q-btn
              type="submit"
              style="background-color: #fff"
              label="Lista de barbearias"
              to="/lista/barbearias"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <h4 class="titulo">Lista de serviços</h4>
    </div>
    <div class="col-12 q-mt-lg">
      <q-card v-for="servico in servicos" :key="servico.id" class="my-card q-mt-xs">
        <q-btn type="submit" style="background-color: #fff; width: 100%; height: 60px;" @click="agendarServico(servico.id)" class="q-mt-xs">
          Serviço: {{servico.name}} <br>
          Valor: R$ {{servico.value}}
        </q-btn>
      </q-card>
    </div>
  </q-page>
</template>

<script>
  import { mapState,  mapActions } from "vuex";

  export default {
    name: 'Home',
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState("estabelecimento", ["servicos"])
    },

    methods: {
      ...mapActions("estabelecimento", ["ActionGetServico", "ActionSetServicos"]),
      ...mapActions("cliente", ["ActionUsuarioServicos"]),

      agendarServico(element) {
        this.ActionUsuarioServicos(element);
      }
    }
  }
</script>