<template>
    <div class="col-12" v-if="!loading">
      <h4 class="titulo">Cadastre sua loja</h4>
      <p class="texto">Cadastre sua barbearia e alcance  mais clientes</p>
      <form @submit.prevent="cadastroCliente()">
        <div id="form" class="row justify-evenly">
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
              ref="cnpj"
              v-model="form.cnpj"
              label="CNPJ"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o seu CNPJ']"
              lazy-rules
              bg-color="secondary"
              mask="##.###.###/####-##"
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
          <div class="col-12">
            <q-input
              ref="nomeBarbearia"
              v-model="form.nomeBarbearia"
              label="Qual o nome da sua barbearia?"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o nome da sua barbearia']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="cidade"
              v-model="form.cidade"
              label="Qual a sua cidade?"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha sua cidade']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-6">
            <q-input
              ref="cep"
              v-model="form.cep"
              label="CEP"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha seu CEP']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-6">
            <q-input
              ref="numero"
              v-model="form.numero"
              label="Número"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o número da sua residencia']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="logradouro"
              v-model="form.logradouro"
              label="Logradouro"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o seu logradouro']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="bairro"
              v-model="form.bairro"
              label="Bairro"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o seu bairro']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-6">
            <q-input
              ref="cidade"
              v-model="form.cidade"
              label="Cidade"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o seu cidade']"
              lazy-rules
              bg-color="secondary"
            />
          </div>
          <div class="col-6">
            <q-input
              ref="estado"
              v-model="form.estado"
              label="Estado"
              outlined
              :dense="dense"
              :rules="[(val) => (val && val.length > 0) || 'Preencha o seu estado']"
              lazy-rules
              bg-color="secondary"
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
          isPwd: true,
          nomeBarbearia: "",
          cidade: ""
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
  