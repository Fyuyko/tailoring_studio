import {onBeforeMount, ref} from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import {BASE_URL} from "@/constants";

export const useOwnerStore = defineStore("owner", () => {
    const ownerData = ref(null);

    const personal = ref(null);
    const declination = {
        seamstresses: ["швея", "швеи", "швей"],
        fashionConstructor: ["конструктор", "конструктора", "конструкторов"],
        cutters: ["раскройщик", "раскройщика", "раскройщиков"],
    }

    async function fetchData() {
        await axios.get(BASE_URL, {
            headers: {
                "Cache-Control": "no-cache",
            }
        })
            .then(response => {
                ownerData.value = response.data.owner;
                personal.value = response.data.personal;
            })
            .catch(error => console.log(error))
    }

    onBeforeMount(async () => {
        await fetchData();
    });

    return { ownerData, personal, declination }
});