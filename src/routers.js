/**
 * 整个app的路由设置
 */
const router = [{
  path: '/index',  //  引导页
  name: 'index',
  component (resolve) {
    require.ensure(['./views/index'], () => {
      resolve(require('./views/index'));
    });
  }
}];
export default router;
