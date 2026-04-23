import { Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, vShow as _vShow, withDirectives as _withDirectives } from "vue"

const _hoisted_1 = { key: 0 }

export function render(_ctx, _cache) {
  return (_ctx.bar)
    ? (_openBlock(), _createElementBlock("span", _hoisted_1, "Hello"))
    : _createCommentVNode("v-if", true)
}