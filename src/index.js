//imports Header and menu
import { DOM_CONTENT } from './initialDOM';
import { DOM_EVENTS } from './DOMEvents'

window.addEventListener('DOMContentLoaded', () => {
    //getTasks();
    //getProjects();
});
document.addEventListener('DOMContentLoaded', () => {
    DOM_CONTENT();
    DOM_EVENTS();
})