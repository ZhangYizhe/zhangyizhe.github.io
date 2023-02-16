export { default as AuthorCard } from '../../components/AuthorCard.vue'
export { default as AuthorIntro } from '../../components/AuthorIntro.vue'
export { default as Expertise } from '../../components/Expertise.vue'
export { default as ProjectCard } from '../../components/ProjectCard.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as TimeLine } from '../../components/TimeLine.vue'
export { default as BlogItem } from '../../components/blogItem.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
