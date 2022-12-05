<template>
  <div class="col-12">
    <h4 class="titulo">Cadastre sua loja</h4>
    <p class="texto">Cadastre sua barbearia e alcance  mais clientes</p>
    <form @submit.prevent="cadastro">
      <div id="form" class="row justify-between">
        <div class="col-12 q-mt-md">
          <q-input
            ref="nome"
            v-model="form.ownerName"
            label="Nome completo"
            outlined
            bg-color="secondary"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="cnpj"
            v-model="form.cpfcnpj"
            label="CNPJ"
            outlined
            bg-color="secondary"
            mask="##.###.###/####-##"
          />
        </div>
        <div class="col-12 q-mt-md">
          <q-input
            ref="telefone"
            v-model="telefone"
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
            v-model="senha"
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
        <div class="col-12 q-mt-md">
          <p class="texto">Cadastre as informações do seu estabelecimento</p>
        </div>
        <div class="col-12">
          <q-input
            ref="nomeBarbearia"
            v-model="form.name"
            label="Qual o nome da sua barbearia?"
            outlined
            bg-color="secondary"
          />
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
            lazy-rules
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
      </div>
      <div id="buttons" class="q-mt-md btn-padrao">
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
        numero: "",
        estado: "",
        criado: false,
        isPwd: true,
      }
    },
    methods: {
      ...mapActions("estabelecimento", ["ActionCadastroEstabelecimento", "ActionBuscaCep"]),
      
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

      cadastro() {
        if(
          this.form.name == "" ||
          this.form.cpfcnpj == "" ||
          this.form.ownerName == "" ||
          this.form.address.address == "" ||
          this.form.address.neighborhood == "" ||
          this.form.address.city == "" ||
          this.form.address.zip_code == "" ||
          this.telefone == "" ||
          this.email == "" ||
          this.senha == "" ||
          this.numero == "" ||
          this.estado == ""
        ) {
          alert("Preencha todos os campos");
        } else {
          this.ActionCadastroEstabelecimento(this.form);
          this.limpar();
          this.$router.push("/estabelecimento/login")
        }
      },

      limpar() {
        this.form.name = "";
        this.form.cpfcnpj = "";
        this.form.ownerName = "";
        this.form.urlCover = "";
        this.form.urlLogo = "";
        this.form.address.address = "";
        this.form.address.neighborhood = "";
        this.form.address.city = "";
        this.form.address.zip_code = "";
        this.form.address.complementaryInfo = "";
        this.telefone = "";
        this.email = "";
        this.senha = "";
        this.numero = "";
        this.estado = "";
        this.isPwd = true;
      }
    },
  }
</script>
  