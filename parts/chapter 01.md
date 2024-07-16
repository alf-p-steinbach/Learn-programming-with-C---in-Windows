## Chapter 1: qwe poi?

[Wikipedia][1]:

> ❞ **Computer programming** or **coding** is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.

The instructions are usually specified as [**pure text**][2]. Environments where one can specify the instructions by positioning graphical symbols and boxes, [do exist][3], but are mainly designed for children. General programming is most often only text, so the physical aspect of programming is mainly to write and edit text.

<img src="chapter 01/images/Teenage-boy-checking-programming-code.margin-right.jpg" width="66%" align="left" margin="1em"/>

Of course there’s a lot of thinking also. And trying out things. And so on.

Which instructions you can use depend on a lot. The computer’s built in instructions are almost never used directly because each one does so exceedingly little. Instead we use instructions that are *defined in terms of* sequences of other instructions that are defined in terms of…, and so on, which at some point finally are defined in terms of the computer’s built in instructions.

A **programming language** is a set of rules for how to define new instructions (you’ll do that all the time!), and how to use instructions: what you can and must write to use them. To write the pure text specification of a program you can use almost any text editor, including &mdash; though it’s awkward &mdash; Windows’s own Notepad. But in order to create an executable program from that text you need tools that support the programming language that you’ve used, the rules, and such tools are not shipped with Windows so you need to download and install them.

In passing, an alternative to creating an executable program is to get an existing executable program, such as your web browser, to let itself be directed by your textual instructions. I.e. your textual instructions as instructions for that program, with that program more or less directly “executing” your instructions. It’s only possible if the existing program does support being directed by textual instructions, but web browsers do, using the JavaScript language.

Anyway this means that

* the instructions you can use and how they look, depends on which programming language you’re using; and
* they depend on which instruction definitions you have made available; and
* while some of the instructions you use map more or less directly to just a handful of built in computer instructions, i.e. result in the execution of at most a handful of built in instructions, some of the instructions that you use map to at least 263 zillion built in instructions (whatever).

Of course a modern computer executes its built in instructions at breakneck speed. The old PC that I’m writing this on has 6 CPU “cores” that each executes one instruction sequence. Each does 2.4 billion *steps* per second. Now, some instructions may take more than one step, but on the other hand in some cases several instructions may effectively be executed, in parallel, in a step. So if a high level instruction that you use, let’s say it requires and waits for the user to type in something, if that takes 7 seconds, then on this PC the 263 zillion built-in instructions could be 16.8 billion. Or whatever, these are huge, gargantuan numbers, which tells you that

* each built in instruction *really* does very very little, and
* the computer necessarily repeats executing some parts of the instruction sequence,

&hellip; for otherwise it would run out of instructions to execute in just a few seconds.

---




[1]: https://en.wikipedia.org/wiki/Computer_programming "Wikipedia’s “Computer programming” article"
[2]: https://en.wikipedia.org/wiki/Plain_text "Wikipedia’s “Plain text” article"
[3]: https://en.wikipedia.org/wiki/Visual_programming_language "Wikipedia’s “Visual programming language” article"
