import{_ as s,c as a,o as n,a as e}from"./app.8c20473c.js";const h=JSON.parse('{"title":"formSubmit","description":"","frontmatter":{},"headers":[{"level":2,"title":"suspense()","slug":"suspense","link":"#suspense","children":[{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"formFields Array","slug":"formfields-array","link":"#formfields-array","children":[{"level":3,"title":"example","slug":"example-1","link":"#example-1","children":[]}]},{"level":2,"title":"section Object","slug":"section-object","link":"#section-object","children":[{"level":3,"title":"example","slug":"example-2","link":"#example-2","children":[]}]},{"level":2,"title":"Interfaces","slug":"interfaces","link":"#interfaces","children":[{"level":3,"title":"FormField","slug":"formfield","link":"#formfield","children":[]},{"level":3,"title":"FlowPage","slug":"flowpage","link":"#flowpage","children":[]},{"level":3,"title":"Row","slug":"row","link":"#row","children":[]},{"level":3,"title":"Column","slug":"column","link":"#column","children":[]},{"level":3,"title":"Addon","slug":"addon","link":"#addon","children":[]}]}],"relativePath":"sdk/formsubmit-event.md"}'),l={name:"sdk/formsubmit-event.md"},t=e(`<h1 id="formsubmit" tabindex="-1">formSubmit <a class="header-anchor" href="#formsubmit" aria-hidden="true">#</a></h1><h2 id="suspense" tabindex="-1">suspense() <a class="header-anchor" href="#suspense" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">IMPORTANT</p><p>On this event its very important to notice that <code>suspense</code> function has to be implemented if you are listening to the event. it will take all functions (that returns a Promise) inside and waiting for them to resolve - it&#39;s required in the suspense function to have a <strong>minimum of 1</strong> promise getting <code>reolved</code> or <code>rejected</code>!</p></div><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">suspense</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"></span></code></pre></div><h3 id="example" tabindex="-1">example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lf-sdk-ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">formSubmit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">suspense</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">async</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">someAsynchronousAction</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Note:</strong> please see <a href="https://github.com/BePlayable/beplayable.github.io/blob/main/examples/promiseUsage.js" target="_blank" rel="noreferrer">promise example</a> form more detailed usage.</p><h2 id="formfields-array" tabindex="-1">formFields Array <a class="header-anchor" href="#formfields-array" aria-hidden="true">#</a></h2><p>A getter that returns the all the form fields in the registration form getting submitted.</p><h3 id="example-1" tabindex="-1">example <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lf-sdk-ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">formSubmit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">formFields</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">field</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">field</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">label</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">field</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="section-object" tabindex="-1">section Object <a class="header-anchor" href="#section-object" aria-hidden="true">#</a></h2><p>A getter that returns the current section that unfolds content inside.</p><h3 id="example-2" tabindex="-1">example <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lf-sdk-ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">formSubmit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><h3 id="formfield" tabindex="-1">FormField <a class="header-anchor" href="#formfield" aria-hidden="true">#</a></h3><table><thead><tr><th>property</th><th>access</th><th>type</th></tr></thead><tbody><tr><td>id</td><td>read only</td><td><code>number</code></td></tr><tr><td>label</td><td>read only</td><td>\`string</td></tr><tr><td>type</td><td>read only</td><td>\`string</td></tr><tr><td>value</td><td>read/write</td><td>\`string</td></tr><tr><td>valid</td><td>read/write</td><td>\`boolean</td></tr></tbody></table><h3 id="flowpage" tabindex="-1">FlowPage <a class="header-anchor" href="#flowpage" aria-hidden="true">#</a></h3><table><thead><tr><th>property</th><th>access</th><th>type</th></tr></thead><tbody><tr><td>id</td><td>read only</td><td><code>number</code></td></tr><tr><td>title</td><td>read only</td><td><code>string</code> or <code>undefined</code></td></tr><tr><td>formFields</td><td>read only</td><td><a href="#formField">FormField[]</a></td></tr><tr><td>rows</td><td>read only</td><td><a href="#row">Row[]</a></td></tr></tbody></table><h3 id="row" tabindex="-1">Row <a class="header-anchor" href="#row" aria-hidden="true">#</a></h3><table><thead><tr><th>property</th><th>access</th><th>type</th></tr></thead><tbody><tr><td>id</td><td>read only</td><td><code>number</code></td></tr><tr><td>label</td><td>read only</td><td><code>string</code> or <code>undefined</code></td></tr><tr><td>columns</td><td>read only</td><td><a href="#column">Column[]</a></td></tr></tbody></table><h3 id="column" tabindex="-1">Column <a class="header-anchor" href="#column" aria-hidden="true">#</a></h3><table><thead><tr><th>property</th><th>access</th><th>type</th></tr></thead><tbody><tr><td>id</td><td>read only</td><td><code>number</code></td></tr><tr><td>label</td><td>read only</td><td><code>string</code> or <code>undefined</code></td></tr><tr><td>addons</td><td>read only</td><td><a href="#addon">Addon[]</a></td></tr></tbody></table><h3 id="addon" tabindex="-1">Addon <a class="header-anchor" href="#addon" aria-hidden="true">#</a></h3><table><thead><tr><th>property</th><th>access</th><th>type</th></tr></thead><tbody><tr><td>alias</td><td>read only</td><td><code>string</code></td></tr><tr><td>formFields**</td><td>read only</td><td><a href="#formField">FormField</a></td></tr></tbody></table>`,27),o=[t];function p(r,c,d,i,y,F){return n(),a("div",null,o)}const A=s(l,[["render",p]]);export{h as __pageData,A as default};