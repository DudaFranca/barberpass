<template>
  <div class="col-12">
    <h4 class="titulo">Cadastre sua loja</h4>
    <p class="texto">Cadastre sua barbearia e alcance  mais clientes</p>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-between">
        <div class="col-12">
          <q-input
            ref="nome"
            v-model="form.ownerName"
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
            v-model="form.cpfcnpj"
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
            v-model="telefone"
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
            v-model="email"
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
            v-model="senha"
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
            v-model="senhaConferir"
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
            v-model="form.nome"
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
            v-model="form.address.zip_code"
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
            v-model="numero"
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
            v-model="form.address.address"
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
            v-model="form.address.neighborhood"
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
            v-model="form.address.city"
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
            v-model="estado"
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
          name: "",
          cpfcnpj: "",
          ownerName: "",
          urlCover: "",
          urlLogo: "",
          address: {
            address: "",
            neighborhood: "",
            city: "",
            zip_code: "",
            complementaryInfo: "",
          }
        },
        telefone: "",
        email: "",
        senha: "",
        senhaConferir: "",
        numero: "",
        estado: "",
        isPwd: true,
      }
    },
    methods: {
      ...mapActions("estabelecimento", ["ActionCadastroEstabelecimento", "ActionBuscaCep"]),
      
      async buscarCep() {
        if(this.form.zip_code.length === 8) {
          await this.ActionBuscaCep(this.form.zip_code).then((res) => {
            console.log(res);
            this.form.address = res.logradouro;
            this.form.neighborhood = res.bairro;
            this.form.city = res.localidade;
            this.estado = res.uf;
          })
        }
      },

      cadastro() {
        this.ActionCadastroEstabelecimento(this.form);
        this.limpar();
      },

      limpar() {
        this.form.name = "";
        this.form.cpfcnpj = "";
        this.form.ownerName = "";
        this.form.urlCover = "";
        this.form.urlLogo = "";
        this.form.address = {};
        this.form.neighborhood = "";
        this.form.city = "";
        this.form.zip_code = null;
        this.telefone = "";
        this.email = "";
        this.senha = "";
        this.senhaConferir = "";
        this.numero = "";
        this.estado = "";
      }
    },
  }
</script>
  