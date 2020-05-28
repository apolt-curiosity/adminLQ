/**
  * adminlq.js v0.1.1
  */
const ADMINLQ_TOPBAR_HEIGHT = '50px';
const ADMINLQ_TOPBAR_Z_INDEX = 5;
const ADMINLQ_SIDEBAR_WIDTH = '200px';
const ADMINLQ_SIDEBAR_WIDTH_ACCORDION = '60px';
const ADMINLQ_SIDEBAR_WIDTH_HIDDEN = '0px';
const ADMINLQ_SIDEBAR_Z_INDEX = 15;
const ADMINLQ_MASK_FOR_SIDEBAR_SHOW_Z_INDEX = 10;
const ADMINLQ_MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX = -15;
const ADMINLQ_BACKGROUND_Z_INDEX = -5;
const ADMINLQ_MOBILE_MAX_WIDTH = 768;
const ADMINLQ_TABLET_MAX_WIDTH = 1023;
const ADMINLQ_DESKTOP_MAX_WIDTH = 1215;
const ADMINLQ_WIDESCREEN_MAX_WIDTH = 1407;
const ADMINLQ_FULLHD_MIN_WIDTH = 1408;
const ADMINLQ_APP_BREAKPOINT_WIDTH = ADMINLQ_TABLET_MAX_WIDTH;

const adminlqApp = new Vue ({
    el: '#adminlq-app',
    data: {
        sidebar_hidden_state: window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH,
        sidebar_accordion_state: false,
        sidebar_accordion_translatex: `translateX(${(Number(ADMINLQ_SIDEBAR_WIDTH_ACCORDION.slice(0,(ADMINLQ_SIDEBAR_WIDTH_ACCORDION.length - 2))) - Number(ADMINLQ_SIDEBAR_WIDTH.slice(0,(ADMINLQ_SIDEBAR_WIDTH.length - 2)))).toString()}px)`,
        adminlqTopbarStyle: {
            'height': ADMINLQ_TOPBAR_HEIGHT,
            'z-index': ADMINLQ_TOPBAR_Z_INDEX
        },
        topbarBlankStyle: {
            'width': (window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH)?ADMINLQ_SIDEBAR_WIDTH_HIDDEN:ADMINLQ_SIDEBAR_WIDTH,
        },
        antIndentSvgIconClass: {
            'is-hidden': !(window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH)
        },
        antOutdentSvgIconClass: {
            'is-hidden': window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH
        },
        sidebarStyle: {
            'width': ADMINLQ_SIDEBAR_WIDTH,
            'z-index': ADMINLQ_SIDEBAR_Z_INDEX,
            'transform': (window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH)?`translateX(-${ADMINLQ_SIDEBAR_WIDTH})`:'translateX(0px)'
        },
        sidebarHeaderStyle: {
            'height': ADMINLQ_TOPBAR_HEIGHT
        },
        viewBlankStyle: {
            'width': (window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH)?ADMINLQ_SIDEBAR_WIDTH_HIDDEN:ADMINLQ_SIDEBAR_WIDTH,
        },
        footerBlankStyle: {
            'width': (window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH)?ADMINLQ_SIDEBAR_WIDTH_HIDDEN:ADMINLQ_SIDEBAR_WIDTH,
        },
        maskForSidebarStyle: {
            'z-index': ADMINLQ_MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX
        },
        adminlqBackgroundStyle:{
            'z-index': ADMINLQ_BACKGROUND_Z_INDEX
        }
    },
    methods: {
        topbarSidebarToggle: (event) => {
            if (window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH) {
                adminlqApp.sidebarStyle['transform'] = 'translateX(0px)';
                adminlqApp.maskForSidebarStyle['z-index'] = ADMINLQ_MASK_FOR_SIDEBAR_SHOW_Z_INDEX;
                adminlqApp.antIndentSvgIconClass['is-hidden'] = true;
                adminlqApp.antOutdentSvgIconClass['is-hidden'] = false;
                adminlqApp.sidebar_hidden_state = false;
            }else {
                if (adminlqApp.sidebar_accordion_state) {
                    adminlqApp.topbarBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH;
                    adminlqApp.viewBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH;
                    adminlqApp.footerBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH;
                    adminlqApp.sidebarStyle['transform'] = 'translateX(0px)';
                    adminlqApp.antIndentSvgIconClass['is-hidden'] = true;
                    adminlqApp.antOutdentSvgIconClass['is-hidden'] = false;
                    adminlqApp.sidebar_accordion_state = false;
                }else {
                    adminlqApp.sidebarStyle['transform'] = adminlqApp.sidebar_accordion_translatex;
                    adminlqApp.topbarBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_ACCORDION;
                    adminlqApp.viewBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_ACCORDION;
                    adminlqApp.footerBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_ACCORDION;
                    adminlqApp.antOutdentSvgIconClass['is-hidden'] = true;
                    adminlqApp.antIndentSvgIconClass['is-hidden'] = false;
                    adminlqApp.sidebar_accordion_state = true;
                }
            }
        },
        maskForSidebarClick: (event) => {
            adminlqApp.sidebarStyle['transform'] = `translateX(-${ADMINLQ_SIDEBAR_WIDTH})`;
            adminlqApp.maskForSidebarStyle['z-index'] = ADMINLQ_MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX;
            adminlqApp.antOutdentSvgIconClass['is-hidden'] = true;
            adminlqApp.antIndentSvgIconClass['is-hidden'] = false;
            adminlqApp.sidebar_hidden_state = true;
        }
    }
});
window.onresize = () => {
    if (window.innerWidth <= ADMINLQ_APP_BREAKPOINT_WIDTH) {
        adminlqApp.sidebarStyle['transform'] = `translateX(-${ADMINLQ_SIDEBAR_WIDTH})`;
        adminlqApp.topbarBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_HIDDEN;
        adminlqApp.viewBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_HIDDEN;
        adminlqApp.footerBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_HIDDEN;
        adminlqApp.antOutdentSvgIconClass['is-hidden'] = true;
        adminlqApp.antIndentSvgIconClass['is-hidden'] = false;
        adminlqApp.sidebar_hidden_state = true;
    }else {
        if (adminlqApp.sidebar_accordion_state) {
            adminlqApp.topbarBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_ACCORDION;
            adminlqApp.viewBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_ACCORDION;
            adminlqApp.footerBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH_ACCORDION;
            adminlqApp.sidebarStyle['transform'] = adminlqApp.sidebar_accordion_translatex;
            adminlqApp.antOutdentSvgIconClass['is-hidden'] = true;
            adminlqApp.antIndentSvgIconClass['is-hidden'] = false;
        }else {
            adminlqApp.topbarBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH;
            adminlqApp.viewBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH;
            adminlqApp.footerBlankStyle['width'] = ADMINLQ_SIDEBAR_WIDTH;
            adminlqApp.sidebarStyle['transform'] = 'translateX(0px)';
            adminlqApp.antIndentSvgIconClass['is-hidden'] = true;
            adminlqApp.antOutdentSvgIconClass['is-hidden'] = false;
        }
        adminlqApp.sidebar_hidden_state = false;
    }
    adminlqApp.maskForSidebarStyle['z-index'] = ADMINLQ_MASK_FOR_SIDEBAR_HIDDEN_Z_INDEX;
};