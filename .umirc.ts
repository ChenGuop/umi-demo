import { defineConfig } from 'umi';

/*配置路由*/
export default defineConfig({
  // locale: { antd: true },
  layout: {} /*ant-design-pro 的布局*/,
  routes: [
    // { path: '/', component: '@/pages/index' },
    { path: '/', component: '@/pages/products' },
  ],
});
