<template>
  <q-page class="container">
    <div class="logo logo-grande">
      <!-- <img src="../../public/img/logo.svg" alt=""> -->
    </div>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-evenly">
        <div class="col-12">
          <q-input
            ref="cnpj"
            v-model="cnpj"
            label="CNPJ"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu CNPJ']"
            lazy-rules
            bg-color="secondary"
            mask="##.###.###/####-##"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="senha"
            v-model="senha"
            label="Senha"
            outlined
            
            :rules="[(val) => (val && val.length > 0) || 'Digite uma senha']"
            :type="isPwd ? 'password' : 'text'"
            lazy-rules
            bg-color="secondary"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              ></q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </form>
  </q-page>
</template>

<script>
export default {
    name: 'MainAccess',
    data () {
        return {
          cnpj: "",
          senha: "",
          isPwd: true,
        }
    },
    methods: {
       
    }
}
</script>
