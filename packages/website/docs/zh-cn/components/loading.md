# loading / 加载中

表示动作正在后台运行

<fe-code-show title="默认的" name="ex-loading-default" />

<fe-code-show title="类型" desc="可以指定指示器的类型" name="ex-loading-type" />

<fe-code-show title="尺寸" desc="可以指定指示器的尺寸" name="ex-loading-size" />

<fe-code-show title="样式" desc="可以选择不同样式的指示器" name="ex-loading-load"/>

<fe-attributes>

<fe-attributes-title title="Loading Props" />

| 属性          | 描述             | 类型             | 可选值                                     | 默认      |
| ------------- | ---------------- | ---------------- | ------------------------------------------ | --------- |
| **size**      | 指示器的大小     | `string`         | `'mini', 'small', 'medium', 'large'`       | `medium`  |
| **type**      | 指示器类型       | `string`         | `'default', 'success', 'warning', 'error'` | `default` |
| **color**     | 自定义指示器颜色 | `string`         | `-`                                        | `-`       |
| **load-type** | 不同风格的指示器 | `string`         | `'default','cube','wave'`                  | `default` |
| ...           | 原生属性         | `HTMLAttributes` | `'class','id',...`                         | `-`       |

</fe-attributes>
