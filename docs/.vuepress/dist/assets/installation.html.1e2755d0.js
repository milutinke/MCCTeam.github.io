import{_ as a,o as i,c as l,a as e,b as t,d as s,e as o,r}from"./app.bb2d58d4.js";const d={},c=s('<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><ul><li><a href="#download-a-compiled-binary">Download a compiled binary</a></li><li><a href="#building-from-the-source-code">Building from source</a></li><li><a href="#using-docker">Run using Docker</a></li></ul><h2 id="download-a-compiled-binary" tabindex="-1"><a class="header-anchor" href="#download-a-compiled-binary" aria-hidden="true">#</a> Download a compiled binary</h2><h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h4><p>In order to run <strong>Minecraft Console Client</strong> on Windows you need the following software:</p>',5),u={href:"https://dotnet.microsoft.com/en-us/download/dotnet-framework",target:"_blank",rel:"noopener noreferrer"},h=o(".NET Framework 4.8 or higher"),p=e("h4",{id:"linux-mac-os-unix",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-mac-os-unix","aria-hidden":"true"},"#"),o(" Linux, Mac OS, Unix")],-1),m=o("In order to run "),f=e("strong",null,"Minecraft Console Client",-1),_=o(" on other platofrms you need the "),g={href:"https://www.mono-project.com",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"Mono",-1),v=o(" framework:"),w={href:"https://www.mono-project.com/download/stable/#download-lin",target:"_blank",rel:"noopener noreferrer"},k=o("Linux Build"),C={href:"https://www.mono-project.com/download/stable/#download-mac",target:"_blank",rel:"noopener noreferrer"},y=o("MacOS Build"),x={href:"https://www.mono-project.com/docs/about-mono/supported-platforms/",target:"_blank",rel:"noopener noreferrer"},M=o("Other Platforms"),T=e("h4",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),o(" Download")],-1),R=o("You can download a compiled binary file of the latest build from our Releases section on Github: "),S={href:"https://github.com/MCCTeam/Minecraft-Console-Client/releases",target:"_blank",rel:"noopener noreferrer"},I=o("Download"),O=e("h2",{id:"building-from-the-source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#building-from-the-source-code","aria-hidden":"true"},"#"),o(" Building from the source code")],-1),N=e("h3",{id:"windows-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-1","aria-hidden":"true"},"#"),o(" Windows")],-1),B=e("p",null,"Requirements:",-1),E={href:"https://www.git-scm.com/",target:"_blank",rel:"noopener noreferrer"},D=o("Git"),G={href:"https://dotnet.microsoft.com/en-us/download",target:"_blank",rel:"noopener noreferrer"},j=o(".NET 6.0 or higher"),L=o(" or "),V={href:"https://visualstudio.microsoft.com/",target:"_blank",rel:"noopener noreferrer"},q=o("Visual Studio"),X=o(" configured for C# app development"),P=o("Install "),U={href:"https://www.git-scm.com/",target:"_blank",rel:"noopener noreferrer"},F=o("Git"),H=o(" and "),W={href:"https://visualstudio.microsoft.com/",target:"_blank",rel:"noopener noreferrer"},A=o("Visual Studio"),Y=o(" or "),$={href:"https://dotnet.microsoft.com/en-us/download",target:"_blank",rel:"noopener noreferrer"},z=o(".NET 6.0 or higher"),Q=e("li",null,"Make a new folder where you want to keep the source code",-1),J=e("li",null,[o("Then open it up, hold "),e("code",null,"SHIFT"),o(" and do a "),e("code",null,"right-click"),o(" on the empty white space in the folder")],-1),K=e("li",null,[o("Click on "),e("code",null,"Git Bash Here"),o(" in the context menu")],-1),Z=o("Clone the "),ee={href:"https://github.com/MCCTeam/Minecraft-Console-Client",target:"_blank",rel:"noopener noreferrer"},oe=o("Github Repository"),ne=o(" by typing end executing the following command:"),te=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/MCCTeam/Minecraft-Console-Client.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>Once the repositry has been cloned, you can close the <code>Git Bash</code> terminal emulator</li><li>Open up the new cloned folder</li></ol><h4 id="visual-studio" tabindex="-1"><a class="header-anchor" href="#visual-studio" aria-hidden="true">#</a> Visual Studio</h4><ol><li>Open up the <code>MinecraftClient.sln</code> via Visual Studio</li><li>Right click on <code>MinecraftClient</code> solution in the <code>Solution Explorer</code></li><li>Click on <code>Properties</code></li><li>Open up the <code>Build</code> tab and select configuration <code>Release</code></li><li>Press <code>CTRL + S</code> and close the file</li><li>Right click on <code>MinecraftClient</code> solution in the <code>Solution Explorer</code></li><li>Click <code>Build</code></li></ol><p>If the build has succeeded, the compiled binary <code>MinecraftClient.exe</code> will be in <code>MinecraftClient/bin/Release</code> folder.</p><h4 id="net-manually-without-visual-studio" tabindex="-1"><a class="header-anchor" href="#net-manually-without-visual-studio" aria-hidden="true">#</a> .NET manually without Visual Studio</h4><ol><li>Open the <code>MinecraftClient</code> folder</li><li>Open the <code>MinecraftClient.csproj</code> in a text editor of your choice</li><li>Find the following line</li></ol><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">Configuration</span> Condition<span class="token operator">=</span><span class="token string">&quot; &#39;$(Configuration)&#39; == &#39;&#39; &quot;</span><span class="token operator">&gt;</span>Debug<span class="token operator">&lt;</span><span class="token operator">/</span>Configuration<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Replace <code>Debug</code> with <code>Release</code> so it will be:</li></ol><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">Configuration</span> Condition<span class="token operator">=</span><span class="token string">&quot; &#39;$(Configuration)&#39; == &#39;&#39; &quot;</span><span class="token operator">&gt;</span>Release<span class="token operator">&lt;</span><span class="token operator">/</span>Configuration<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Save and close the file</li><li>Locate <code>MSBuild.exe</code> for .NET inside <code>C:\\Windows\\Microsoft.NET\\Framework\\vX.X.XXXXX</code></li><li>Drag and drop <code>MinecraftClient.csproj</code> over <code>MSBuild.exe</code> to launch the build</li></ol><p>If the build has succeeded, the compiled binary <code>MinecraftClient.exe</code> will be in <code>MinecraftClient/bin/Release</code> folder.</p><h3 id="linux-mac-os-unix-1" tabindex="-1"><a class="header-anchor" href="#linux-mac-os-unix-1" aria-hidden="true">#</a> Linux, Mac OS, Unix</h3><p><em>NOTE: Since you&#39;re most likely using Linux, Unix or MacOS, I&#39;ll assume that you should be able to install git on your own. If you don&#39;t search it up for your platofrm, it should be easy</em></p><p>Requirements:</p>`,15),se=e("li",null,"Git",-1),ae=o("Mono "),ie={href:"https://www.mono-project.com/download/stable/#download-lin",target:"_blank",rel:"noopener noreferrer"},le=o("Linux Build"),re={href:"https://www.mono-project.com/download/stable/#download-mac",target:"_blank",rel:"noopener noreferrer"},de=o("MacOS Build"),ce={href:"https://www.mono-project.com/docs/about-mono/supported-platforms/",target:"_blank",rel:"noopener noreferrer"},ue=o("Other Platforms"),he=e("li",null,"Verify that Mono is installed and can run correctly by following steps on their website",-1),pe=e("li",null,"Open up a terminal and navigate to the folder where you will store the MCC",-1),me=o("Clone the "),fe={href:"https://github.com/MCCTeam/Minecraft-Console-Client",target:"_blank",rel:"noopener noreferrer"},_e=o("Github Repository"),ge=o(" by typing end executing the following command:"),be=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/MCCTeam/Minecraft-Console-Client.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Go to the folder you&#39;ve cloned</li><li>Go to <code>MinecraftClient</code></li><li>Run the following command: <code>msbuild MinecraftClient.csproj</code> to build the project</li></ol><p>If the build has succeeded, the compiled binary <code>MinecraftClient.exe</code> will be in <code>MinecraftClient/bin/Release</code> folder.</p><h2 id="using-docker" tabindex="-1"><a class="header-anchor" href="#using-docker" aria-hidden="true">#</a> Using Docker</h2><p>Requirements:</p><ul><li>Git</li><li>Docker</li></ul><p><em>NOTE: This section is for more advanced users, if you do not know how to install git or docker, you can take a look at other sections for Git, and search on how to install Docker on your system.</em></p>`,7),ve=o("Clone the "),we={href:"https://github.com/MCCTeam/Minecraft-Console-Client",target:"_blank",rel:"noopener noreferrer"},ke=o("Github Repository"),Ce=o(" by typing end executing the following command:"),ye=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/MCCTeam/Minecraft-Console-Client.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Navigate to <code>Minecraft-Console-Client/Docker</code></li><li>Build the image using the following command</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build -t minecraft-console-client:latest <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Start the container using Docker:</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># You could also ignore the -v parameter if you dont want to mount the volume that is up to you. If you don&#39;t it&#39;s harder to edit the .ini file if thats something you want to do</span>
<span class="token function">docker</span> run -it -v <span class="token operator">&lt;</span>PATH_ON_YOUR_MACHINE_TO_MOUNT<span class="token operator">&gt;</span>:/opt/data minecraft-console-client:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you could login and the Client is running. To detach from the Client but still keep it running in the Background press: <code>CTRL + P</code>, <code>CTRL + Q</code>. To reattach use the <code>docker attach</code> command.</p><p><strong>Start the container using docker-compose:</strong></p><p>By default, the volume of the container gets mapped into a new folder named <code>data</code> in the same folder the <code>docker-compose.yml</code> is stored.</p><p>If you don&#39;t want to map a volume, you have to comment out or delete the entire volumes section:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#volumes:</span>
<span class="token comment">#- &#39;./data:/opt/data&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Make sure you are in the directory the <code>docker-compose.yml</code> is stored before you attempt to start. If you do so, you can start the container:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> run MCC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remember to remove the container after usage:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you use the INI file and entered your data (username, password, server) there, you can start your container using</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
<span class="token function">docker-compose</span> up -d <span class="token comment">#for deamonized running in the background</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that you won&#39;t be able to interact with the client using <code>docker-compose up</code>. If you want that functionality, please use the first method: <code>docker-compose run MCC</code>. As above, you can stop and remove the container using</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18);function xe(Me,Te){const n=r("ExternalLinkIcon");return i(),l("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[h,t(n)])])]),p,e("p",null,[m,f,_,e("a",g,[b,t(n)]),v]),e("ul",null,[e("li",null,[e("a",w,[k,t(n)])]),e("li",null,[e("a",C,[y,t(n)])]),e("li",null,[e("a",x,[M,t(n)])])]),T,e("p",null,[R,e("a",S,[I,t(n)])]),O,N,B,e("ul",null,[e("li",null,[e("a",E,[D,t(n)])]),e("li",null,[e("a",G,[j,t(n)]),L,e("a",V,[q,t(n)]),X])]),e("p",null,[P,e("a",U,[F,t(n)]),H,e("a",W,[A,t(n)]),Y,e("a",$,[z,t(n)])]),e("ol",null,[Q,J,K,e("li",null,[Z,e("a",ee,[oe,t(n)]),ne])]),te,e("ul",null,[se,e("li",null,[ae,e("ul",null,[e("li",null,[e("a",ie,[le,t(n)])]),e("li",null,[e("a",re,[de,t(n)])]),e("li",null,[e("a",ce,[ue,t(n)])])])])]),e("ol",null,[he,pe,e("li",null,[me,e("a",fe,[_e,t(n)]),ge])]),be,e("ol",null,[e("li",null,[ve,e("a",we,[ke,t(n)]),Ce])]),ye])}var Se=a(d,[["render",xe],["__file","installation.html.vue"]]);export{Se as default};