---
title: Home
h1: Should I Use a Tab Panel?
layout: layouts/base.webc
templateEngineOverride: webc,md
eleventyNavigation:
    key: Home
    Order: 1
---
<tab-interface @tabs="[
'Short answer',
'Slightly longer answer',
'Test'
]">

<tab-panel @index="0" @label="Short answer">

No.

</tab-panel>

<tab-panel @index="1" @label="Slightly longer answer">

Hell no!

</tab-panel>

<tab-panel @index="2" @label="Test">

This is a test third panel

</tab-panel>

</tab-interface>