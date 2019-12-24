(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{I4Tu:function(t,s,a){"use strict";a.r(s);var e=a("JFUb"),r=Object(e.a)({data:function(){return{polylines:[{positions:[{lng:105.24884033203125,lat:25.31311798095703,height:1183.3186645507812},{lng:108.24906555725647,lat:30.312892755731806,height:1183.3186645507812}],area:100000.3},{positions:[{lng:109.24884033203125,lat:30.313392639160156,height:1183.804443359375},{lng:112.24906555725632,lat:35.31316741393502,height:1183.684988424182}],area:8000.658},{positions:[{lng:113.24884033203125,lat:35.313655853271484,height:1184.2783203125},{lng:116.24906555725632,lat:40.31343062804635,height:1184.1093236654997}],area:200000.55}]}},methods:{ready:function(t){t.Cesium,t.viewer}}},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Label")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("加载标签图元")]),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:t.ready}},[a("vc-collection-primitive-label",[t._l(t.polylines,(function(t,s){return[a("vc-primitive-label",{key:"label"+s,attrs:{position:t.positions[t.positions.length-1],text:"面积: "+(t.area>1e6?(t.area/1e6).toFixed(2)+"km²":t.area.toFixed(2)+"㎡"),showBackground:"",horizontalOrigin:1}})]}))],2)],1)],1)]],2),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),a("hr"),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),a("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-primitive-label")]),this._v(" 组件用于加载标签图元，标签是场景中与视口对齐的文本， 只能作为 "),s("code",{pre:!0},[this._v("vc-collection-primitive-label")]),this._v(" 的子组件使用。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-collection-primitive-label")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"(polyline, index) of polylines"')]),t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-label")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"polyline.positions[polyline.positions.length-1]"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"'label'+index\"")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"'面积: '+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')\"")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("showBackground")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":horizontalOrigin")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"1"')]),t._v("\n          >")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-label")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-collection-primitive-label")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("polylines")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("105.24884033203125")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("25.313117980957031")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.3186645507812")]),t._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("108.24906555725647")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.312892755731806")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.3186645507812")]),t._v(" }\n            ],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("area")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100000.3")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("109.24884033203125")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30.313392639160156")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.804443359375")]),t._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("112.24906555725632")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35.31316741393502")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1183.6849884241819")]),t._v(" }\n            ],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("area")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("8000.658")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("positions")]),t._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("113.24884033203125")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35.313655853271484")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1184.2783203125")]),t._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("116.24906555725632")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40.313430628046348")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1184.1093236654997")]),t._v(" }\n            ],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("area")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("200000.55")]),t._v("\n          }\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundPadding")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 背景x、y方向偏移量。 "),a("strong",[t._v("结构: { x: number, y: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("disableDepthTestDistance")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 的深度检测距离。")])]),t._v(" "),a("tr",[a("td",[t._v("distanceDisplayCondition")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 的显示条件。. "),a("strong",[t._v("结构: { near: number, far: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("eyeOffset")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("{x: 0, y: 0, z: 0}")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 视角偏移量。 "),a("strong",[t._v("结构：{ x: number, y: number, z: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("fillColor")]),t._v(" "),a("td",[t._v("Object|String|Array")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("white")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 填充颜色。")])]),t._v(" "),a("tr",[a("td",[t._v("font")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("'30px sans-serif'")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label CSS 字体。")])]),t._v(" "),a("tr",[a("td",[t._v("heightReference")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 高度模式。"),a("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),a("tr",[a("td",[t._v("horizontalOrigin")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 水平对齐方式。"),a("strong",[t._v("CENTER: 0, LEFT: 1, RIGHT: -1")])])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("*")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定与 label 关联的信息。")])]),t._v(" "),a("tr",[a("td",[t._v("outlineColor")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("outlineWidth")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 的轮廓宽度。")])]),t._v(" "),a("tr",[a("td",[t._v("pixelOffset")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("{x: 0, y: 0}")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 像素偏移量。 "),a("strong",[t._v("结构：{ x: number, y: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("pixelOffsetScaleByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 偏移量随相机距离改变的参数。"),a("strong",[t._v("结构：{ near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 的位置。 "),a("strong",[t._v("结构：{ lng: number, lat: number, height: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("scale")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 缩放比例。")])]),t._v(" "),a("tr",[a("td",[t._v("scaleByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 的缩放显示参数。 "),a("strong",[t._v("结构： { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("指定 label 是否显示。")])]),t._v(" "),a("tr",[a("td",[t._v("showBackground")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("false")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 是否显示背景。")])]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 文字，支持'\\n'换行符。")])]),t._v(" "),a("tr",[a("td",[t._v("totalScale")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 获取 label 的总比例，该比例是标签的比例乘以所计算的所需字体的相对大小与生成的字形大小的比例。")])]),t._v(" "),a("tr",[a("td",[t._v("translucencyByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 透明度改变参数。 "),a("strong",[t._v("结构： { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("verticalOrigin")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 垂直对齐方式。"),a("strong",[t._v("CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1")])])]),t._v(" "),a("tr",[a("td",[t._v("labelStyle")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 label 绘制风格。"),a("strong",[t._v("FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档："),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Label.html"}},[this._v("Label")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),a("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);s.default=r.exports},j22j:function(t,s,a){t.exports=a("I4Tu")}}]);
//# sourceMappingURL=155.4d22189e0058060d44a7.js.map