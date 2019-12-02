Vue.component('task', {

    template: `<li><slot></slot></li><br><h4>{{message}}</h4>`,

    data() {
        return {
            message: "testing"
        };
    }

});

Vue.component('site-header', {

    template: '<h1>Header of site</h1>'

});

Vue.component('my-button', {
	template: `<button @click="check"> {{title}} </button>`,			
	data() {
		return { checked: false, title: 'Check me now!' }
	},
	methods: {
		check() { this.checked = !this.checked; }
	}
});

Vue.component('site-footer', {

    template: '<p style="text-align: center;">This is the footer of site</p>'

});




new Vue({

    el: '#root'

})