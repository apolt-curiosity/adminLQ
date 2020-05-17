var f = document.getElementById('sidebar');
        // document.addEventListener('click',function(){
        //     if(window.getComputedStyle(f,null)['marginLeft']=='200px'){
        //             f.style.marginLeft = 0 + 'px';
        //         }
        // });
        // window.onresize = function(){
        //     f.style.marginLeft ='0px';
        // };

       
        document.getElementById('mybutton').addEventListener('click',function(){
            // document.getElementById('ddd').classList.add('animate__fadeOutLeft');
            // document.getElementById('eee').classList.add('animate__fadeInRight');
            // document.getElementById('ddd').classList.remove('is-3');
            // if(window.getComputedStyle(f,null)['left']=='-200px'){
            //     if(window.getComputedStyle(f,null)['marginLeft']=='200px'){
            //         f.style.marginLeft = 0 + 'px';
            //     }else{
            //         f.style.marginLeft = 200 + 'px';
            //     }
                
            // }
            document.getElementById('sidebar').classList.add('sidebar-transtion');
        });

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }


// const routes = [
//     { path: '/foo', component: {template:'#foo'} },
//     { path: '/bar', component: Bar }
// ]


// const router = new VueRouter({
//     routes:routes 
// })


// const app = new Vue({
//     router
// }).$mount('#app')