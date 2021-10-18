<fe-code-show
  title="默认的"
  name="ex-progress-default"
/>

<fe-code-show
  title="类型"
  desc="我们预置了一些不同风格的进度条"
  name="ex-progress-types"
/>

<fe-code-show
  title="动态色彩"
  desc="你可以指定进度条在任何范围内的颜色"
  name="ex-progress-colors"
/>

<fe-attributes>
<fe-attributes-title title="Progress Props" />

| 属性       | 描述               | 类型                        | 可选值                                     | 默认      |
| ---------- | ------------------ | --------------------------- | ------------------------------------------ | --------- |
| **value**  | 进度条当前数值     | `number`                    | `-`                                        | `0`       |
| **max**    | 最大值             | `'number','string'`         | `-`                                        | `100`     |
| **colors** | 在范围内自定义颜色 | `{ [key: number]: string }` | `-`                                        | `{}`      |
| **type**   | 预定义的状体类型   | `'string'`                  | `'default', 'success', 'warning', 'error'` | `default` |
| ...        | 原生属性           | `HTMLAttributes`            | `'class','id',...`                         | `-`       |

</fe-attributes>
