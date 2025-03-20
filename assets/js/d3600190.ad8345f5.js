"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[944],{91595:(o,t,e)=>{e.r(t),e.d(t,{CH:()=>d,assets:()=>i,chCodeConfig:()=>a,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Contributing/contributing-component-tests","title":"Contribute component tests","description":"This guide outlines how to structure and implement tests for application components to ensure consistency and adequate coverage.","source":"@site/docs/Contributing/contributing-component-tests.md","sourceDirName":"Contributing","slug":"/contributing-component-tests","permalink":"/contributing-component-tests","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Contribute component tests","slug":"/contributing-component-tests"},"sidebar":"docs","previous":{"title":"Contribute components","permalink":"/contributing-components"},"next":{"title":"Ask for help on the Discussions board","permalink":"/contributing-github-discussions"}}');var s=e(74848),r=e(28453),c=e(24754);const l={title:"Contribute component tests",slug:"/contributing-component-tests"},p=void 0,i={},d={annotations:c.hk,Code:c.Cy},a={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},h=[{value:"File naming",id:"file-naming",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Imports, inheritance, and mandatory methods",id:"imports-inheritance-and-mandatory-methods",level:2},{value:"Testing component functionalities",id:"testing-component-functionalities",level:2},{value:"Example",id:"example",level:3}];function D(o){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...o.components};return d||F("CH",!1),d.Code||F("CH.Code",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,s.jsx)(t.p,{children:"This guide outlines how to structure and implement tests for application components to ensure consistency and adequate coverage."}),"\n",(0,s.jsx)(t.h2,{id:"file-naming",children:"File naming"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The test file should follow the same directory structure as the component being tested, but should be placed in the corresponding unit tests folder."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if the file path for the component is ",(0,s.jsx)(t.code,{children:"src/backend/base/langflow/components/prompts/"}),", then the test file should be located at ",(0,s.jsx)(t.code,{children:"src/backend/tests/unit/components/prompts"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The test file name should use snake case and follow the pattern ",(0,s.jsx)(t.code,{children:"test_<file_name>.py"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if the file to be tested is ",(0,s.jsx)(t.code,{children:"PromptComponent.py"}),", then the test file should be named ",(0,s.jsx)(t.code,{children:"test_prompt_component.py"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Each test file should group tests into classes by component. There should be no standalone test functions in the file\u2014 only test methods within classes."}),"\n",(0,s.jsxs)(t.li,{children:["Class names should follow the pattern ",(0,s.jsx)(t.code,{children:"Test<ClassName>"}),".\nFor example, if the component being tested is ",(0,s.jsx)(t.code,{children:"PromptComponent"}),", then the test class should be named ",(0,s.jsx)(t.code,{children:"TestPromptComponent"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"imports-inheritance-and-mandatory-methods",children:"Imports, inheritance, and mandatory methods"}),"\n",(0,s.jsxs)(t.p,{children:["To standardize comoponent tests, base test classes have been created and should be imported and inherited by all component test classes. These base classes are located in the file ",(0,s.jsx)(t.code,{children:"src/backend/tests/unit/base.py"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To import the base test classes:"}),"\n",(0,s.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" tests.base ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" ComponentTestBaseWithClient",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" tests.base ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" ComponentTestBaseWithoutClient",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsxs)(t.p,{children:["These base classes enforce mandatory methods that the component test classes must implement. The base classes ensure that components built in previous versions continues to work in the current version. By inheriting from one of these base classes, the developer must define the following methods decorated with ",(0,s.jsx)(t.code,{children:"@pytest.fixture"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"component_class:"})," Returns the class of the component to be tested. For example:"]}),"\n"]}),"\n",(0,s.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"@pytest.fixture",props:{style:{color:"#D2A8FF"}}}]},{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"component_class",props:{style:{color:"#D2A8FF"}}},{content:"(self):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    return",props:{style:{color:"#FF7B72"}}},{content:" PromptComponent",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"default_kwargs:"})," Returns a dictionary with the default arguments required to instantiate the component. For example:"]}),"\n"]}),"\n",(0,s.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"@pytest.fixture",props:{style:{color:"#D2A8FF"}}}]},{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"default_kwargs",props:{style:{color:"#D2A8FF"}}},{content:"(self):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    return",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}},{content:'"template"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Hello ',props:{style:{color:"#A5D6FF"}}},{content:"{name}",props:{style:{color:"#79C0FF"}}},{content:'!"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"John"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"_session_id"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"123"',props:{style:{color:"#A5D6FF"}}},{content:"}",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"file_names_mapping:"})," Returns a list of dictionaries representing the relationship between ",(0,s.jsx)(t.code,{children:"version"}),", ",(0,s.jsx)(t.code,{children:"module"}),", and ",(0,s.jsx)(t.code,{children:"file_name"})," that the tested component has had over time. This can be left empty if it is an unreleased component. For example:"]}),"\n"]}),"\n",(0,s.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"@pytest.fixture",props:{style:{color:"#D2A8FF"}}}]},{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"file_names_mapping",props:{style:{color:"#D2A8FF"}}},{content:"(self):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    return",props:{style:{color:"#FF7B72"}}},{content:" [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        {",props:{style:{color:"#C9D1D9"}}},{content:'"version"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.15"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"module"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"prompts"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"file_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Prompt"',props:{style:{color:"#A5D6FF"}}},{content:"},",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        {",props:{style:{color:"#C9D1D9"}}},{content:'"version"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.16"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"module"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"prompts"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"file_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Prompt"',props:{style:{color:"#A5D6FF"}}},{content:"},",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        {",props:{style:{color:"#C9D1D9"}}},{content:'"version"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.17"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"module"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"prompts"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"file_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Prompt"',props:{style:{color:"#A5D6FF"}}},{content:"},",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        {",props:{style:{color:"#C9D1D9"}}},{content:'"version"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.18"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"module"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"prompts"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"file_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Prompt"',props:{style:{color:"#A5D6FF"}}},{content:"},",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        {",props:{style:{color:"#C9D1D9"}}},{content:'"version"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.19"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"module"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"prompts"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"file_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Prompt"',props:{style:{color:"#A5D6FF"}}},{content:"},",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    ]",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsx)(t.h2,{id:"testing-component-functionalities",children:"Testing component functionalities"}),"\n",(0,s.jsx)(t.p,{children:"Once the basic structure of the test file is defined, implement test methods for the component's functionalities. The following guidelines must be followed:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Test method names should be descriptive, use snake case, and follow the pattern ",(0,s.jsx)(t.code,{children:"test_<case_name>"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Each test should follow the ",(0,s.jsx)(t.strong,{children:"Arrange, Act, Assert"})," pattern:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Arrange"}),": Prepare the data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Act"}),": Execute the component."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Assert"}),": Verify the result."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Arrange"}),": Prepare the data."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is ",(0,s.jsx)(t.strong,{children:"recommended"})," to use the fixtures defined in the basic structure, but not mandatory."]}),"\n",(0,s.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"test_post_code_processing",props:{style:{color:"#D2A8FF"}}},{content:"(self, component_class, default_kwargs):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    component ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" component_class(",props:{style:{color:"#C9D1D9"}}},{content:"**",props:{style:{color:"#FF7B72"}}},{content:"default_kwargs)",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Act"}),": Execute the component."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Call the ",(0,s.jsx)(t.code,{children:".to_frontend_node()"})," method of the component prepared during the ",(0,s.jsx)(t.strong,{children:"Arrange"})," step."]}),"\n",(0,s.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"test_post_code_processing",props:{style:{color:"#D2A8FF"}}},{content:"(self, component_class, default_kwargs):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    component ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" component_class(",props:{style:{color:"#C9D1D9"}}},{content:"**",props:{style:{color:"#FF7B72"}}},{content:"default_kwargs)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    frontend_node ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" component.to_frontend_node()",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Assert"}),": Verify the result."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After executing the ",(0,s.jsx)(t.code,{children:".to_frontend_node()"})," method, the resulting data is available for verification in the dictionary ",(0,s.jsx)(t.code,{children:'frontend_node["data"]["node"]'}),". Assertions should be clear and cover the expected outcomes."]}),"\n",(0,s.jsx)(d.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"def ",props:{style:{color:"#FF7B72"}}},{content:"test_post_code_processing",props:{style:{color:"#D2A8FF"}}},{content:"(self, component_class, default_kwargs):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    component ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" component_class(",props:{style:{color:"#C9D1D9"}}},{content:"**",props:{style:{color:"#FF7B72"}}},{content:"default_kwargs)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    frontend_node ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" component.to_frontend_node()",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    node_data ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" frontend_node[",props:{style:{color:"#C9D1D9"}}},{content:'"data"',props:{style:{color:"#A5D6FF"}}},{content:"][",props:{style:{color:"#C9D1D9"}}},{content:'"node"',props:{style:{color:"#A5D6FF"}}},{content:"]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    assert",props:{style:{color:"#FF7B72"}}},{content:" node_data[",props:{style:{color:"#C9D1D9"}}},{content:'"template"',props:{style:{color:"#A5D6FF"}}},{content:"][",props:{style:{color:"#C9D1D9"}}},{content:'"template"',props:{style:{color:"#A5D6FF"}}},{content:"][",props:{style:{color:"#C9D1D9"}}},{content:'"value"',props:{style:{color:"#A5D6FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"== ",props:{style:{color:"#FF7B72"}}},{content:'"Hello ',props:{style:{color:"#A5D6FF"}}},{content:"{name}",props:{style:{color:"#79C0FF"}}},{content:'!"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    assert ",props:{style:{color:"#FF7B72"}}},{content:'"name" ',props:{style:{color:"#A5D6FF"}}},{content:"in",props:{style:{color:"#FF7B72"}}},{content:" node_data[",props:{style:{color:"#C9D1D9"}}},{content:'"custom_fields"',props:{style:{color:"#A5D6FF"}}},{content:"][",props:{style:{color:"#C9D1D9"}}},{content:'"template"',props:{style:{color:"#A5D6FF"}}},{content:"]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    assert ",props:{style:{color:"#FF7B72"}}},{content:'"name" ',props:{style:{color:"#A5D6FF"}}},{content:"in",props:{style:{color:"#FF7B72"}}},{content:" node_data[",props:{style:{color:"#C9D1D9"}}},{content:'"template"',props:{style:{color:"#A5D6FF"}}},{content:"]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    assert",props:{style:{color:"#FF7B72"}}},{content:" node_data[",props:{style:{color:"#C9D1D9"}}},{content:'"template"',props:{style:{color:"#A5D6FF"}}},{content:"][",props:{style:{color:"#C9D1D9"}}},{content:'"name"',props:{style:{color:"#A5D6FF"}}},{content:"][",props:{style:{color:"#C9D1D9"}}},{content:'"value"',props:{style:{color:"#A5D6FF"}}},{content:"] ",props:{style:{color:"#C9D1D9"}}},{content:"== ",props:{style:{color:"#FF7B72"}}},{content:'"John"',props:{style:{color:"#A5D6FF"}}}]}],lang:"python"},annotations:[]}]})]})}function y(o={}){const{wrapper:t}={...(0,r.R)(),...o.components};return t?(0,s.jsx)(t,{...o,children:(0,s.jsx)(D,{...o})}):D(o)}function F(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);