
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
});

Alpine.start();
