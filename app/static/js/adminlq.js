// adminlq.js v0.1.1
const TOPBAR_HEIGHT = '50px';
const TOPBAR_Z_INDEX = 5;
const SIDEBAR_WIDTH = '180px';
const SIDEBAR_WIDTH_ACCORDION = '60px';
const SIDEBAR_WIDTH_HIDDEN = '0px';
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
            }else{
                if(adminlqApp.sidebar_accordion_state){
                    adminlqApp.topbarBlankStyle['width'] = SIDEBAR_WIDTH;
                    adminlqApp.sidebarStyle['transform'] = 'translateX(0px)';
                    adminlqApp.sidebar_accordion_state = false;
                }else{
                    adminlqApp.topbarBlankStyle['width'] = SIDEBAR_WIDTH_ACCORDION;
                    adminlqApp.sidebarStyle['transform'] = adminlqApp.sidebar_accordion_translatex;
                    adminlqApp.sidebar_accordion_state = true;
                }
            }
        }
    }
});
const adminlqApp = new Vue({
    el: '#adminlq-app',
    data: {
        sidebar_hidden_state: window.innerWidth <= TABLET_MAX_WIDTH,
        sidebar_accordion_state: true,
        sidebar_accordion_translatex: `translateX(${(Number(SIDEBAR_WIDTH_ACCORDION.slice(0,(SIDEBAR_WIDTH_ACCORDION.length - 2))) - Number(SIDEBAR_WIDTH.slice(0,(SIDEBAR_WIDTH.length - 2)))).toString()}px)`,
        adminlqTopbarStyle: {
            'height': TOPBAR_HEIGHT,
            'z-index': TOPBAR_Z_INDEX
        },
        topbarBlankStyle: {
            'width': (window.innerWidth <= TABLET_MAX_WIDTH)?SIDEBAR_WIDTH_HIDDEN:SIDEBAR_WIDTH,
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
        adminlqApp.topbarBlankStyle['width'] = SIDEBAR_WIDTH_HIDDEN;
        adminlqApp.sidebar_hidden_state = true;
    }else{
        if(adminlqApp.sidebar_accordion_state){
            adminlqApp.topbarBlankStyle['width'] = SIDEBAR_WIDTH_ACCORDION;
            adminlqApp.sidebarStyle['transform'] = adminlqApp.sidebar_accordion_translatex;
        }else{
            adminlqApp.topbarBlankStyle['width'] = SIDEBAR_WIDTH;
            adminlqApp.sidebarStyle['transform'] = 'translateX(0px)';
        }
    }
    adminlqApp.maskForSidebarStyle['z-index'] = MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX;
    adminlqApp.sidebar_hidden_state = false;
};