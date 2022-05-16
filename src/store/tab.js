export default {
    state: {
        isCollapse: false
    },
    // 定义属性方法
    mutations: {
        collapseMenu(state){
            state.isCollapse = !state.isCollapse;
        }
    }
}