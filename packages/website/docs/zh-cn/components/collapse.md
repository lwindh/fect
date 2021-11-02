# Collapse / 折叠框

折叠显示大段的文本或组件内容，通常也被称为手风琴

<playground
  title="默认的"
  desc="默认只展示标题"
  name="ex-collapse-default"
/>

<playground
  title="展开的"
  desc="指定初始时如何显示组件"
  name="ex-collapse-visible"
/>

<playground
  title="阴影"
  desc="给折叠框设置阴影凸显层级"
  name="ex-collapse-shadow"
/>

<playground
  title="手风琴"
  desc="一组具有手风琴效果的折叠框"
  name="ex-collapse-accordion"
/>

### Collapse Props

| 属性                | 描述                 | 类型          | 可选值           | 默认    |
| ------------------- | -------------------- | ------------- | ---------------- | ------- |
| **title(必须的)**   | 标题值               | `string`      | `-`              | `-`     |
| **subtitle**        | 子标题内容           | `string`      | `-`              | `-`     |
| **subTag**          | 自定义子标题容器元素 | `HTMLElement` | `-`              | `-`     |
| **v-model:visible** | 控制折叠框展开       | `boolean`     | `'true','false'` | `false` |
| **shadow**          | 设置阴影模式         | `boolean`     | `'true','false'` | `false` |

### CollapseGroup Props

| 属性          | 描述                          | 类型       | 可选值           | 默认     |
| ------------- | ----------------------------- | ---------- | ---------------- | -------- |
| **accordion** | 手风琴模式 (一次最多打开一个) | `boolean`  | `'true','false'` | `'true'` |
| **v-model**   | 当前激活的面板                | `number[]` | `-`              | `[]`     |
