const { createSideBarConfig } = require('./util')
const CSS_PATH = '/blogs/css'
const React_PATH = '/blogs/react'


module.exports = {
  [CSS_PATH]: [createSideBarConfig('CSS 技巧', CSS_PATH)],
  [React_PATH]: [createSideBarConfig('React 技巧', React_PATH)],
}