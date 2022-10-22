<template>
  <div class="col-12" v-if="!loading">
    <h4 class="titulo">Cadastre seus dados</h4>
    <p class="texto">Dados pessoais do cliente</p>
    <form @submit.prevent="cadastroCliente()">
      <div id="form" >
        <div class="col-12">
          <q-input
            ref="nome"
            v-model="form.nomeCompleto"
            label="Nome completo"
            outlined
            :dense="dense"
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu nome completo']"
            lazy-rules
            bg-color="secondary"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="cpf"
            v-model="form.cpf"
            label="CPF"
            outlined
            :dense="dense"
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu CPF']"
            lazy-rules
            bg-color="secondary"
            mask="###.###.###-##"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="dataNascimento"
            v-model="form.dataNascimento"
            label="Data de nascimento"
            outlined
            :dense="dense"
            :rules="[(val) => (val && val.length > 0) || 'Preencha o sua data de nascimento']"
            lazy-rules
            bg-color="secondary"
            mask="##/##/####"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="telefone"
            v-model="form.telefone"
            label="Telefone de contato"
            outlined
            :dense="dense"
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu telefone de contato']"
            lazy-rules
            bg-color="secondary"
            mask="(##)#####-####"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="email"
            v-model="form.email"
            label="Email"
            outlined
            :dense="dense"
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu Email']"
            lazy-rules
            bg-color="secondary"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="senha"
            v-model="form.senha"
            label="Digite uma senha"
            outlined
            :dense="dense"
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
        <div class="col-12">
          <q-input
            ref="senhaConferir"
            v-model="form.senhaConferir"
            label="Confirme sua senha"
            outlined
            :dense="dense"
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
        <div id="buttons" class="q-mt-sm btn-padrao">
          <q-btn
            type="submit"
            class="botao"
            label="Próximo"
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
        nomeCompleto: "",
        cpf: "",
        dataNascimento: "",
        telefone: "",
        senha: "",
        isPwd: true
      },
    }
  },
  methods: {
    ...mapActions("cadastro", ["ActionCadastroClinete"]),
    ...mapState("cadastro", ["loadingCreatePatient"]),
    cadastroCliente() {
      try {
        console.log(this.form);
        this.ActionCadastroClinete(this.form);
      } catch (error) {
        return;
      }
    }
  }
}
</script>
