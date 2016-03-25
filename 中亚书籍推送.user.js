// ==UserScript==
// @name         中亚书籍推送
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  gk7:书籍：中亚书籍推送到kindle
// @author       jacksyen
// @include      http://www.amazon.cn/*/dp/*
// @include      https://www.amazon.cn/gp/digital/fiona/*
// @require      http://code.jquery.com/jquery-2.1.1.min.js

// @grant       unsafeWindow

// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
var t = new Date().getTime();


$ = $ || unsafeWindow.$;

var submit = $('input[name="submit.borrow.ku"]');
if (submit){
    submit.trigger('click');
}
if (window.document.title=='亚马逊：谢谢') {
    window.close();
}