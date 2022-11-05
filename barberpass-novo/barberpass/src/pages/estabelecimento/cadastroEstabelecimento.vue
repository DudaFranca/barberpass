<template>
  <div class="col-12">
    <h4 class="titulo">Cadastre sua loja</h4>
    <p class="texto">Cadastre sua barbearia e alcance  mais clientes</p>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-between">
        <div class="col-12">
          <q-input
            ref="nome"
            v-model="form.nomeCompleto"
            label="Nome completo"
            outlined
            
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
          <p class="texto">Cadastre as informações do seu estabelecimento</p>
        </div>
        <div class="col-12">
          <q-input
            ref="nomeBarbearia"
            v-model="form.nomeBarbearia"
            label="Qual o nome da sua barbearia?"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o nome da sua barbearia']"
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
            :rules="[(val) => (val && val.length > 0) || 'Preencha seu CEP']"
            lazy-rules
            bg-color="secondary"
            @keyup="buscarCep()"
          />
        </div>
        <div class="col-auto">
          <q-input
            ref="numero"
            v-model="form.numero"
            label="Número"
            outlined
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
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu cidade']"
            lazy-rules
            bg-color="secondary"
          />
        </div>
        <div class="col-auto">
          <q-input
            ref="estado"
            v-model="form.estado"
            label="Estado"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu estado']"
            lazy-rules
            bg-color="secondary"
            mask="AA"
          />
        </div>
      </div>
      <div id="buttons" class="q-mt-sm btn-padrao">
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
    name: 'Estabelecimento',
    data () {
      return {
        form: {
          nomeCompleto: "",
          cnpj: "",
          telefone: "",
          email: "",
          senha: "",
          senhaConferir: "",
          nomeBarbearia: "",
          cidade: "",
          cep: null,
          data: null,
          numero: "",
          logradouro: "",
          bairro: "",
          estado: "",
        },
        isPwd: true,
      }
    },
    methods: {
      ...mapActions("estabelecimento", ["ActionCadastroEstabelecimento", "ActionBuscaCep"]),
      
      async buscarCep() {
        if(this.form.cep.length === 8) {
          await this.ActionBuscaCep(this.form.cep).then((res) => {
            console.log(res);
            this.form.logradouro = res.logradouro;
            this.form.bairro = res.bairro;
            this.form.cidade = res.localidade;
            this.form.estado = res.uf;
          })
        }
      },

      cadastro() {
        this.ActionCadastroEstabelecimento(this.form);
      }
    },
    // watch: {
    //   cep: function(novoCep, velhoCep) {
    //     if (novoCep.length === 8) this.getCep()
    //     else this.form.response = null
    //   }
    // }
  }
</script>
  