
import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';

window.Alpine=Alpine;

Alpine.plugin(persist);

document.addEventListener('alpine:init', () => {
  Alpine.data('banner', function () {
    return {
      show: this.$persist(false),
      dismissed: this.$persist(false),

      dismiss() {
        this.show=false;
        this.dismissed=true;
      },

      init() {
        if (!this.dismissed) {
          setTimeout(() => {
            this.show=true;
          }, 1500);
        }
      },
    };
  });
  Alpine.data('darkmode', () => ({
    // Define darkmode
    dark:
      localStorage.theme==='dark'||
      (!('theme' in localStorage)&&
        window.matchMedia('(prefers-color-scheme: dark)').matches),

    // Toggle function
    toggleTheme() {
      if (window.localStorage.theme!='dark') {
        document.documentElement.classList.add('dark')
        localStorage.theme='dark'
      } else {
        document.documentElement.classList.remove('dark')
        document.body.style.backgroundColor=''
        window.localStorage.theme=null
      }
      this.dark=!this.dark
      console.log('storage: '+window.localStorage.theme+' | dark: '+this.dark);
    },
  }))
});


Alpine.start();
