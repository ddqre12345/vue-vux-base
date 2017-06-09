/**
 * 整个app的路由设置
 */
const router = [{
  path: '/index',  //  引导页
  name: 'index',
  component (resolve) {
    require.ensure(['./pages/index'], () => {
      resolve(require('./pages/index'));
    });
  }
}];
export default router;
