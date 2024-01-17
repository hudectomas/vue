import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        darkTheme: false,
    }),
    actions: {
        toggleTheme(value) {
            this.darkTheme = value;
        },
    },
});

export default pinia;