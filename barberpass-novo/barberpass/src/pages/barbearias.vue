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
      </div>
    </div>
    <div class="col-12">
      <h4 class="titulo">Lista de barbearias</h4>
    </div>
    <div class="col-12 q-mt-lg">
      <div v-for="barbearia in barbearias" :key="barbearia.id" class="my-card q-mt-md">
        <q-btn type="submit" style="background-color: #fff; width: 100%; height: 60px;" @click="listaServicos(barbearia.id)">
          {{barbearia.name}}
        </q-btn>
      </div>
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
      ...mapState("estabelecimento", ["barbearias"])
    },
    
    mounted() {
      this.ActionGetBarbearia();
    },

    methods: {
      ...mapActions("estabelecimento", ["ActionGetBarbearia", "ActionSetBarbearia", "ActionGetServico"]),

      listaServicos(event) {
        this.ActionGetServico(event);
        this.$router.push("/lista/servicos");
      }
    }
  }
</script>