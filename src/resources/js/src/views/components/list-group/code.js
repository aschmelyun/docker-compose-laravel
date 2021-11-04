export const codeListGroupBasic = `
<template>
  <b-list-group>
    <b-list-group-item>Cras justo odio</b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
    <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
    <b-list-group-item>Vestibulum at eros</b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeListGroupDisable = `
<template>
  <b-list-group>
    <b-list-group-item disabled>
      Cras justo odio
    </b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
    <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
    <b-list-group-item>Vestibulum at eros</b-list-group-item>
  </b-list-group>
</template>

<script>
import {BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeListGroupAction = `
<template>
  <b-list-group>
    <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
    <b-list-group-item href="#" active>Link with active state</b-list-group-item>
    <b-list-group-item href="#">Action links are easy</b-list-group-item>
    <b-list-group-item href="#">Action links are fast</b-list-group-item>
    <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeListGroupActionButton = `
<template>
  <b-list-group>
    <b-list-group-item button>Button item</b-list-group-item>
    <b-list-group-item button>Button item in list</b-list-group-item>
    <b-list-group-item button>I am a button</b-list-group-item>
    <b-list-group-item button disabled>Disabled button</b-list-group-item>
    <b-list-group-item button>This is a button too</b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeListGroupContextual = `
<template>
  <b-list-group>
    <b-list-group-item variant="primary">
      Pie fruitcake jelly-o
    </b-list-group-item>
    <b-list-group-item variant="secondary">
      halvah icing marshmallow
    </b-list-group-item>
    <b-list-group-item variant="success">
      Cake caramels donut danish muffin biscuit
    </b-list-group-item>
    <b-list-group-item variant="danger">
      Chocolate cake pie lollipop
    </b-list-group-item>
    <b-list-group-item variant="warning">
      Apple pie toffee pudding gummi bears
    </b-list-group-item>
    <b-list-group-item variant="info">
      Jujubes chupa chups cheesecake tart
    </b-list-group-item>
    <b-list-group-item variant="dark">
      Candy fruitcake bonbon sesame snaps dessert
    </b-list-group-item>
  </b-list-group>
</template>


<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeListGroupHorizontal = `
<template>
  <b-list-group horizontal="md">
    <b-list-group-item>Chocolate cake</b-list-group-item>
    <b-list-group-item>Cookie pie</b-list-group-item>
    <b-list-group-item>Cheesecake</b-list-group-item>
    <b-list-group-item>Cotton candy</b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeListGroupBadge = `
<template>
  <!-- badge -->
  <b-list-group>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <span>Biscuit jelly beans macaroon danish pudding.</span>
      <b-badge
        variant="primary"
        pill
        class="badge-round"
      >
        8
      </b-badge>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <span>chocolate cheesecake candy</span>
      <b-badge
        variant="primary"
        pill
        class="badge-round"
      >
        7
      </b-badge>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <span>Oat cake icing pastry pie carrot</span>
      <b-badge
        variant="primary"
        pill
        class="badge-round"
      >
        6
      </b-badge>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem, BBadge } from 'bootstrap-vue'

export default {
  components: {
    BBadge,
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeFlush = `
<template>
  <b-list-group flush>
    <b-list-group-item>Sweet gummi bears gingerbread carrot</b-list-group-item>
    <b-list-group-item>Cake macaroon brownie wafer soufflé</b-list-group-item>
    <b-list-group-item>Jelly beans lemon drops</b-list-group-item>
    <b-list-group-item>Lollipop ice cream donut chupa chups</b-list-group-item>
    <b-list-group-item>Chocolate candy canes tootsie roll</b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeCustom = `
<template>
  <b-list-group>
    <b-list-group-item
      active
      class="flex-column align-items-start"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 text-white">
          List group item heading
        </h5>
        <small class="text-secondary">3 days ago</small>
      </div>
      <b-card-text class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </b-card-text>
      <small class="text-secondary">Donec id elit non mi porta.</small>
    </b-list-group-item>

    <b-list-group-item class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">
          List group item heading
        </h5>
        <small class="text-secondary">3 days ago</small>
      </div>
      <b-card-text class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </b-card-text>
      <small class="text-secondary">Donec id elit non mi porta.</small>
    </b-list-group-item>

    <b-list-group-item class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">
          Disabled List group item
        </h5>
        <small class="text-secondary">3 days ago</small>
      </div>
      <b-card-text class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </b-card-text>
      <small class="text-secondary">Donec id elit non mi porta.</small>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`

export const codeListAvatar = `
<template>
  <div>
    <b-list-group flush>
      <b-list-group-item>
        <div class="d-flex align-items-center">
        <b-avatar :src="require('@/assets/images/small/avatar-s-8.jpg')" />
          <div class="d-flex flex-column ml-1">
            <strong>Steve Jobes</strong>
            <small>Top Contributor</small>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="d-flex align-items-center">
        <b-avatar :src="require('@/assets/images/small/avatar-s-10.jpg')" />
          <div class="d-flex flex-column ml-1">
            <strong>Matt</strong>
            <small>11 Points</small>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="d-flex align-items-center">
        <b-avatar :src="require('@/assets/images/small/avatar-s-24.jpg')" />
          <div class="d-flex flex-column ml-1">
            <strong>Xian Famous Foods</strong>
            <small>A taste of Shaanxi's delicious culinary traditions.</small>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { BListGroup, BListGroupItem, BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
    BAvatar,
  },
}
</script>
`

export const codeIcon = `
<template>
  <b-list-group>
    <b-list-group-item class="d-flex">
      <span class="mr-1">
        <feather-icon
          icon="InstagramIcon"
          size="16"
        />
      </span>
      <span>Cupcake sesame snaps dessert marzipan.</span>
    </b-list-group-item>

    <b-list-group-item class="d-flex">
      <span class="mr-1">
        <feather-icon
          icon="FacebookIcon"
          size="17"
        />
      </span>
      <span>Jelly beans jelly-o gummi bears chupa chups marshmallow.</span>
    </b-list-group-item>

    <b-list-group-item class="d-flex">
      <span class="mr-1">
        <feather-icon
          icon="TwitterIcon"
          size="16"
        />
      </span>
      <span>Bonbon macaroon gummies pie jelly</span>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem} from 'bootstrap-vue'

export default {
  components: {
    BListGroup,
    BListGroupItem,
  },
}
</script>
`
