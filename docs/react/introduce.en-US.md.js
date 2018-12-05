webpackJsonp([60],{1843:function(n,t){n.exports={content:["article",["p","Following the Ant Design specification, we developed a React UI library ",["code","Choerodon UI"]," that contains a set of high quality components and demos for building rich, interactive user interfaces."],["h2","Features"],["ul",["li",["p","An enterprise-class UI design language for web applications."]],["li",["p","A set of high-quality React components out of the box."]],["li",["p","Written in TypeScript with complete defined types."]],["li",["p","The whole package of development and design resources and tools."]]],["h2","Environment Support"],["ul",["li",["p","Modern browsers and Internet Explorer 9+ (with ",["a",{title:null,href:"https://ant.design/docs/react/getting-started#Compatibility"},"polyfills"],")"]],["li",["p","Server-side Rendering"]],["li",["p",["a",{title:null,href:"http://electron.atom.io/"},"Electron"]]]],["h2","Version"],["ul",["li",["p","Stable: ",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"https://img.shields.io/npm/v/antd.svg?style=flat-square",alt:"npm package"}]]]]],["p","You can subscribe to this feed for new version notifications: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/releases.atom"},"https://github.com/ant-design/ant-design/releases.atom"]],["h2","Installation"],["h3","Using npm or yarn"],["p",["strong","We recommend using npm or yarn to install"],"\uff0cit not only makes development easier\uff0cbut also allow you to take advantage of the rich ecosystem of Javascript packages and tooling."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> choerodon-ui --save'},["code","$ npm install choerodon-ui --save"]],["pre",{lang:"bash",highlighted:"$ yarn add choerodon-ui"},["code","$ yarn add choerodon-ui"]],["p","If you are in a bad network environment\uff0cyou can try other registries and tools like ",["a",{title:null,href:"https://github.com/cnpm/cnpm"},"cnpm"],"."],["h3","Import in Browser"],["p","Add ",["code","script"]," and ",["code","link"]," tags in your browser and use the global variable ",["code","antd"],"."],["p","We provide ",["code","antd.js"]," ",["code","antd.css"]," and ",["code","antd.min.js"]," ",["code","antd.min.css"]," under ",["code","choerodon-ui/dist"]," in choerodon-ui's npm package. You can also download these files directly from ",["a",{title:null,href:"https://cdnjs.com/libraries/choerodon-ui"},["img",{title:null,src:"https://img.shields.io/cdnjs/v/choerodon-ui.svg?style=flat-square",alt:"CDNJS"}]]," or ",["a",{title:null,href:"https://unpkg.com/"},"unpkg"],"."],["blockquote",["p",["strong","We strongly discourage loading the entire files"]," this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as ",["a",{title:null,href:"https://webpack.github.io/"},"webpack"],", which will make it easy to import only the parts of antd that you are using."]],["h2","Usage"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { DatePicker } from 'choerodon-ui';\nReactDOM.render(<DatePicker />, mountNode);"]],["p","And import stylesheets manually:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'choerodon-ui/dist/antd.css\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// or \'choerodon-ui/dist/antd.less\'</span>'},["code","import 'choerodon-ui/dist/antd.css';  // or 'choerodon-ui/dist/antd.less'"]],["h3","Use modularized antd"],["ul",["li",["p","Use ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," (Recommended)"],["pre",{lang:"json",highlighted:'// .babelrc or babel-loader option\n<span class="token punctuation">{</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"choerodon-ui"</span><span class="token punctuation">,</span> <span class="token property">"libraryDirectory"</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span> <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> // `style<span class="token operator">:</span> <span class="token boolean">true</span>` for less\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { "libraryName": "choerodon-ui", "libraryDirectory": "es", "style": "css" }] // `style: true` for less\n  ]\n}']],["blockquote",["p","Note: Don't set ",["code","libraryDirectory"]," if you are using webpack 1."]],["p"," This allows you to import components from choerodon-ui without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets."],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// import js and css modularly, parsed by babel-plugin-import</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>'},["code","// import js and css modularly, parsed by babel-plugin-import\nimport { DatePicker } from 'choerodon-ui';"]]],["li",["p","Manually import"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/lib/date-picker\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// for js</span>\n<span class="token keyword">import</span> <span class="token string">\'choerodon-ui/lib/date-picker/style/css\'</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// for css</span>\n<span class="token comment" spellcheck="true">// import \'choerodon-ui/lib/date-picker/style\';         // that will import less</span>'},["code","import DatePicker from 'choerodon-ui/lib/date-picker';  // for js\nimport 'choerodon-ui/lib/date-picker/style/css';        // for css\n// import 'choerodon-ui/lib/date-picker/style';         // that will import less"]]]],["h3","TypeScript"],["ul",["li",["p","Don't use @types/antd, as antd provides a built-in ts definition already."]]],["h2","Links"],["ul",["li",["p",["a",{title:null,href:"/"},"Home Page"]]],["li",["p",["a",{title:null,href:"/docs/react/introduce"},"Components"]]],["li",["p",["a",{title:null,href:"/changelog"},"Change Log"]]],["li",["p",["a",{title:null,href:"http://scaffold.ant.design"},"Scaffold Market"]]],["li",["p",["a",{title:null,href:"http://ant.design/"},"Ant Design"]]],["li",["p",["a",{title:null,href:"http://react-component.github.io/"},"rc-components"]]],["li",["p",["a",{title:null,href:"http://mobile.ant.design"},"Mobile UI"]]],["li",["p",["a",{title:null,href:"https://motion.ant.design"},"Motion"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/Development"},"Developer Instruction"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B"},"Versioning Release Note"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/FAQ"},"FAQ"]]],["li",["p",["a",{title:null,href:"https://u.ant.design/codesandbox-repro"},"CodeSandbox template"]," for bug reports"]],["li",["p",["a",{title:null,href:"https://github.com/websemantics/awesome-ant-design"},"Awesome Ant Design"]]],["li",["p",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme"]]]]],meta:{order:0,title:"Choerodon UI of React",filename:"docs/react/introduce.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Features",title:"Features"},"Features"]],["li",["a",{className:"bisheng-toc-h2",href:"#Environment-Support",title:"Environment Support"},"Environment Support"]],["li",["a",{className:"bisheng-toc-h2",href:"#Version",title:"Version"},"Version"]],["li",["a",{className:"bisheng-toc-h2",href:"#Installation",title:"Installation"},"Installation"]],["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#Links",title:"Links"},"Links"]]]}}});