(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),i=(n(0),n(182)),o=n(183),c={id:"import-function",title:"Dynamic data import",keywords:["javascript","table","javascript table","gridjs","grid js","import","import data"]},s={id:"examples/import-function",isDocsHomePage:!1,title:"Dynamic data import",description:"The data attribute accepts a function as well:",source:"@site/docs/examples/import-function.md",permalink:"/docs/examples/import-function",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/import-function.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"Import server-side data",permalink:"/docs/examples/server"},next:{title:"Async data import",permalink:"/docs/examples/import-async"}},p=[],d={rightToc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"data")," attribute accepts a function as well:"),Object(i.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  data: () => [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",mdxType:"LiveExample"}))}m.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(185),a=n(184),i=n(0),o=n.n(i),c=n(186);class s extends i.Component{render(){return o.a.createElement(a.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:r.b,html:r.e,h:r.d,gCreateRef:r.c,gComponent:r.a,CodeBlock:a.a,useEffect:i.useEffect,useRef:i.useRef,faker:c,...this.props.scope}})}}}}]);