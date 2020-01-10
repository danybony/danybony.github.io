---
title: "Kotlin as scripting language"
excerpt: "How to write elegant and highly maintainable scripts in Kotlin"
header:
  teaser: "/assets/images/kscript/teaser.jpg"
---

Kotlin is a very powerful language. It can be used to create complex mobile, desktop or even web applications, but not everybody knows that it can also be used to create simple and elegant scripts.

<figure>
	<img src="/assets/images/kscript/teaser.jpg">
</figure>

A Kotlin script is a simple Kotlin snippet, without the need of the `main` function that you would need in a typical program. That function is actually implicit, and all the commands in the file are executed as if they were the `main` body. 

The script file can be simply run invoking the kotlin compiler with the `-script` parameter.
The executed script can accept input arguments:

{% gist 0588277417ff521bbb355550ab7618af arguments.kts %}

and also make use of the Java and Kotlin stlib in order to access more powerful libraries:

{% gist 0588277417ff521bbb355550ab7618af dirsExplorer.kts %}

Of course using Kotlin also allows us to access other concepts of the language, like functions, recursion, classes or extensions, which can make our scripts even more readable and maintainable:

{% gist 0588277417ff521bbb355550ab7618af dirsExplorerRecursionExtensionFunction.kts %}


While all this is already a good start, we can greatly improve our scripting experience by using a third party open-source solution: [**Kscript**](https://github.com/holgerbrandl/kscript).<br>
This tool adds a lot of niceties that make scripting with kotlin even more fast and powerful.

## Invocation modes

First of all kscript adds more ways of invoking a script. It is possible to run it by specifying the script file

```bash
$ kscript helloScript.kts
```

or by specifying a URL containing the code of the script

```bash
$ kscript https://gist.githubusercontent.com/danybony/.../kscriptUrl.kts
```

inlined
```bash
$ kscript ‘println(“Hello there”)’
```

or by piping a Kotlin snippet into kscript and instruct it to read from stdin
```bash
$ echo '
 println("Hello Kotlin.")
 ' |  kscript -
```

The URL input mode is particularly powerful in my opinion, as it allows to easily create a centralised repository of scripts that can be executed remotely on several machines and maintained in a single place.

kscript can act as interpreter for a script by just specifying it in the shebang line the Kotlin script:

{% gist 0588277417ff521bbb355550ab7618af interpreter.kts %}

Finally, kscript can also be used to deploy script as standalone binaries with the `--package` parameter:

```bash
$  kscript --package helloScript.kts 
[kscript] Packaging script 'helloScript' into standalone executable...
 
$  ./helloScript
Hello world!
```

## Caching

Another great addition in kscript is the caching mechanism. Kotlin scripts are still compiled using `kotlinc` under the hood, but before doing that, kscript checks if the script changed from the last compilation (by hashing the content of the script). In that case a cached version of the script is immediately executed, without wasting time recompiling it. This has, as it's easy to imagine, a very positive impact on execution times.

<figure>
	<a href="/assets/images/kscript/cache.png"><img src="/assets/images/kscript/cache.png" alt="The impact of caching in sequent run of the same, unmodified, script"></a>
</figure>

## Dependencies

Third party libraries can be used in our scripts, including them as dependencies using directives or annotations, and specified with gradle-style dependencies locators, with *group id*, *artifact id* and *version*.
This allows us to access more powerful tools like, for example, coroutines:

{% gist 0588277417ff521bbb355550ab7618af coroutines.kts %}

Other local files (or different kotlin snippets from URL) can be also included as dependencies into the current script by using the `//INCLUDE` directive:

{% gist 0588277417ff521bbb355550ab7618af include.kts %}

## Improved editing

kscript makes it super easy to edit kotlin scripts too.

By using the `--idea` parameter, it creates a temporary, minimal project and automatically opens it with IntelliJ IDEA. This project only contains the script file and a generated `gradle.build`, and after a Gradle sync it's possible to immediately access all the powerful IDEA tools, including auto completion and sources from the included script dependencies.

<figure>
	<a href="/assets/images/kscript/idea.png"><img src="/assets/images/kscript/idea.png" alt="The temporary IntelliJ IDEA project created by kscript"></a>
</figure>

---

There are several very well known alternatives for creating scripts, but Kotlin is definitely the best I've tried. With the addition of kscript, its caching and third party dependencies, it's very easy to quickly create powerful scripts that are highly maintainable too thanks to the use of the Kotlin language.

---

In November 2019 I gave a talk about how to start with scripting in Kotlin at Devfest St Petersburg, Russia. Here you can find the slides for that presentation:

<script async class="speakerdeck-embed" data-id="5192b24853c04315a3b17440f3e5085b" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
