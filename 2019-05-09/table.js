Vue.component('Table',{
    props:{
        column:Array,
        data:Array,
        striped:Boolean,
        bordered:Boolean,
        hover:Boolean,
        condensed:Boolean
    },
    template:
        `
            <table class="table" 
                :class="{
                    'table-striped':striped,
                    ' table-bordered':bordered,
                    ' table-hover':hover,
                    ' table-condensed':condensed
                }">
                <thead>
                    <tr>
                        <th v-for="item in column">{{item}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ite in data">
                        <td v-for="i_item in ite">{{i_item}}</td>                        
                    </tr>
                </tbody>
            </table>
        `,
    

})