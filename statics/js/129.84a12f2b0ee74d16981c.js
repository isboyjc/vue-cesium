(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{ErLW:function(s,t,e){s.exports=e("ZRzG")},ZRzG:function(s,t,e){"use strict";e.r(t);var r=e("eVuF"),a=e.n(r),n={data:function(){return{appearance:null,geometry:null,attributes:null,modelMatrix:null,vertexFormat:null,radius:2e5,modelMatrixOutline:null}},mounted:function(){a.a.all([this.$refs.sphere.createPromise,this.$refs.sphereOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var e=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(e.boundingSphere,t.vm.$parent.modelMatrix):e.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,e=s.viewer;this.viewer=e;var r=t.Matrix4,a=t.PerInstanceColorAppearance,n=t.Transforms,v=t.Cartesian3,l=t.ColorGeometryInstanceAttribute;this.appearance=new a({flat:!0}),this.vertexFormat=a.VERTEX_FORMAT,this.attributes={color:new l(Math.random(),Math.random(),Math.random(),.5)},this.modelMatrix=r.multiplyByTranslation(n.eastNorthUpToFixedFrame(v.fromDegrees(105,35)),new v(0,0,1e5),new r),this.modelMatrixOutline=r.multiplyByTranslation(n.eastNorthUpToFixedFrame(v.fromDegrees(110,35)),new v(0,0,2e5),new r)},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},v=e("JFUb"),l=Object(v.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("SphereGeometry, SphereOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("示例")]),s._v(" "),e("h3",[s._v("加载球体")]),s._v(" "),e("h4",[s._v("预览")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{ref:"viewer",on:{ready:s.ready,LEFT_CLICK:s.LEFT_CLICK}},[e("vc-primitive",{ref:"primitive",attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{ref:"geometry",attrs:{geometry:s.geometry,attributes:s.attributes,modelMatrix:s.modelMatrix},on:{"update:geometry":function(t){s.geometry=t}}},[e("vc-geometry-sphere",{ref:"sphere",attrs:{radius:s.radius,vertexFormat:s.vertexFormat}})],1)],1),s._v(" "),e("vc-primitive",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{attributes:s.attributes,modelMatrix:s.modelMatrixOutline}},[e("vc-geometry-outline-sphere",{ref:"sphereOutline",attrs:{radius:s.radius}})],1)],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),e("h2",[s._v("事件")]),s._v(" "),s._m(7),s._v(" "),e("hr")],1)}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("code",{pre:!0},[s._v("vc-geometry-sphere")]),s._v(" 组件用于加载球体。")]),s._v(" "),e("li",[e("code",{pre:!0},[s._v("vc-geometry-outline-sphere")]),s._v(" 组件用于加载球体轮廓。")]),s._v(" "),e("li",[s._v("需要作为 "),e("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),e("code",{pre:!0},[s._v("vc-primitive")]),s._v("。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primitive"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v(">")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-sphere")]),s._v("\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sphere"')]),s._v("\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radius"')]),s._v("\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertexFormat")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v("\n            >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipsoid")]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrixOutline"')]),s._v(">")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-sphere")]),s._v("\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sphereOutline"')]),s._v("\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radius"')]),s._v("\n            >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-sphere")]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data() {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000")]),s._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrixOutline")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n        }\n      },\n      mounted () {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all([\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.sphere.createPromise,\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.sphereOutline.createPromise,\n        ]).then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(" =>")]),s._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances.reduce("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur.vm.$parent.modelMatrix\n              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n          }, "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n          instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n        })\n      },\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        ready({ Cesium, viewer }) {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer = viewer\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Matrix4, PerInstanceColorAppearance, Transforms, Cartesian3, ColorGeometryInstanceAttribute } = Cesium\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerInstanceColorAppearance({\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(" : "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n          })\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n          }\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix = Matrix4.multiplyByTranslation(\n            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000")]),s._v("),\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Matrix4()\n          )\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrixOutline = Matrix4.multiplyByTranslation(\n            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000")]),s._v("),\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Matrix4()\n          )\n        },\n        LEFT_CLICK(movement) {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer.scene.pick(movement.position)\n          "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(feature)\n        }\n      }\n    }\n  ")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-sphere")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("radius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定球体半径。")])]),s._v(" "),e("tr",[e("td",[s._v("stackPartitions")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定将球体横向划分为层的次数。")])]),s._v(" "),e("tr",[e("td",[s._v("slicePartitions")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("10")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定将球体纵向划分为片的次数。")])]),s._v(" "),e("tr",[e("td",[s._v("vertexFormat")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭球体顶点属性渲染方式。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-sphere")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("radius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定球体半径。")])]),s._v(" "),e("tr",[e("td",[s._v("stackPartitions")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定将球体横向划分为层的次数。")])]),s._v(" "),e("tr",[e("td",[s._v("slicePartitions")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("10")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定将球体纵向划分为片的次数。")])]),s._v(" "),e("tr",[e("td",[s._v("subdivisions")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("200")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定球体轮廓线上的点数，确定弧线的光滑粒度。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/SphereGeometry.html"}},[this._v("SphereGeometry")])]),this._v(", "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/SphereOutlineGeometry.html"}},[this._v("SphereOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("事件名")]),s._v(" "),e("th",[s._v("参数")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=129.84a12f2b0ee74d16981c.js.map