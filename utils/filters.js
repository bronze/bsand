const {DateTime}=require('luxon')

module.exports={
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, {zone: 'utc'}).toFormat(
      String(format)
    )
  },

  dateToISO: function (date) {
    return DateTime.fromJSDate(date, {zone: 'utc'}).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    })
  },

  obfuscate: function (str) {
    const chars=[]
    for (var i=str.length-1; i>=0; i--) {
      chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
    }
    return chars.join('')
  },

  filterTagList(tags) {
    return (tags||[]).filter(tag => ["all", "nav", "post", "posts",].indexOf(tag)===-1);
  },
  setExt: function (path, ext) {
    if (!ext) {
      return path
    }
    return path.substr(0, path.lastIndexOf('.'))+`.${ext}`
  },
  excerpt: function (content) {
    const excerptMinimumLength=80
    const excerptSeparator='<!--more-->'
    const findExcerptEnd=(content) => {
      if (content==='') {
        return 0
      }

      const paragraphEnd=content.indexOf('</p>', 0)+4
      if (paragraphEnd<excerptMinimumLength) {
        return (
          paragraphEnd+
          findExcerptEnd(
            content.substring(paragraphEnd),
            paragraphEnd
          )
        )
      }

      return paragraphEnd
    }

    if (!content) {
      return
    }

    if (content.includes(excerptSeparator)) {
      return content.substring(0, content.indexOf(excerptSeparator))
    } else if (content.length<=excerptMinimumLength) {
      return content
    }

    const excerptEnd=findExcerptEnd(content)
    return content.substring(0, excerptEnd)
  },
}
