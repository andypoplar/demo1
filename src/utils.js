export function getEntryUrl(name) {
  if (weex.config.env.platform === "Web") {
    return './' + name + '.html'
  } else { // 真机调试
    let arr = weex.config.bundleUrl.split('/')
    arr.pop()
    arr.push(name + '.js')
    return arr.join('/')
  }
}