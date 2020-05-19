window.onresize = function kk(){
    if((window.innerWidth<=400)){
        sidebar.classObject['sidebar-hidden'] = true
    }else{
        sidebar.classObject['sidebar-hidden'] = false
    }
}
const sidebar = new Vue({
    el: '#sidebar',
    data: {
        classObject: {
            'sidebar-hidden': (window.innerWidth<=400)
        }
    }

})

const mybutton = new Vue({
    el: '#mybutton',
    methods: {
        show: function(event){
            
            if((window.innerWidth<=400)){
                alert('dd')
                sidebar.classObject['sidebar-hidden'] = !sidebar.classObject['sidebar-hidden']
            }
            
        }
    }
})

