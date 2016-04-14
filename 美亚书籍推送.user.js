// ==UserScript==
// @name         美亚书籍推送
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  gk7:书籍：美亚书籍推送到kindle
// @author       jacksyen
// @include      https://www.amazon.com/*/dp/*
// @include      http://www.amazon.com/*/dp/*
// @include      https://www.amazon.com/gp/digital/fiona/*
// @require      http://code.jquery.com/jquery-2.1.1.min.js

// @grant       unsafeWindow

// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
var t = new Date().getTime();


$ = $ || unsafeWindow.$;

var submit = $('input[name="submit.one-click-order.x"]');
if (submit){
    submit.trigger('click');
}
if (window.document.title=='Amazon.com: Thank you') {
    window.close();
}