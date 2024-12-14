---
title: Home
h1: Should I Use a Tab Panel?
layout: layouts/base.webc
templateEngineOverride: webc,md
eleventyNavigation:
    key: Home
    Order: 1
---
<tab-interface>

<tab-list>

<tab-btn @label="Short answer" @index="1"></tab-btn>

<tab-btn @label="Slightly longer answer" @index="2"></tab-btn>

<tab-btn @index="3" @label="Test tab 3"></tab-btn>

</tab-list>

<tab-panel @index="1" @label="Short answer">

No!

</tab-panel>

<tab-panel @index="2" @label="Slightly longer answer">

Hell no!

</tab-panel>

<tab-panel @index="3" @label="Test tab 3">

Test tab 3

</tab-panel>

</tab-interface>