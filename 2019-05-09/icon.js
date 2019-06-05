Vue.component('Icon',{
    props:{
        name:String,
    },
    template:
        `
            <span class="glyphicon" :class="iconName"></span>
        `,
    
    computed:{
        iconName(){
            if(this.name){
                return "glyphicon-"+this.name
            }
            
        }
    }
}) 