//import '/assets/css/main.scss'

// Focus Visible Polyfill
import 'focus-visible'

// Internal Modules
import './modules/nav'
import './modules/alpine'


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
try {
  if (
    localStorage.theme==='dark'||
    (!('theme' in localStorage)&&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
} catch (_) {}
