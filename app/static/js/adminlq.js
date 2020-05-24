// adminlq.js v0.1.1
const TOPBAR_HEIGHT = '50px';
const TOPBAR_Z_INDEX = 5;
const SIDEBAR_WIDTH = '180px';
const SIDEBAR_Z_INDEX = 15;
const MASK_FOR_SIDEBAR_SHOW_Z_INDEX = 10;
const MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX = -15;
const ADMINLQ_BACKGROUND_Z_INDEX = -5;
const MOBILE_MAX_WIDTH = 768;
const TABLET_MAX_WIDTH = 1023;
const DESKTOP_MAX_WIDTH = 1215;
const WIDESCREEN_MAX_WIDTH = 1407;
const FULLHD_MIN_WIDTH = 1408;
Vue.component('topbar-sidebar-toggle-button', {
    template: '#topbar-sidebar-toggle-button-template',
    methods: {
        topbarSidebarToggle: (event) => {
            if(window.innerWidth <= TABLET_MAX_WIDTH){
                adminlqApp.sidebarStyle['transform'] = 'translateX(0px)';
                adminlqApp.maskForSidebarStyle['z-index'] = MASK_FOR_SIDEBAR_SHOW_Z_INDEX;
            }
        }
    }
});
const adminlqApp = new Vue({
    el: '#adminlq-app',
    data: {
        adminlqTopbarStyle: {
            'height': TOPBAR_HEIGHT,
            'z-index': TOPBAR_Z_INDEX
        },
        topbarBlankStyle: {
            'width': SIDEBAR_WIDTH,
            'height': TOPBAR_HEIGHT
        },
        sidebarStyle: {
            'width': SIDEBAR_WIDTH,
            'z-index': SIDEBAR_Z_INDEX,
            'transform': (window.innerWidth <= TABLET_MAX_WIDTH)?`translateX(-${SIDEBAR_WIDTH})`:'translateX(0px)'
        },
        maskForSidebarStyle: {
            'z-index': MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX
        },
        adminlqBackgroundStyle:{
            'z-index': ADMINLQ_BACKGROUND_Z_INDEX
        }
    },
    methods: {
        maskForSidebarClick: (event) => {
            adminlqApp.sidebarStyle['transform'] = `translateX(-${SIDEBAR_WIDTH})`;
            adminlqApp.maskForSidebarStyle['z-index'] = MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX;
        }
    }
});
window.onresize = () => {
    if(window.innerWidth <= TABLET_MAX_WIDTH){
        adminlqApp.sidebarStyle['transform'] = `translateX(-${SIDEBAR_WIDTH})`;
    }else{
        adminlqApp.sidebarStyle['transform'] = 'translateX(0px)';
    }
    adminlqApp.maskForSidebarStyle['z-index'] = MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX;
};