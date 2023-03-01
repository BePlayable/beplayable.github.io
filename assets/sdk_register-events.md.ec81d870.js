import{_ as s,c as e,o as n,a}from"./app.8c20473c.js";const A=JSON.parse('{"title":"Introduction to our event listener","description":"","frontmatter":{},"headers":[{"level":2,"title":"Add event listener.","slug":"add-event-listener","link":"#add-event-listener","children":[]},{"level":2,"title":"Add event listener & auto-remove after first emit.","slug":"add-event-listener-auto-remove-after-first-emit","link":"#add-event-listener-auto-remove-after-first-emit","children":[]},{"level":2,"title":"De-Register an event Listener","slug":"de-register-an-event-listener","link":"#de-register-an-event-listener","children":[]}],"relativePath":"sdk/register-events.md"}'),t={name:"sdk/register-events.md"},l=a(`<h1 id="introduction-to-our-event-listener" tabindex="-1">Introduction to our event listener <a class="header-anchor" href="#introduction-to-our-event-listener" aria-hidden="true">#</a></h1><p>We have 3 methods on the SDK, you can <em>add</em> an always listener, listen <em>once</em> or <em>remove</em> a listener.</p><h2 id="add-event-listener" tabindex="-1">Add event listener. <a class="header-anchor" href="#add-event-listener" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eventName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="add-event-listener-auto-remove-after-first-emit" tabindex="-1">Add event listener &amp; auto-remove after first emit. <a class="header-anchor" href="#add-event-listener-auto-remove-after-first-emit" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">once</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eventName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="de-register-an-event-listener" tabindex="-1">De-Register an event Listener <a class="header-anchor" href="#de-register-an-event-listener" aria-hidden="true">#</a></h2><p><code>window.sdk.off()</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eventName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,9),o=[l];function p(r,c,i,d,D,y){return n(),e("div",null,o)}const C=s(t,[["render",p]]);export{A as __pageData,C as default};
