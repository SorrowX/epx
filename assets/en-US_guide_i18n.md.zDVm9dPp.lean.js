import{_ as n}from"./chunks/theme.BAjCHcg2.js";import{_ as e,c as t,a as i,Q as l,y as a,o as h}from"./chunks/framework.D-asAmv2.js";const m=JSON.parse('{"title":"Internationalization","description":"","frontmatter":{"title":"Internationalization","lang":"en-US"},"headers":[{"level":2,"title":"Global configuration","slug":"global-configuration","link":"#global-configuration","children":[]},{"level":2,"title":"ConfigProvider","slug":"configprovider","link":"#configprovider","children":[]},{"level":2,"title":"Date and time localization","slug":"date-and-time-localization","link":"#date-and-time-localization","children":[]},{"level":2,"title":"CDN Usage","slug":"cdn-usage","link":"#cdn-usage","children":[]}],"relativePath":"en-US/guide/i18n.md","filePath":"en-US/guide/i18n.md","lastUpdated":1743424350000}'),r={name:"en-US/guide/i18n.md"};function k(o,p,d,u,g,E){const s=n;return h(),t("div",null,[i("h1",{id:"internationalization",tabindex:"-1"},[l("Internationalization "),i("a",{class:"header-anchor vp-link",href:"#internationalization","aria-label":'Permalink to "Internationalization"'},"​")]),i("p",null,[l("Element Plus components are using English "),i("strong",null,"by default"),l(", if you wish you use other languages, you can get you answer by keep reading.")]),i("h2",{id:"global-configuration",tabindex:"-1"},[l("Global configuration "),i("a",{class:"header-anchor vp-link",href:"#global-configuration","aria-label":'Permalink to "Global configuration"'},"​")]),i("p",null,"Element Plus provides global configurations"),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," zhCn "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/es/locale/lang/zh-cn'")]),l(`
`),i("span",{class:"line"}),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus, {")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  locale: zhCn,")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("h2",{id:"configprovider",tabindex:"-1"},[l("ConfigProvider "),i("a",{class:"header-anchor vp-link",href:"#configprovider","aria-label":'Permalink to "ConfigProvider"'},"​")]),i("p",null,"Element Plus also provides a Vue component [ConfigProvider] for globally configuring locale and other settings."),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :locale"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"zhCn"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"app"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"}),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElConfigProvider } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," zhCn "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/es/locale/lang/zh-cn'")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("h2",{id:"date-and-time-localization",tabindex:"-1"},[l("Date and time localization "),i("a",{class:"header-anchor vp-link",href:"#date-and-time-localization","aria-label":'Permalink to "Date and time localization"'},"​")]),i("p",null,[l("We use "),i("a",{href:"https://day.js.org/docs/en/i18n/i18n",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("Day.js"),a(s,{class:"link-icon"})]),l(" library to manage date and time in components like "),i("code",null,"DatePicker"),l(". It is important to set a proper locale in Day.js to make the internationalization fully works. You have to import Day.js's locale config separately.")]),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'dayjs/locale/zh-cn'")])])])]),i("h2",{id:"cdn-usage",tabindex:"-1"},[l("CDN Usage "),i("a",{class:"header-anchor vp-link",href:"#cdn-usage","aria-label":'Permalink to "CDN Usage"'},"​")]),i("p",null,"If you are using Element Plus via CDN, then you need to do this, let's again take unpkg as an example"),i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//unpkg.com/element-plus/dist/locale/zh-cn"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus, {")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    locale: ElementPlusLocaleZhCn,")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  })")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("p",null,"Full documentation refer to: [ConfigProvider]"),i("p",null,[i("a",{href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("Supported Language List"),a(s,{class:"link-icon"})])]),i("ul",{class:"language-list"},[i("li",null,"Simplified Chinese (zh-cn)"),i("li",null,"American English (en)"),i("li",null,"Azerbaijani (az)"),i("li",null,"German (de)"),i("li",null,"Portuguese (pt)"),i("li",null,"Spanish (es)"),i("li",null,"Danish (da)"),i("li",null,"French (fr)"),i("li",null,"Norwegian (nb-NO)"),i("li",null,"Traditional Chinese (zh-tw)"),i("li",null,"Italian (it)"),i("li",null,"Korean (ko)"),i("li",null,"Japanese (ja)"),i("li",null,"Dutch (nl)"),i("li",null,"Vietnamese (vi)"),i("li",null,"Russian (ru)"),i("li",null,"Turkish (tr)"),i("li",null,"Brazilian Portuguese (pt-br)"),i("li",null,"Farsi (fa)"),i("li",null,"Thai (th)"),i("li",null,"Indonesian (id)"),i("li",null,"Bulgarian (bg)"),i("li",null,"Pashto (pa)"),i("li",null,"Polish (pl)"),i("li",null,"Finnish (fi)"),i("li",null,"Swedish (sv)"),i("li",null,"Greek (el)"),i("li",null,"Slovak (sk)"),i("li",null,"Catalunya (ca)"),i("li",null,"Czech (cs)"),i("li",null,"Ukrainian (uk)"),i("li",null,"Turkmen (tk)"),i("li",null,"Tamil (ta)"),i("li",null,"Latvian (lv)"),i("li",null,"Afrikaans (af)"),i("li",null,"Estonian (et)"),i("li",null,"Slovenian (sl)"),i("li",null,"Arabic (ar)"),i("li",null,"Hebrew (he)"),i("li",null,"Lithuanian (lt)"),i("li",null,"Mongolian (mn)"),i("li",null,"Kazakh (kk)"),i("li",null,"Hungarian (hu)"),i("li",null,"Romanian (ro)"),i("li",null,"Kurdish (ku)"),i("li",null,"Kurdish (ckb)"),i("li",null,"Uighur (ug-cn)"),i("li",null,"Khmer (km)"),i("li",null,"Serbian (sr)"),i("li",null,"Basque (eu)"),i("li",null,"Kyrgyz (ky)"),i("li",null,"Armenian (hy-am)"),i("li",null,"Croatian (hr)"),i("li",null,"Esperanto (eo)"),i("li",null,"Bengali (bn)"),i("li",null,"Malay (ms)")]),i("p",null,[l("If you need any other languages, "),i("a",{href:"https://github.com/element-plus/element-plus/pulls",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("PR"),a(s,{class:"link-icon"})]),l(" is always welcomed, you only need to add a language file at "),i("a",{href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noreferrer"},[l("here"),a(s,{class:"link-icon"})]),l(".")])])}const f=e(r,[["render",k]]);export{m as __pageData,f as default};
