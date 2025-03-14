---
title: Why make games for smartwatches
author: Mario Nachbaur Riscos
date: 2025-03-17
eleventyExcludeFromCollections: true
---

Lately in my free time I've been developing a small video game. The goal was to make the game playable in the small screen of a smartwatch. Watches usually have very few buttons, so gameplay had to be very simple. This sort of constraints made me think hard about alternative or innovative ways to play. For example, to make the character "jump" you usually tap the screen, but then you would be obstructing the very small screen with your fat finger. So I also added the option to "jump" by rotating the digital crown the Apple Watch has.

The combination of a small screen, few buttons, and somewhat underpowered CPU reminds me of the limitations of actual retro consoles like the Gameboy. There are actual modern "retro" consoles like the [playdate][playdate] and virtual ones like [PICO-8][pico8] that also impose similar limitations. But ideally I would love that people actually play my games, and I'm sure there are more people with smartwatches than ones with a playdate. PICO-8 allows anyone to play the game on their computers, but that takes away the portability factor, people can't play the games in the metro while they're commuting.

I have previous experience with engines like [LÖVE][love2d] and [Godot][godot] but the watch requires something leaner. I also wanted to try out [Zig][zig] but that meant sending [patches][zigpr] to the compiler. I created a very small ["graphics library"][wggr] with an API inspired by [raylib][raylib]. It's still in very early stages but it's usable.

---

**TL;DR**: I believe smartwatches are the modern version of handheld consoles. Most people have one, they take them everywhere, and could play with them while commuting.

[godot]: https://godotengine.org/
[love2d]: https://love2d.org/
[pico8]: https://www.lexaloffle.com/pico-8.php
[playdate]: https://play.date/
[raylib]: https://raylib.com
[zig]: https://ziglang.org
[zigpr]: https://github.com/ziglang/zig/pull/21765
[wggr]: https://github.com/marionauta/wggr
