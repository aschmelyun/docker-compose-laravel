<template>
  <b-card
    v-if="Object.keys(blogEdit).length"
    class="blog-edit-wrapper"
  >
    <!-- media -->
    <b-media
      no-body
      vertical-align="center"
    >
      <b-media-aside class="mr-75">
        <b-avatar
          size="38"
          :src="blogEdit.avatar"
        />
      </b-media-aside>
      <b-media-body>
        <h6 class="mb-25">
          {{ blogEdit.userFullName }}
        </h6>
        <b-card-text>{{ blogEdit.createdTime }}</b-card-text>
      </b-media-body>
    </b-media>
    <!--/ media -->

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="6">
          <b-form-group
            label="Title"
            label-for="blog-edit-title"
            class="mb-2"
          >
            <b-form-input
              id="blog-edit-title"
              v-model="blogEdit.blogTitle"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Category"
            label-for="blog-edit-category"
            class="mb-2"
          >
            <v-select
              id="blog-edit-category"
              v-model="blogEdit.blogCategories"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              multiple
              :options="categoryOption"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Slug"
            label-for="blog-edit-slug"
            class="mb-2"
          >
            <b-form-input
              id="blog-edit-slug"
              v-model="blogEdit.slug"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Status"
            label-for="blog-edit-category"
            class="mb-2"
          >
            <v-select
              id="blog-edit-category"
              v-model="blogEdit.status"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOption"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Content"
            label-for="blog-content"
            class="mb-2"
          >
            <quill-editor
              id="blog-content"
              v-model="blogEdit.excerpt"
              :options="snowOption"
            />
          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
          <div class="border rounded p-2">
            <h4 class="mb-1">
              Featured Image
            </h4>
            <b-media
              no-body
              vertical-align="center"
              class="flex-column flex-md-row"
            >
              <b-media-aside>
                <b-img
                  ref="refPreviewEl"
                  :src="blogEdit.featuredImage"
                  height="110"
                  width="170"
                  class="rounded mr-2 mb-1 mb-md-0"
                />
              </b-media-aside>
              <b-media-body>
                <small class="text-muted">Required image resolution 800x400, image size 10mb.</small>
                <b-card-text class="my-50">
                  <b-link id="blog-image-text">
                    C:\fakepath\{{ blogFile ? blogFile.name : 'banner.jpg' }}
                  </b-link>
                </b-card-text>
                <div class="d-inline-block">
                  <b-form-file
                    ref="refInputEl"
                    v-model="blogFile"
                    accept=".jpg, .png, .gif"
                    placeholder="Choose file"
                    @input="inputImageRenderer"
                  />
                </div>
              </b-media-body>
            </b-media>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mt-50"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mr-1"
          >
            Save Changes
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
          >
            Cancel
          </b-button>
        </b-col>
      </b-row>
    </b-form>
    <!--/ form -->
  </b-card>
</template>

<script>
import {
  BCard,
  BMedia,
  BAvatar,
  BCardText,
  BMediaAside,
  BMediaBody,
  BForm,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BImg,
  BFormFile,
  BLink,
  BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { quillEditor } from 'vue-quill-editor'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BCard,
    BMedia,
    BAvatar,
    BCardText,
    BMediaAside,
    BMediaBody,
    BForm,
    BLink,
    BImg,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormFile,
    vSelect,
    quillEditor,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      blogEdit: {},
      blogFile: null,
      categoryOption: ['Fashion', 'Food', 'Gaming', 'Quote', 'Video'],
      statusOption: ['Published', 'Pending', 'Draft'],
      snowOption: {
        theme: 'snow',
      },
    }
  },
  created() {
    this.$http.get('/blog/list/data/edit').then(res => {
      this.blogEdit = res.data
    })
  },
  setup() {
    const refInputEl = ref(null)
    const refPreviewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => {
      refPreviewEl.value.src = base64
    })

    return {
      refInputEl,
      refPreviewEl,
      inputImageRenderer,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
@import '~@core/scss/vue/libs/quill.scss';
@import '~@core/scss/vue/pages/page-blog.scss';
</style>
