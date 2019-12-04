Vue.component('modal', {
    template: `
    
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
                <p>TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil quas, fuga a hic nostrum dolorem corrupti, neque est veniam officia deserunt?</p>
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
    </div>
    
    `
});

new Vue({

    el: '#root',

    data: {

            showModal: false

    }

});



