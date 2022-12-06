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
      <h4 class="titulo">Lista de agendamentos</h4>
    </div>
    <div class="col-12 q-mt-lg">
      <q-card>
        <q-card-section class="q-mt-xs" style="background-color: #fff;">
          Serviço: Barba <br>
          Hora: 10:00 <br>
          Status: Agendado
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="q-mt-xs" style="background-color: #fff;">
          Serviço: Desenho na barba <br>
          Hora: 11:00 <br>
          Status: Agendado
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="q-mt-xs" style="background-color: #fff;">
          Serviço: Corte moicano <br>
          Hora: 11:30 <br>
          Status: Agendado
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="q-mt-xs" style="background-color: #fff;">
          Serviço: Regua <br>
          Hora: 15:00 <br>
          Status: Agendado
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
      ...mapState("cliente", ["usuariosAgendados"])
    },
    
    mounted() {
      this.ActionGetUsuariosAgendados();
    },

    methods: {
      ...mapActions("cliente", ["ActionGetUsuariosAgendados"]),

      
    }
  }
</script>