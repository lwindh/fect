import { createApp, Component, unref } from 'vue'
import { ElementRef } from './interface'

const createNode = (name: string) => {
  const dom = document.querySelector(`.${name}`)
  if (dom) return dom
  const elSnapshot = document.createElement('div')
  elSnapshot.classList.add(name)
  document.body.appendChild(elSnapshot)
  return elSnapshot
}

const createPortal = (children: Component, container?: ElementRef) => {
  const elSnapshot = unref(container) || document.createElement('div')
  const app = createApp(children)
  document.body.appendChild(elSnapshot)
  const instance = app.mount(elSnapshot)
  return {
    instance
  }
}

export { createNode, createPortal }
