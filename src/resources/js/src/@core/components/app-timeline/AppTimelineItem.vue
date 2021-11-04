<template>
  <li
    v-bind="$attrs"
    class="timeline-item"
    :class="[`timeline-variant-${variant}`, fillBorder ? `timeline-item-fill-border-${variant}` : null]"
    v-on="$listeners"
  >
    <div
      v-if="!icon"
      class="timeline-item-point"
    />
    <div
      v-else
      class="timeline-item-icon d-flex align-items-center justify-content-center rounded-circle"
    >
      <feather-icon :icon="icon" />
    </div>

    <slot>
      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
        <h6 v-text="title" />
        <small
          class="timeline-item-time text-nowrap text-muted"
          v-text="time"
        />
      </div>
      <p
        class="mb-0"
        v-text="subtitle"
      />
    </slot>
  </li>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    fillBorder: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include'; // Bootstrap includes
@import '~@core/scss/base/components/include'; // Components includes

// Color palettes
@import '~@core/scss/base/core/colors/palette-variables.scss';

$timeline-border-color: $border-color;

/* Generate:
*  Apply background color to dot
*/
@each $color_name, $color in $colors {
  @each $color_type, $color_value in $color {
    @if $color_type== 'base' {
      .timeline-variant-#{$color_name} {
        &.timeline-item-fill-border-#{$color_name} {
          border-color: $color_value !important;
          &:last-of-type {
            &:after {
              background: linear-gradient($color_value, $white);
            }
          }
        }
        .timeline-item-point {
          background-color: $color_value;

          &:before {
            background-color: rgba($color_value, 0.12);
          }
        }

        .timeline-item-icon {
          color: $color_value;
          border: 1px solid $color_value;
        }
      }
    }
  }
}

.timeline-item {
  padding-left: 2.5rem;
  position: relative;
  &:not(:last-of-type) {
    padding-bottom: 2rem;
    border-left: 1px solid $timeline-border-color;
  }

  // This gives shade to last timeline-item but isn't that revolutionary
  &:last-of-type {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 1px;
      height: 100%;
      background: linear-gradient($timeline-border-color, $white);
    }
  }

  .timeline-item-point {
    position: absolute;
    left: -6px;
    width: 12px;
    height: 12px;
    top: 0;
    border-radius: 50%;
    z-index: 1;

    &:before {
      content: '';
      z-index: 1;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      position: absolute;
      top: -4px;
      left: -4px;
      bottom: 0;
      right: 0;
    }
  }

  .timeline-item-icon {
    position: absolute;
    left: -12px;
    top: 0;
    width: 24px;
    height: 24px;
    background-color: $white;
    z-index: 1;
  }
}

// *===============================================---*
// *--------- Dark Layout ---------------------------------------*
// *===============================================---*

.dark-layout {
  .timeline-item {
    &:last-of-type {
      &:after {
        background: linear-gradient($theme-dark-border-color, $theme-dark-card-bg);
      }
    }
    &:not(:last-of-type) {
      border-left-color: $theme-dark-border-color;
    }

    .timeline-item-icon {
      background-color: $theme-dark-card-bg;
    }
  }
}
</style>
