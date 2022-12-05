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
      <h4 class="titulo">Seu Perfil</h4>
    </div>
    <div class="col-12 q-mt-lg">
      <q-card v-for="servico in servicos" :key="servico.id" class="my-card">
        <q-card-section class="q-mt-xs">
          
        </q-card-section>
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
    }
  }
</script>