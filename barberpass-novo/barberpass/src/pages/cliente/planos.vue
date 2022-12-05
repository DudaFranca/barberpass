<template>
  <div class="flex flex-center">
    <div class="row">
      <div class="col-12 q-mb-xs">
        <h4 class="titulo flex flex-center">Escolha seu plano</h4>
      </div>
      <div class="col-12">
        <q-btn type="submit" no-caps style="border: solid 3px white;" to="/cliente/lista/barbearias">
          <div class="col flex flex-center">
            <img src="../../../public/img/icon1.svg" alt="">
          </div>
          <div class="col-8 flex flex-center">
            <p class="texto-planos">3x Cortes de Cabelo básicos + 3x Barba básicos</p>
            <p class="planos">R$ 50,00</p>
          </div>
        </q-btn>
      </div>

      <div class="col-12 q-mt-md">
        <q-btn type="submit" no-caps style="border: solid 3px white;" to="/cliente/lista/barbearias">
          <div class="col flex flex-center">
            <img src="../../../public/img/icon2.svg" alt="">
          </div>
          <div class="col-8 flex flex-center">
            <p class="texto-planos">6x Cortes de Cabelo básicos  ou 3 Cortes Premium + 6x Barba básicos ou 3x Barba Premium</p>
            <p class="planos">R$ 80,00</p>
          </div>
        </q-btn>
      </div>

      <div class="col-12 q-mt-md">
        <q-btn type="submit" no-caps style="border: solid 3px white;" to="/cliente/lista/barbearias">
          <div class="col flex flex-center">
            <img src="../../../public/img/icon3.svg" alt="">
          </div>
          <div class="col-8 flex flex-center">
            <p class="texto-planos">10x Cortes de Cabelo básicos  ou 5 Cortes Premium + 10x Barba básicos ou 5x Barba Premium</p>
            <p class="planos">R$ 120,00</p>
          </div>
        </q-btn>
      </div>
    </div>
  </div>
</template>
