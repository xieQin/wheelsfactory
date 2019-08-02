let allPatches
let index = 0

const patch = (rootEle, patches) => {
  allPatches = patches
  walk(rootEle)
}

const walk = (ele) => {
  let currentPatches = allPatches[index]
  index ++
  (ele.childNodes || []) && ele.childNodes.forEach(child => {
    walk(child)
  })
  if (currentPatches) {
    doPatch(ele, currentPatches)
  }
}

const doPatch = (ele, currentPatches) => {
  currentPatches.forEach(currentPatch => {
    if (currentPatch.type == 'remove') {
      ele.parentNode.removeChild(ele)
    }
  })
}

module.exports = {
  patch
}