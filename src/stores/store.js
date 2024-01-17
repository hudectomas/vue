import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: 'main',
    state: () => ({
        porovnaneSluzby: [],
    }),
    actions: {
        addToComparison(sluzba) {
            this.porovnaneSluzby.push(sluzba);
            console.log(this.porovnaneSluzby);
        },
        removeFromComparison(id) {
            this.porovnaneSluzby = this.porovnaneSluzby.filter(sluzba => sluzba.id !== id);
            console.log(this.porovnaneSluzby); // Pridané pre kontrolu, či sa stav správne aktualizuje
        },
        clearComparison() {
            this.porovnaneSluzby = [];
        },
    },
});