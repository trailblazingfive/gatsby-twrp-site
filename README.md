# TWRP fan made site made using Gatsby

<p align="center">
  <img width="70%" src="gatsby-twrp-site.png"/>
</p>

TWRP aka an elite squad of Rock Start from the future! [Would you like to know more?](https://www.reddit.com/r/TWRP/wiki/lore)

<h2 align="center">
  <a href="https://trailblazingfive.github.io/gatsby-twrp-site/" title="gatsby-twrp-site">Live preview</a>
</h2>

## How to use?

Go to `package.json` find `"scripts"` for a list of all scripts. Local development via `gatsby develop` default port `http://localhost:8000/`.

### Publishing

Modify `pathPrefix` in `gatsby-config` and run `gatsby build` then upload to your host.

### Images don't load?

Run `gatsby clean` purging the `.cache` followed by `gatsby serve` - default port `http://localhost:9000/`.

## Technology solutions

`Gatsby.js` (`React.js` + `GraphQL`) + `styled-components`

