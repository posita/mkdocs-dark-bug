# Illustration of theme/scheme disconnect in [squidfunk/mkdocs-material#2727](https://github.com/squidfunk/mkdocs-material/issues/2727)

## Setup

Consider:

```html
<picture>
  <source srcset="dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="light.png" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
  <img src="light.png" />
</picture>
```

This renders as:

<picture>
  <source srcset="dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="light.png" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
  <img src="light.png" />
</picture>

## Expected behavior

From [the docs](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/#system-preference):

> In order to automatically set the color palette to the user's system preference, a media query can be set as part of the `media` field next to the toggle definition in `mkdocs.yml`:
>
> ``` yaml hl_lines="3 8"
> theme:
>   palette:
>     - media: "(prefers-color-scheme: light)"
>       scheme: default
>       toggle:
>         icon: material/toggle-switch-off-outline
>         name: Switch to dark mode
>     - media: "(prefers-color-scheme: dark)"
>       scheme: slate
>       toggle:
>         icon: material/toggle-switch
>         name: Switch to light mode
> ```
>
> When the user first visits your site, the media queries are evaluated in the order of their definition.
> The first media query that matches selects the default color palette.

After reading the above, as well as [squidfunk/mkdocs-material#1266](https://github.com/squidfunk/mkdocs-material/issues/1266), my understanding is:

1. Toggling the theme using the toggle switch will switch the preferred color scheme; and
1. Switching the preferred color scheme will toggle the theme.

However, they are disconnected as far as I can tell.

## Observed behavior

1. Toggling the theme using the switch in the header of this page will update the theme, but not the scheme.
1. Toggling the preferred color scheme (e.g., on MacOS, switching from `Light` to `Dark` in `System Preferences` » `General` » `Appearance`) will update the scheme, but not the theme.

## Detail

Test matrix:

| Theme&nbsp;👉<br />Scheme&nbsp;👇 | Light | Dark  |
| --------: | :---: | :---: |
| **Light** | ![Light/Light](light-theme-light-scheme.png) | ![Dark/Light](dark-theme-light-scheme.png) |
| **Dark**  |  ![Light/Dark](light-theme-dark-scheme.png)  |  ![Dark/Dark](dark-theme-dark-scheme.png)  |

Tested with:

| package                    | version |
| :------------------------- | ------: |
| mkdocs                     | 1.1.2   |
| mkdocs-material            | 7.1.6   |
| mkdocs-material-extensions | 1.0.1   |
