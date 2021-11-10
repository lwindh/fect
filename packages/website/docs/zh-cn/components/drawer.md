# Drawer / 抽屉

固定在屏幕边缘的可交互元素组

### 默认的

:::playground

drawer/default.vue

:::

### 定位

:::playground

drawer/placement.vue

:::

### Loading Props

| 属性                      | 描述                     | 类型      | 可选值                          | 默认    |
| ------------------------- | ------------------------ | --------- | ------------------------------- | ------- |
| **v-model**               | 是否显示弹出层           | `boolean` | `'true','false'`                | `false` |
| **overlay**               | 是否显示遮罩层           | `boolean` | `'true','false'`                | `true`  |
| **placement**             | 弹出位置                 | `string`  | `'top','left','right','bottom'` | `right` |
| **round**                 | 是否显示圆角             | `boolean` | `'true','false'`                | `true`  |
| **disable-overlay-click** | 是否禁用点击遮罩层后关闭 | `boolean` | `'true','false'`                | `false` |
