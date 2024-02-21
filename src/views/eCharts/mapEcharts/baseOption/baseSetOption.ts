// 所有基础项配置
export const baseSetOption = {
    // geo-地理坐标系组件，用于地图的绘制，支持在地理坐标系上绘制散点图、线集
    geoRowOption: {
        show: true, // 是否显示地理坐标系组件
        map: 'china', // 需要和使用 registerMap 时注册的地图名称相同，否则无法正常渲染地图
        scaleLimit: {
            // 滚轮缩放的极限控制，通过min, max最小和最大的缩放值，默认的缩放为1
            min: 1, // 最小的缩放值
            max: 50 // 最大的缩放值
        },
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        aspectScale: 0.75 , // 用于 scale 地图的长宽比，如果设置了projection则无效
        label: {
            // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            show: true,     // 是否显示标签
            // formatter: '{b}',  // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
            color: '#FFFFFF' , // 文字的颜色
        },
        itemStyle: {
            // 地图区域的多边形 图形样式
            areaColor: '#8DBFEB', // 地图区域（底色）的颜色
            borderType: 'dashed', // 描边类型
            borderColor: '#FFFFFF', // 图形的描边颜色。支持的颜色格式同 color，不支持回调函数
        },
        emphasis: {
            // 高亮状态下的多边形和标签样式
            label: {
                color: '#8DBFEB'
            },
            itemStyle: {
                areaColor: 'pink', // 地图区域（底色）的颜色
            }
        },
        selectedMode: false,    // 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选
        // select: {
        //     // 选中状态下的多边形和标签样式
        //     disabled: false,    // 是否可以被选中。在开启selectedMode的时候有效，可以用于关闭部分数据
        //     label: {},
        //     itemStyle: {}
        // }
        regions: [
            // 在地图中对特定的区域配置样式
            {
                name: '南海诸岛',   // 地图区域的名称，例如 '广东'，'浙江'
                value: 0,
                itemStyle: {
                    normal: {
                        opacity: 1,
                        label: {
                            show: false
                        }
                    }
                }
            }
        ],
        silent: false // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件
    }
}