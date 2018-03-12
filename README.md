Removes junk email preventions from email-addresses in html source.
Originally developed by Kapsi Internet-käyttäjät ry, modified by Vaasa Hacklab ry

## Usage

This works in conjuction with email-addresses written in HTML-code with extra stuff that makes address not work when read with most of crawlers and spambots, and this JS then removes that extra part to make address normal for actual end user. Example snippet for usage:

```html
<a href="mailto:email@example.POISTATAMA.com">email@example.<span class="roskaposti">POISTATAMA.</span>com</a>
```
