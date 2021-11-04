export const codeBasic = `
<template>
  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
</template>

<script>
import { BImg } from 'bootstrap-vue'

export default {
  components: {
    BImg,
  }
}
</script>
`

export const codeAlignment = `
<template>
  <div class="clearfix">
    <b-img  left class="mb-1 mb-sm-0" height="120" :src="require('@/assets/images/banner/banner-34.jpg" alt="Left image')"/>
    <b-img right class="mb-1 mb-sm-0" height="120" :src="require('@/assets/images/banner/banner-34.jpg" alt="Right image')"/>
    <b-img center class="mb-1 mb-sm-0" height="120" :src="require('@/assets/images/banner/banner-34.jpg" alt="Center image')"/>
  </div>
</template>

<script>
import { BImg } from 'bootstrap-vue'

export default {
  components: {
    BImg,
  }
}
</script>
`

export const codeBlank = `
<template>
  <div>
    <b-img
      v-bind="mainProps"
      rounded
      alt="Transparent image"
      class="d-inline-block mr-1 mb-1 border"
    />
    <b-img
      v-bind="mainProps"
      blank-color="#5A8DEE"
      rounded
      alt="HEX shorthand color image (#777)"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      blank-color="#475F7B"
      rounded
      alt="Named color image (red)"
      class="d-inline-block mr-1 mb-1"
    />

    <b-img
      v-bind="mainProps"
      blank-color="#39DA8A"
      rounded
      alt="Named color image (black)"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      blank-color="#FF5B5C"
      rounded
      alt="HEX color image"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      blank-color="#FDAC41"
      alt="RGBa color image"
      rounded
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      blank-color="#00CFDD"
      rounded
      alt="HEX shorthand color (#88f)"
      class="d-inline-block mr-1 mb-1"
    />
  </div>
</template>

<script>
import { BImg } from 'bootstrap-vue'

export default {
  components: {
    BImg,
  },
  data: () => ({
    mainProps: {
      blank: true,
      width: 75,
      height: 75,
      class: 'm1',
    },
  }),
}
</script>
`

export const codeResponsive = `
<template>
  <div>
    <h6>Small image with <code>fluid</code>:</h6>
    <b-img :src="require('@/assets/images/water-drop-small.jpg" fluid alt="Fluid image')" />

    <h6 class="my-1">Small image with <code>fluid-grow</code>:</h6>
    <b-img :src="require('@/assets/images/water-drop-small.jpg" fluid-grow alt="Fluid-grow image')" />
  </div>
</template>

<script>
import { BImg } from 'bootstrap-vue'

export default {
  components: {
    BImg,
  },
}
</script>
`

export const codeRoundedCorner = `
<template>
  <div>
    <b-img
      v-bind="mainProps"
      rounded
      alt="Rounded image"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      rounded="top"
      alt="Top-rounded image"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      rounded="right"
      alt="Right-rounded image"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      rounded="bottom"
      alt="Bottom-rounded image"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      rounded="left"
      alt="Left-rounded image"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      rounded="circle"
      alt="Circle image"
      class="d-inline-block mr-1 mb-1"
    />
    <b-img
      v-bind="mainProps"
      rounded="0"
      alt="Not rounded image"
      class="d-inline-block mr-1 mb-1"
    />
  </div>
</template>

<script>
import { BImg } from 'bootstrap-vue'

export default {
 BImg, },
  data: () => ({
    mainProps: {
      blank: true,
      blankColor: '#777',
      width: 75,
      height: 75,
      class: 'm1',
    },
  }),
}
</script>
`

export const codeThumbnails = `
<template>
  <b-container fluid class="p-1 bg-dark">
    <b-row>
      <b-col>
        <b-img thumbnail fluid :src="require('@/assets/images/sky-high.jpg" alt="Image 1')" />
      </b-col>
      <b-col>
        <b-img thumbnail fluid :src="require('@/assets/images/light-house-thumb.jpg" alt="Image 2')" />
      </b-col>
      <b-col>
        <b-img thumbnail fluid :src="require('@/assets/images/border.jpg" alt="Image 3')" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BImg, BContainer, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BImg,
    BContainer,
    BRow,
    BCol,
  },
}
</script>
`

export const codeLazy = `
<template>
  <div>
    <b-img-lazy :src="require('@/assets/images/banner/banner-6.jpg" fluid class="w-100')"/>
  </div>
</template>

<script>
import { BImgLazy } from 'bootstrap-vue'

export default {
  components: {
    BImgLazy,
  },
}
</script>
`
