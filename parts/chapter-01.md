## Chapter 1: A gentle intro.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- **Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*  -->

- [1.1 Example: JavaScript in a browser.](#11-example-javascript-in-a-browser)
- [1.2 Example: C++ presenting a Windows desktop message box.](#12-example-c-presenting-a-windows-desktop-message-box)
- [1.3 Example: commands in the Cmd command interpreter.](#13-example-commands-in-the-cmd-command-interpreter)
- [1.4 Example: C++ text output in a console.](#14-example-c-text-output-in-a-console)
- [1.5 qweqwe](#15-qweqwe)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

[Wikipedia][1]:

> ❞ **Computer programming** or **coding** is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.

The instructions are usually specified as [**pure text**][2]. Environments where one can specify the instructions by positioning graphical symbols and boxes, [do exist][3], but are mainly designed for children. General programming is most often only text, so the physical aspect of programming is mainly to write and edit text.

<img src="chapter 01/images/Teenage-boy-checking-programming-code.margin-right.jpg" width="66%" align="left" margin="1em"/>

Of course there’s a lot of thinking also. And trying out things. And so on.

Which instructions you can use depend on a lot. The computer’s built in instructions are almost never used directly because each one does so exceedingly little. Instead we use instructions that are *defined in terms of* sequences of other instructions that are defined in terms of…, and so on, which at some point finally are defined in terms of the computer’s built in instructions.

A **programming language** is a set of rules for how to define new instructions (you’ll do that all the time!), and how to use instructions: what you can and must write to use them. To write the pure text specification of a program you can use almost any text editor, including Windows’s own Notepad. But in order to create an executable program from that text, called a **compilation** of the text, you need tools that support the programming language that you’ve used, i.e. tools that support these rules; mainly a **compiler** for the language. Windows only provides these tools for Microsoft’s language C#. And so for other languages &mdash; including this book’s main language C++ &mdash; in order to create an executable you need to download and install the requisite tools.

However, an alternative to creating a new executable program is to get an existing executable program, such as your web browser, to let itself be directed by your textual instructions. I.e. your textual instructions are then instructions for that program, telling it what to do, with that program more or less directly “executing” your instructions. This is called **interpretation**. It’s only possible if the existing program does support being directed by textual instructions, but web browsers do. All web browsers have a built in JavaScript **interpreter**.

Anyway this means that

* the instructions you can use and how they look, depends on which programming language you’re using; and
* they depend on which instruction definitions you have made available; and
* while some of the instructions you use map more or less directly to just a handful of built in computer instructions, i.e. result in the execution of at most a handful of built in instructions, some of the instructions that you use map to at least 263 zillion built in instructions (whatever).

Of course a modern computer executes its built in instructions at breakneck speed. The old PC that I’m writing this on has 6 CPU “cores” that each executes one instruction sequence. Each does 2.4 billion *steps* per second. Now, some instructions may take more than one step, but on the other hand in some cases several instructions may effectively be executed, in parallel, in a step. So if a high level instruction that you use, let’s say it requires and waits for the user to type in something, if that takes 7 seconds, then on this PC the 263 zillion built-in instructions could be 16.8 billion. Or whatever, these are huge, gargantuan numbers, which tells you that

* each built in instruction *really* does very very little, and
* the computer necessarily repeats executing some parts of the instruction sequence,

&hellip; for otherwise it would run out of instructions to execute in just a few seconds.

### 1.1 Example: JavaScript in a browser.

Every web browser makes available a JavaScript instruction called `alert`, that pops up a **message box**. Using that instruction to display a message box with the text “Hello from JavaScript!” can go like this:

```js
alert( 'Hello from JavaScript!' );
```

So this is an example of the look & feel of **JavaScript** code.

You *can* feed that directly to your browser by typing `javascript:alert('Hello from JavaScript!')` in its address bar. But that method gets impractical or downright impossible with larger code snippets, not to mention with a full JavaScript program that does something useful. So then instead the browser is fed a text file, e.g. an `.html` text file (`.html` is one of the filename extensions that a browser knows about), and in that text file the browser requires that the JavaScript code is placed within or referred to from some **HTML** code, which has an entirely different look & feel with lots of angle brackets:

[*hello.html*](/chapter%2001/code/hello.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>JavaScript in the browser.</title>
  </head>
  <body>
    <script>
        alert( 'Hello from JavaScript!' );
    </script>
  </body>
</html>
```

HTML is not a programming language, because one can’t specify actions. It’s the **formal language** used to specify the contents, primarily text and images, of a web page. A programming language is also a formal language, but with action capability. HTML is just passive specification of content, except that it can *contain* e.g. JavaScript snippets that do have action capability. A web browser is essentially a viewer for HTML files, which it usually fetches from the net.

This local HTML file can be fed to the browser in a number of ways, including

* just double-clicking it; or
* using the `start` command in Windows’ Cmd or PowerShell, e.g. `start hello.html`; or
* opening the file from within the browser, e.g. keyboard shortcut `Ctrl`+`O` for “open” probably works.

Result with the Chrome browser:

<img src="chapter 01/images/sshot-javascript-alert.png" >

You can try this out. There are *lots* of things that can go wrong so you do not necessarily, as yet, succceed. But it’s worth trying, especially if you can get help from others (or, Google is your friend).


### 1.2 Example: C++ presenting a Windows desktop message box.

The main programming language in this book is **C++**, and unlike JavaScript it’s not supported by web browsers.

C++ generally requires you to create an executable file from your program text, and as mentioned, in Windows that requires you to download, install and use tools that understand C++. On a first reading you probably don’t have such tools, so on a first reading you’ll not be able to try out the following. But this example lets you see some of what C++ is about, that Windows’s functionality is readily available to C++ programs, and among other things Windows makes available a C++ instruction called `MessageBox` that presents a message box.

The Windows message box has a lot more options than JavaScript `alert`. You can choose an icon (four different) or no icon, you can choose a predefined set of buttons (the default is just an OK button), and after the user clicks away the box you can inspect which button he or she used, which is especially useful for asking simple questions. Anyway C++ use of Windows’ `MessageBox` instruction can go like this:

```cpp
    MessageBox( 0, "Hello from C++!", "C++ says:", MB_ICONINFORMATION | MB_SETFOREGROUND );
```

As with JavaScript-in-a-browser some more text is required around this C++ instruction. But here it will all be C++. The `#include` below drags in Windows’ *declaration* of the `MessageBox` function so that the C++ tools will know that that instruction exists; the `main` is a requirement of C++ (it can be expressed in various ways); and ditto the curly braces, they’re just a C++ requirement, they must be there:

[*hello.cpp*](chapter%2001/code/hello.cpp)
```cpp
#include <windows.h>

auto main() -> int
{
    MessageBox( 0, "Hello from C++!", "C++ says:", MB_ICONINFORMATION | MB_SETFOREGROUND );
}
```

After using the C++ tools in the most straightforward way to create an executable file, **running** it, e.g. by then double-clicking it, produces

<img src="chapter 01/images/sshot-c++-messagebox.png">

It’s not *perfect*, e.g. the button has an archaic square and all gray look. Unfortunately Microsoft chose to let `MessageBox` and other GUI elements use an old archaic style by default, and made it non-trivial to get [the modern style][4]. We’ll do that later, but for now, the very same C++ code, but just by adding some special data to the executable, can produce a message box like this:

<img src="chapter 01/images/sshot-c++-messagebox.modern.png">

Currently (mid 2024) it’s *possible* to create a message box like the first one via JavaScript, because Microsoft still hasn’t entirely removed some old JavaScript technology in Windows, once known as the “Windows Script Host”, or WSH for short. But let’s not delve on the past. Let’s move on.


### 1.3 Example: commands in the Cmd command interpreter.

If you now have the impression that programming involves dealing with *text* and dealing with *files*, and that it involves using special *tools*, you’re right.

We do much of this work in a purely textual environment called a **command interpreter**. As that term implies a command interpreter interprets and executes the commands that you type in. You type in a textual command; the command interpreter executes it, which may move some files or run a program or just produce some text as result, whatever; you type in a new command; etc., command → effect → command → effect → command → effect…, which is a simple procedure.

But while it’s usually clear in one’s head while one is doing it, it can look pretty cryptic:

<img src="chapter 01/images/sshot-command-prompt.png" width="66%">

Windows ships with two general command interpreters called **Cmd** and **Powershell**. In addition a programmer working in Windows is very likely to enable the Windows Subsystem for Linux, or WSL for short, and then do at least some of the work in a Linux general command interpreter called **bash**. The above example uses Cmd, which is the original Windows command interpreter and which is the one that’s invoked by the C++ `system` instruction and by corresponding instructions in other programming languages.

When you haven’t seen a programmer’s command interpreter before it can be difficult to see what parts of that text are commands typed in by the user, and what parts are responses from the command interpreter and/or the programs run by the commands.

So below I’ve *recolored* the text, with typed in commands in orange. Unfortunately AFAIK no modern command interpreter does that automatically, or even supports doing it. So this is a very manually created clarification of the screenshot:

<img src="chapter 01/images/sshot-command-prompt.annotated.png" width="66%">

So here the user typed in three commands: a `subst` command, a `cd` command, and a `dir` command. The `subst` command was used to check which folder the `L:` drive letter (a *logical drive*) was mapped to; the `cd` command was used to *change directory*, which means to go (here down in-) to another folder; and the `dir` command was used to list the file names that matched a specified pattern “`hell*`”, where the `*` is a *wildcard*. Some of this, the delving into a folder and the listing of file name matches, can also be done via mousing in Windows Explorer, but Windows Explorer lacks functionality corresponding to the `subst` command, that is, it lacks support for local logical drives.

Since the command coloring helps tremendously for at least some folks, including for myself, I would really have liked to apply command coloring to examples further in the book. However, Github, where this document resides, doesn’t support that (their excuse that colors would be a security risk doesn’t quite ring true for me). So instead I will use some Unicode trickery to present commands &mdash; and general user input in a console &mdash; in the style of 𝙨𝙪𝙗𝙨𝙩, 𝙘𝙙 and 𝙙𝙞𝙧. But keep in mind that on the screen commands are not visually distinct; the coloring or special font is a cosmeticized view of reality, like an Instagram photo filter.

While most and possibly all command interpreters lack support for a distinct color for user input, they &mdash; or rather the textual environments they run in &mdash; do let you choose the overall color of the text. I usually set the pure text environments, called **console windows**, to green text on black or dark blue text on white. And it so happens that Cmd has a built-in command called `color` that lets you choose the text and background color for the particular console window you’re working in:

<img src="chapter 01/images/sshot-command-prompt.after-color-command.png" width="66%">

So, commands can do all sorts of things. They’re much more powerful than using the mouse. Not the least because you can automate things by storing a sequence of commands in a text file and from then on use that as a new command (sounds familiar, yes? &mdash; it *is* a kind of programming, with commands).


### 1.4 Example: C++ text output in a console.

Many commands, including the `subst` command used above, are simply programs created with C++ or old C. Or perhaps some other programming language but C++ and C are the most common for this. Here’s a simple console-oriented C++ hello program:

[*text-hello.cpp*](chapter%2001/code/text-hello.cpp)
```cpp
#include <stdio.h>

auto main() -> int
{
    puts( "A textual console hello from C++!" );
}
```

Here the `#include` drags in a declaration of the console-oriented `puts` instruction, informing the C++ tools that that instruction does exist.

After using the tools to create a corresponding executable file “text-hello.exe”, the base name of that executable file, “text-hello”, can be used as a command to run it:

<img src="chapter 01/images/sshot-text-hello.annotated.png" width="66%">

I.e. a new command `text-hello` was created, and that command was created in a very simple way when one just has the tools installed and some experience with using them.

And commonly at the start of learning programming one creates only such **console programs**, purely text oriented programs that need to be run from a command intepreter (or technically in any console window, but in practice from a command interpreter). That’s because it’s much easier to program: very much easier to program. One can concentrate on learning & investigating various important stuff rather than struggling forever with just the results presentation.

So, there will be *a lot* of console oriented examples, and to save both space and work and your reading effort I will no longer present screenshots of console windows but just *the relevant text in the windows*, e.g.

<pre>
blah!<b><i><span style="color:#FF7800">asdasd asdasd</span></i></b>!asd
</pre>

```text
L:\>𝙨𝙪𝙗𝙨𝙩
L:\: => D:\root\writings\books\2024 Learn programming with C++ in Windows

L:\>𝙘𝙙 "𝙥𝙖𝙧𝙩𝙨\𝙘𝙝𝙖𝙥𝙩𝙚𝙧 01\𝙘𝙤𝙙𝙚"

L:\parts\chapter 01\code>𝙙𝙞𝙧 /𝙗 𝙝𝙚𝙡𝙡*
hello.cpp
hello.html
hello.manifest.xml
hello.resources.rc

L:\parts\chapter 01\code>𝙘𝙤𝙡𝙤𝙧 02

L:\parts\chapter 01\code>𝙩𝙚𝙭𝙩-𝙝𝙚𝙡𝙡𝙤
A textual console hello from C++!

L:\parts\chapter 01\code>|
```

Again it’s not perfect, for in particular with this Unicode trickery digits are presented the same as in the other text (and it also means that you cannot just copy and paste these commands!). But it’s good enough. It will do.


### 1.5 Summary & the path from here.

You’ve now seen examples that

* *A beginner can reasonably use JavaScript to direct a web browser, and that’s very common.*  
  And JavaScript is the primary choice for this, because browsers support JavaScript. In contrast C++ is not at all well suited for directing browsers. But it’s possible to [use *web assembly*][6] to run C++ applications such as games in a web browser.

* *A novice **can** use C++ for Windows desktop GUI applications.*  
  But other than simple message boxes it’s complex and much work. The usual recommendation for C++ is to use a framework such as Qt rather than using the low level Windows functionality directly. Building a GUI app with JavaScript is also possible e.g. by [building on the machinery of a web browser][7] (the VS Code editor is an example) but that’s not recommended for a novice, and the mentioned machinery is large.

* *Beginners can reasonably use C++  for console applications, and that’s easy and very common.*  
  As of mid 2024 there is no modern JavaScript alternative for console applications. The mentioned Windows WSH technology is archaic and can disappear at any time. And the node.js framework only supports asynchronous text input and presentation, which is both too advanced and too impractical.

A web browser is a very functionality-rich environment. JavaScript in a web browser has access to a lot of common GUI elements for user interaction, simple to use graphics and animation, image presentation, etc. For this reason alone JavaScript in a web browser can be very *interesting* and *motivating* for a beginner. Add to that that there is a thriving large JavaScript community online where e.g. examples are shared via sites such as [JsFiddle][8]. This makes JavaScript in a browser near ideal for a beginner.

At the same time, many concepts are simpler to explore and learn about via purely text based C++ console programs.

And so this book uses a dual approach: at the start it’s  absolute-beginner-friendly JavaScript in a browser and just some C++, while at the end it’s almost all C++, then using e.g. the [Qt framework][9] for GUI stuff and grapics/media capability.

One advantage of this approach is that the installation of support tools can be more gradual than for starting with C++. For JavaScript in a browser you don’t need tools to create an executable file. You only need a decent lightweight programmers’ editor such as my fav [Notepad++][10].

[1]: https://en.wikipedia.org/wiki/Computer_programming "Wikipedia’s “Computer programming” article"
[2]: https://en.wikipedia.org/wiki/Plain_text "Wikipedia’s “Plain text” article"
[3]: https://en.wikipedia.org/wiki/Visual_programming_language "Wikipedia’s “Visual programming language” article"
[4]: https://learn.microsoft.com/en-us/windows/win32/controls/cookbook-overview#using-comctl32dll-version-6-in-an-application-that-uses-only-standard-extensions "Microsoft documentation: “Enabling Visual Styles”"
[5]: https://learn.microsoft.com/en-us/windows/win32/menurc/about-resource-files "Microsoft documentation “About Resource Files”"
[6]: https://emscripten.org/docs/introducing_emscripten/about_emscripten.html "Emsriptem documentation “About Emscriptem”"
[7]: https://www.electronjs.org/ "The Electron project’s home page"
[8]: https://en.wikipedia.org/wiki/JSFiddle "Wikipedia’s page about the JSFiddle site."
[9]: https://en.wikipedia.org/wiki/Qt_(software) "Wikipedia’s page about the Qt GUI framework."
[10]: https://en.wikipedia.org/wiki/Notepad%2B%2B "Wikipedia’s page about the Notepad++ editor."
