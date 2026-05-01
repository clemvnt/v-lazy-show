import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue"
import { ssrRenderAttrs as _ssrRenderAttrs } from "vue/server-renderer"

export function ssrRender(_ctx, _push, _parent, _attrs) {
  if (_ctx.foo) {
    _push(`<span${_ssrRenderAttrs(_mergeProps(_attrs, _attrs))}><span>Foo</span>`)
    if (_ctx.innerIf) {
      _push(`<span>If</span>`)
    } else if (_ctx.innerElseIf) {
      _push(`<span>Else If</span>`)
    } else {
      _push(`<span>Else</span>`)
    }
    _push(`</span>`)
  } else {
    _push(`<!---->`)
  }
}