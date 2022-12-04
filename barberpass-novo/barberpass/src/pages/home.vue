<template>
  <q-page class="container">
    <q-card class="my-card">
      <q-card-section>
        {{barbearias}}
      </q-card-section>
    </q-card>
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
      this.ActionGetBarbearia()
    },

    methods: {
      ...mapActions("estabelecimento", ["ActionGetBarbearia", "ActionSetBarbearia"]),
    }
  }
</script>