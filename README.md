uapbot
======

This bot does only one thing: parse a user agent string and print what browser, OS and device it refers to. It's built on top of [Jerk](http://gf3.github.com/Jerk/), a bot library for node.js.

To summon it just type:

    uapbot: user agent string

So for example:

    uapbot: Mozilla/5.0 (BlackBerry; U; BlackBerry 9320; en-GB) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.398 Mobile Safari/534.11+

will print:

   yournick: User Agent: Blackberry WebKit 7.1.0; Operating System: BlackBerry OS 7.1.0.398; Device: BlackBerry 9320.