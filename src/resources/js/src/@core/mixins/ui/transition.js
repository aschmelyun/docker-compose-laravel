export const heightTransition = {
  /*

    HowTo:
      1. Add dynamic style to element and set style as `trHeight`
      2. Set transition speed using `transition: 0.35s height;` <= you can use appropriate value;
      3. Optionally you can set `overflow: hidden;` to hide element overflow while height is animated.
      4. Set initial height using `trSetHeight` before any operation. [mounted hook is recommended - You can use `ref` for dynamic contents]
      5. Toggle height using height operations 🍻
      6. Toggle usage of $nextTick for height operations is any issue occur [experimental] 🔬

  */

  data() {
    return {
      trHeight: null,
    }
  },
  methods: {
    trAddHeight(val) {
      // Add height to existing height
      // Usage: Where new element is append or more height is added (e.g. list append)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      const heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2))
      this.trHeight = `${heightValue + Number(val)}px`
    },
    trTrimHeight(val) {
      // Remove height from existing height
      // Usage: Where new element is removed or height is remove (e.g. list pop/ele remove)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      const heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2))
      this.trHeight = `${heightValue - Number(val)}px`
    },
    trSetHeight(val) {
      // Set height
      // Usage: Mostly for assigning initial value from mounted hook

      /* Assumes:
       - Height is not assigned and what to assign for add/remove operation
       - What to set height at something for odd usage
       - Incoming value is valid number in `Number` or `String`
      */
      if (val === null) this.trHeight = 'auto'
      else this.trHeight = `${Number(val)}px`
    },
  },
}

// Ignore below for now. We will remove it when we add more transition in future.
export const _ = null
