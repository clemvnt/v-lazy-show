import { createVNode as _createVNode, mergeProps as _mergeProps, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue"
import { ssrRenderAttrs as _ssrRenderAttrs } from "vue/server-renderer"

export function ssrRender(_ctx, _push, _parent, _attrs) {
  if (_ctx.foo) {
    _push(`<span${_ssrRenderAttrs(_mergeProps(_attrs, _attrs))}>`)
    if (_ctx.bar) {
      _push(`<span>Hello</span>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</span>`)
  } else {
    _push(`<!---->`)
  }
}