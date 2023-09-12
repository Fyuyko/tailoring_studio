<template>
  <div class="container">
    <h1 class="page-title text-h4">Личный кабинет</h1>
    <div class="owner">
      <div class="owner__logo">
        <img src="../assets/owner.svg" alt="">
      </div>
      <div class="owner__desc">
        <div class="owner__desc-text">
          <label>
            <span>ФИО: </span>
            <input type="text" :value="owner?.name" placeholder="введите ваше имя" :readonly=" !inputActive">
          </label>
        </div>
        <div class="owner__desc-text">
          <label>
            <span>Ваш статус: </span>
            <input type="text" value="управляющий" placeholder="введите вашу должность" :readonly="!inputActive">
          </label>
        </div>
        <v-btn variant="text" class="owner__desc-change" @click.prevent="inputHandler">Изменить</v-btn>
      </div>
      <div class="owner__desc">
        <div class="owner__desc-text">
          Предварительная прибыть: миллиард
        </div>
        <div class="owner__desc-text">
          В работе: 10 заказов
        </div>
      </div>
    </div>
    <div class="personnel">
      <div class="personnel__icon">
        <img src="" alt="">
      </div>
      <div class="personnel__desc" v-if="personal">
        <div class="personnel__desc-detail">
          Персонал в цехе:
          {{personal?.seamstresses?.length}} {{declOfNum(personal?.seamstresses?.length, declination.seamstresses)}},
          {{personal?.fashionConstructor?.length}} {{declOfNum(personal?.fashionConstructor?.length, declination.fashionConstructor)}},
          {{personal?.cutters?.length}} {{declOfNum(personal?.cutters?.length, declination.cutters)}}
        </div>
        <div class="personnel__desc-detail">
          Персонал в цехе: 10 швей, 1 конструктор, 1 раскройщик
        </div>
        <div class="personnel__desc-detail">
          Персонал в цехе: 10 швей, 1 конструктор, 1 раскройщик
        </div>
      </div>
      <div v-else>
        На данный момент нет персонала
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import {useOwnerStore} from "@/stores/owner/owner";
  import {declOfNum} from "@/utils";
  const ownerStore = useOwnerStore();

  const owner = ref(ownerStore.ownerData);
  const personal = ownerStore.personal;
  const declination = ownerStore.declination;

  const inputActive = ref(false);

  function inputHandler() {
    inputActive.value = !inputActive.value;
  }

  const data = ref([])

</script>

<style scoped lang="scss">
  .owner {
    display: flex;
    align-items: stretch;
    gap: 45px;
    padding: 30px 40px;
    background-color: #F4F4F4;
    border-radius: 30px;

    font-size: 24px;

    &__logo {
      border-radius: 40px;
      background-color: white;
    }

    &__desc {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 20px 0;

      &:last-child {
        margin: 0 auto;
      }

      &-change {
        margin-top: auto;
        padding: 5px;
      }
    }
  }
</style>