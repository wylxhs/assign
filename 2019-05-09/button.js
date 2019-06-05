Vue.component('Button',{
    props:{
        color:{
            type:String,
            default:'default',
        },
        size:{
            type:String,
        },
        value:null,
    },
    template:
        `
            <button class="btn" :class="['btn-' + color,{
                'btn-lg' : size === 'lg',
                'btn-sm' : size === 'sm',
                'btn-xs' : size === 'xs'
            }]">
            {{color}}
                <slot></slot>
            </button>
        `,
    

})