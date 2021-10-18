# Input / 输入框

处理用户的输入数据

<fe-code-show title="默认的" name="ex-input-default" desc="基础的输入字段" />
<fe-code-show title="大小" name="ex-input-size" desc="不同大小的输入框" />
<fe-code-show
  title="标签"
  name="ex-input-inline-label"
  desc="在输入框内显示短小地行内文本"
/>
<fe-code-show
  title="禁用交互"
  name="ex-input-unwriteable"
  desc="禁用输入框地所有交互效果"
/>
<fe-code-show
  title="块级标签"
  name="ex-input-block-label"
  desc="为标签自定义更多样式"
/>
<fe-code-show
  title="清除按钮"
  name="ex-input-clearable"
  desc="在输入框内增加一个用于清除文本的按钮"
/>
<fe-code-show title="密码" name="ex-input-password" desc="显示或隐藏密码文本" />

<fe-attributes>

<fe-attributes-title title="Input Props" />

| 属性           | 描述                                                                            | 类型                | 可选值             | 默认      |
| -------------- | ------------------------------------------------------------------------------- | ------------------- | ------------------ | --------- |
| **v-model**    | 可绑定的输入值                                                                  | `'string','number'` | `-`                | `''`      |
| **prefix**     | 左侧文本标签                                                                    | `'string','number'` | `-`                | `-`       |
| **suffix**     | 右侧文本标签                                                                    | `'string','number'` | `-`                | `-`       |
| **change**     | 输入框变化事件                                                                  | `(e)=>void`         | `-`                | `-`       |
| **clearClick** | 清除按钮的点击事件                                                              | `(e)=>void`         | `-`                | `-`       |
| **clearable**  | 是否展示清除按钮                                                                | `'boolean'`         | `'true','false'`   | `'false'` |
| ...            | 原生属性[文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | `InputAttributes`   | `'class','id',...` | `-`       |

</fe-attributes>
