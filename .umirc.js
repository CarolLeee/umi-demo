
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
        antd: true
      },
      dynamicImport: true,
      title: 'rcm-admin',
      dll: true,
      hardSource: true,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
}
