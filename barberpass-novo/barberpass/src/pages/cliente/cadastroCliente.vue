<template>
  <div class="col-12">
    <h4 class="titulo">Cadastre seus dados</h4>
    <p class="texto">Dados pessoais do cliente</p>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-between">
        <div class="col-12">
          <q-input
            ref="nome"
            v-model="form.name"
            label="Nome completo"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu nome completo']"
            lazy-rules
            bg-color="secondary"
          />
        </div>
        <div class="col-12">
          <q-input
            ref="login"
            v-model="form.login"
            label="Login"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu login']"
            lazy-rules
            bg-color="secondary"
          />
        </div>
        <!-- <div class="col-12">
          <q-input
            ref="nascimento"
            v-model="form.nascimento"
            label="Data de Nascimento"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o sua Data de Nascimento']"
            lazy-rules
            bg-color="secondary"
            mask="##/##/####"
          />
        </div> -->
        <div class="col-12">
          <q-input
            ref="telefone"
            v-model="form.cellphone"
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
            v-model="form.passworld"
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
        <!-- <div class="col-12">
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
        </div> -->
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
        <div class="col-12">
          <q-input
            ref="complemento"
            v-model="form.address.complementaryInfo"
            label="Complemento"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'Preencha o seu estado']"
            lazy-rules
            bg-color="secondary"
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
  import { mapActions, mapState } from "vuex";

  export default {
    name: 'Estabelecimento',
    data () {
      return {
        form: {
          name: "",
          login: "",
          address: {
            address: "",
            neighborhood: "",
            city: "",
            zip_code: "",
            complementaryInfo: "",
          },
          passworld: "",
          cellphone: "",
          cardNumber: {
            cardNumber: "",
            brand: ""
        }
        },
        email: "",
        numero: "",
        estado: "",
        senhaConferir: "",
        isPwd: true,
      }
    },
    methods: {
      ...mapActions("cliente", ["ActionCadastroCliente", "ActionBuscaCep", "ActionStateCadastroCliente"]),
      ...mapState("cliente", ["stateCadastroCliente"]),

      async buscarCep() {
        if(this.form.address.zip_code.length === 8) {
          await this.ActionBuscaCep(this.form.address.zip_code).then((res) => {
            this.form.address.address = res.logradouro;
            this.form.address.neighborhood = res.bairro;
            this.form.address.city = res.localidade;
            this.address.estado = res.uf;
          })
        }
      },

      // set() {
      //   this.form.name = this.stateCadastroCliente.name;
      //   this.form.login = this.stateCadastroCliente.login;
      //   this.form.cellphone = this.stateCadastroCliente.cellphone;
      //   this.form.email = this.stateCadastroCliente.email;
      //   this.form.passworld = this.stateCadastroCliente.passworld;
      //   this.form.senhaConferir = this.stateCadastroCliente.senhaConferir;
      //   this.form.city = this.stateCadastroCliente.city;
      //   this.form.zip_code = this.stateCadastroCliente.zip_code;
      //   this.form.data = this.stateCadastroCliente.data;
      //   this.form.address = this.stateCadastroCliente.address;
      //   this.form.neighborhood = this.stateCadastroCliente.neighborhood;
      //   this.form.complementaryInfo = this.stateCadastroCliente.complementaryInfo;
      // },

      limpar() {
        this.form.name = "",
        this.form.login = "",
        this.form.cellphone = "",
        this.email = "",
        this.form.passworld = "",
        this.form.senhaConferir = "",
        this.form.address.city = "",
        this.form.address.zip_code = "",
        this.form.address = "",
        this.form.address.neighborhood = "",
        this.form.address.complementaryInfo = "",
        this.form.cardNumber.brand = "",
        this.form.cardNumber.cardNumber = "",
        this.numero = "",
        this.estado = "",
        this.senhaConferir = ""
      },

      cadastro() {
        this.ActionCadastroCliente(this.form);
        // this.limpar();
      }
    },
  }
</script>
  