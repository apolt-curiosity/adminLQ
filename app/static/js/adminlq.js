window.onresize = () => {
    if((window.innerWidth <= 1023)){
        leftbar.classObject['adminlq-leftbar-hidden'] = true
    }else{
        leftbar.classObject['adminlq-leftbar-hidden'] = false 
    }
}
// const topbarContent = new Vue({
//     el: '#topbar-blank',
//     data: {
//         classObject: {
//             'topbar-content-margin': !(window.innerWidth <= 1023)
//         }
//     }

// })

const leftbar = new Vue({
    el: '#adminlq-leftbar',
    data: {
        classObject: {
            'adminlq-leftbar-hidden': (window.innerWidth <= 1023)
        }
    }

})

const mybutton = new Vue({
    el: '#mybutton',
    methods: {
        show: function(event){
            
            if((window.innerWidth<=1023)){
                alert('dd')
                sidebar.classObject['sidebar-hidden'] = !sidebar.classObject['sidebar-hidden']
            }
            
        }
    }
})

