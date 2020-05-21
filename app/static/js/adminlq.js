window.onresize = () => {
    if((window.innerWidth <= 1023)){
        sidebar.classObject['adminlq-sidebar-hidden'] = true;
    }else{
        sidebar.classObject['adminlq-sidebar-hidden'] = false;
    }
    adminlqSiderbarMask.styleObject['z-index'] = -15;
}
const sidebar = new Vue({
    el: '#adminlq-sidebar',
    data: {
        classObject: {
            'adminlq-sidebar-hidden': (window.innerWidth <= 1023)
        }
    }
})
const headerContentSidebarButton = new Vue({
    el: '#header-content-sidebar-button',
    methods: {
        sidebarToggle: function(event){
            if((window.innerWidth <= 1023)){
                sidebar.classObject['adminlq-sidebar-hidden'] = !sidebar.classObject['adminlq-sidebar-hidden'];
                adminlqSiderbarMask.styleObject['z-index'] = 10;
            }
            
        }
    }
})
const adminlqSiderbarMask = new Vue({
    el: '#adminlq-siderbar-mask',
    data: {
        styleObject: {
            'z-index': -15
        }
    },
    methods: {
        sidebarMaskClick: function(event){
            sidebar.classObject['adminlq-sidebar-hidden'] = true;
            this.styleObject['z-index'] = -15;
        }
    }
})
