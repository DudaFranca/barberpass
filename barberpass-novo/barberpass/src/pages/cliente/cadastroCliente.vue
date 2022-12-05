<template>
  <div class="col-12">
    <h4 class="titulo">Cadastre seus dados</h4>
    <p class="texto">Dados pessoais do cliente</p>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-between">
        <div class="col-12 q-mt-md">
          <q-input
            ref="nome"
            v-model="form.name"
            label="Nome completo"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="login"
            v-model="form.login"
            label="Login"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="telefone"
            v-model="form.cellphone"
            label="Telefone de contato"
            outlined
            bg-color="secondary"
            mask="(##)#####-####"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="email"
            v-model="email"
            label="Email"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="senha"
            v-model="form.passworld"
            label="Digite uma senha"
            outlined
            :type="isPwd ? 'password' : 'text'"
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
        <div class="col-6 q-mt-md">
          <q-input
            ref="cep"
            v-model="form.address.zip_code"
            label="CEP"
            outlined
            bg-color="secondary"
            @keyup="buscarCep()"
          />
        </div>
        <div class="col-5 q-mt-md">
          <q-input
            ref="numero"
            v-model="numero"
            label="Número"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="logradouro"
            v-model="form.address.address"
            label="Logradouro"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="bairro"
            v-model="form.address.neighborhood"
            label="Bairro"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-6 q-mt-md">
          <q-input
            ref="cidade"
            v-model="form.address.city"
            label="Cidade"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-5 q-mt-md">
          <q-input
            ref="estado"
            v-model="estado"
            label="Estado"
            outlined
            bg-color="secondary"
            mask="AA"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="complemento"
            v-model="form.address.complementaryInfo"
            label="Complemento"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <p class="texto">Dados do cartão</p>
        </div>
        <div class="col-12">
          <q-input
            ref="numeroCartao"
            v-model="form.cardNumber.cardNumber"
            label="Números do Cartão"
            type="number"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-6 q-mt-md">
          <q-input
            ref="cvv"
            v-model="cvv"
            label="CVV"
            outlined
            bg-color="secondary"
            mask="###"
          />
        </div>
        <div class="col-5 q-mt-md">
          <q-input
            ref="bandeira"
            v-model="form.cardNumber.brand"
            label="Bandeira do Cartão"
            outlined
            bg-color="secondary"
          />
        </div>
      </div>
      <div id="buttons" class="q-mt-lg btn-padrao">
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
  // const { ref } = Vue;
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
        cvv: "",
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
            this.estado = res.uf;
          })
        }
      },

      limpar() {
        this.form.name = "";
        this.form.login = "";
        this.form.address.address = "";
        this.form.address.neighborhood = "";
        this.form.address.city = "";
        this.form.address.zip_code = "";
        this.form.address.complementaryInfo = "";
        this.form.passworld = "";
        this.form.cellphone = "";
        this.form.cardNumber.cardNumber = "";
        this.form.cardNumber.brand = "";
        this.email = "";
        this.numero = "";
        this.estado = "";
        this.senhaConferir = "";
        this.cvv = "";
      },

      cadastro() {
        if(
          this.form.name == "" ||
          this.form.login == "" ||
          this.form.address.address == "" ||
          this.form.address.neighborhood == "" ||
          this.form.address.city == "" ||
          this.form.address.zip_code == "" ||
          this.form.passworld == "" ||
          this.form.cellphone == "" ||
          this.form.cardNumber.cardNumber == "" ||
          this.form.cardNumber.brand == "" ||
          this.email == "" ||
          this.numero == "" ||
          this.estado == "" ||
          this.cvv == ""
        ){
          alert("Preencha todos os dados")
        } else {
          this.ActionCadastroCliente(this.form);
          this.limpar();
        }
      }
    },
  }
</script>
  