import{_ as e,c as s,o as t,a}from"./app.737d6641.js";const v=JSON.parse('{"title":"Welcome","description":"","frontmatter":{},"headers":[{"level":2,"title":"Events vs. API","slug":"events-vs-api"},{"level":2,"title":"Step. 1: Add addEventListener","slug":"step-1-add-addeventlistener"}],"relativePath":"guide/getting-started.md"}'),n={name:"guide/getting-started.md"},o=a(`<h1 id="welcome" tabindex="-1">Welcome <a class="header-anchor" href="#welcome" aria-hidden="true">#</a></h1><p>Thank you for getting into our documentation, we try to run this documentation site as close to a open source ideology as possible - meaning you are welcome to get into the <a href="https://github.com/leadfamly/sdk-docs" target="_blank" rel="noopener noreferrer">Github repository</a> and create an issue if you have suggestions or want to report a bug in the documentation. If you want to contribute with example code</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Our <code>SDK</code> is in it&#39;s early stages, this includes the documentation, so we keep adding features.</p></div><h2 id="events-vs-api" tabindex="-1">Events vs. API <a class="header-anchor" href="#events-vs-api" aria-hidden="true">#</a></h2><p>Our sdk contains by 2 ways of communicating - listening to our <code>Events</code> or using our <code>API</code> located on the window.sdk object the SDK contains Event communcation and by users current context, and only what the user is allowed to see.</p><h2 id="step-1-add-addeventlistener" tabindex="-1">Step. 1: Add addEventListener <a class="header-anchor" href="#step-1-add-addeventlistener" aria-hidden="true">#</a></h2><p>when you want to communicate to our SDK, it&#39;s important to listen to the window event <code>lf-sdk-ready</code> first.</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lf-sdk-ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// now window.sdk is available</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,8),l=[o];function r(i,c,d,p,u,h){return t(),s("div",null,l)}var g=e(n,[["render",r]]);export{v as __pageData,g as default};
