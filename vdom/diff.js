let keyIndex = 0

const diff = (newEle, oldEle) => {
  let patches = {}
  keyIndex = 0
  walk(patches, 0, newEle, oldEle)
  return patches
}

const walk = (patches, keyIndex, newEle, oldEle) => {
  let currentPatches = []
  // 判断是否删除
  if (!newEle) {
    currentPatches.push({ type: 'remove' })
  }
  // 同级节点无变化时，比较子节点
  else if (oldEle.tagName == newEle.tagName) {
    walkChild(currentPatches, keyIndex, newEle.childs, oldEle.childs)
  }
  if (currentPatches.length > 0) {
    patches[keyIndex] = currentPatches
  }
}

const walkChild = (patches, keyIndex, newChilds, oldChilds) => {
  if (oldChilds) {
    for (let i = 0; i < oldChilds.length; i ++) {
      let newChild = newChilds[i]
      let oldChild = oldChilds[i]
      keyIndex ++
      walk(patches, keyIndex, newChild, oldChild)
      console.log(patches)
    }
  }
}

module.exports = {
  diff
}