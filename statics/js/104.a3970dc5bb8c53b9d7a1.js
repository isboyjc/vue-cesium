(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"/UsZ":function(t,s,e){"use strict";e.r(s);var v=e("JFUb"),a=Object(v.a)({data:function(){return{description:"Hello Vue Cesium",label1:{},pixelOffset1:{x:0,y:20},position1:{lng:114,lat:40,height:3e5}}},methods:{ready:function(t){t.Cesium,t.viewer}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("LabelGraphics")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载标签")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-entity",{attrs:{position:t.position1,description:t.description,label:t.label1},on:{"update:label":function(s){t.label1=s}}},[e("vc-graphics-label",{attrs:{text:t.description,font:"20px sans-serif",pixelOffset:t.pixelOffset1}})],1)],1)],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-graphics-label")]),this._v(" 组件用于加载二维标签文本。需要作为 "),s("code",{pre:!0},[this._v("vc-entity")]),this._v(" 的子组件使用。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":label.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"label1"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-label")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":text")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("font")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"20px sans-serif"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":pixelOffset")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"pixelOffset1"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-label")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("description")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label1")]),t._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pixelOffset1")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("x")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("y")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position1")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("114.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300000.0")]),t._v(" }\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 是否显示。")])]),t._v(" "),e("tr",[e("td",[t._v("text")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 文字，支持'\\n'换行符。")])]),t._v(" "),e("tr",[e("td",[t._v("font")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("'30px sans-serif'")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label CSS 字体。")])]),t._v(" "),e("tr",[e("td",[t._v("labelStyle")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 绘制风格。"),e("strong",[t._v("FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2")])])]),t._v(" "),e("tr",[e("td",[t._v("scale")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("1.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 缩放比例。")])]),t._v(" "),e("tr",[e("td",[t._v("showBackground")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 是否显示背景。")])]),t._v(" "),e("tr",[e("td",[t._v("backgroundColor")]),t._v(" "),e("td",[t._v("Object|String|Array")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("[0.165, 0.165, 0.165, 0.8]")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 背景颜色。")])]),t._v(" "),e("tr",[e("td",[t._v("backgroundPadding")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("{x: 7, y: 5}")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 背景偏移量。")])]),t._v(" "),e("tr",[e("td",[t._v("pixelOffset")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("{x: 0, y: 0}")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 像素偏移量。 "),e("strong",[t._v("结构：{ x: number, y: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("eyeOffset")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("{x: 0, y: 0, z: 0}")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 视角偏移量。 "),e("strong",[t._v("结构：{ x: number, y: number, z: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("horizontalOrigin")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 水平对齐方式。"),e("strong",[t._v("CENTER: 0, LEFT: 1, RIGHT: -1")])])]),t._v(" "),e("tr",[e("td",[t._v("verticalOrigin")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 垂直对齐方式。"),e("strong",[t._v("CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1")])])]),t._v(" "),e("tr",[e("td",[t._v("heightReference")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 高度模式。"),e("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),e("tr",[e("td",[t._v("fillColor")]),t._v(" "),e("td",[t._v("Object|String|Array")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("white")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 填充颜色。")])]),t._v(" "),e("tr",[e("td",[t._v("outlineColor")]),t._v(" "),e("td",[t._v("Object|String|Array")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("black")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 轮廓线颜色。")])]),t._v(" "),e("tr",[e("td",[t._v("outlineWidth")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("1.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 轮廓线宽度。")])]),t._v(" "),e("tr",[e("td",[t._v("translucencyByDistance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 透明度随相机距离改变的参数。"),e("strong",[t._v("结构：{ near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("pixelOffsetScaleByDistance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 偏移量随相机距离改变的参数。"),e("strong",[t._v("结构：{ near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("scaleByDistance")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 缩放随相机距离改变的参数。"),e("strong",[t._v("结构：{ near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("distanceDisplayCondition")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 相机距离的显示条件。"),e("strong",[t._v("结构：{ near: number, far: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("disableDepthTestDistance")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 的深度测试距离。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档： "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html"}},[this._v("LabelGraphics")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),e("tr",[e("td",[t._v("definitionChanged")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("每当更改或修改属性或子属性时触发该事件。")])])])])}],!1,null,null,null);s.default=a.exports},jAZM:function(t,s,e){t.exports=e("/UsZ")}}]);
//# sourceMappingURL=104.a3970dc5bb8c53b9d7a1.js.map