# shouldiuseatabpanel.github.io
Should I use a tab panel? This project hopes to answer that question.

%## Using the tab component

The tab component for the site is based off the ARIA APG automatic tab panel pattern, with a few modifications, and is set up to work within 11ty's webc component framework. Here's how to deploy it

- ``<tab-interface>`` is the wrapper for the component. No props needed.
- ``<tab-list>`` wraps the tabs in the tab list. No props needed.
- ``<tab-btn>`` is each tab button. Has two required props, documented below:

    - ``@index`` is the number for the tab. There is logic in the component to build it with the correct properties for this tab to be shown if index is set to 1. Also note, this must match the index on the ``<tab-panel>`` component documented below.
    - ``@label`` is the label for the tab. Should match the label for the panel, but not a must.

- ``<tab-panel>`` is each tab panel. Should follow the ``<tab-list`` in the structure, has two required props:

    - ``@index`` is the number for the panel. Value must match a ``<tab-btn`` and logic exists to ensure panel with an index of 1 is displayed on load.
    - ``@label`` is the heading at the top of the panel. Should match the label for the tab button, but not required.
11ty will throw build errors if required props are not included.