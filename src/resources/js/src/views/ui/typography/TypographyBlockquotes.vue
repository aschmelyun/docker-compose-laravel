<template>
  <section id="blockquotes">
    <b-row class="match-height">
      <!-- blockquotes -->
      <b-col cols="12">
        <div class="group-area mt-1">
          <h4>Blockquotes</h4>
          <p>
            For quoting blocks of content from another source within your document. Wrap
            <code class="highlighter-rouge">&lt;blockquote class="blockquote"&gt;</code> around any
            <abbr title="HyperText Markup Language">HTML</abbr> as the quote.
          </p>
          <hr>
        </div>
      </b-col>
      <!-- blockquotes -->

      <!-- default -->
      <b-col md="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title>
              Blockquotes <small class="text-muted">Default</small>
            </b-card-title>
          </b-card-header>
          <b-card-body>
            <b-card-text>
              Left aligned basic blockquotes. Use text utilities classes like <code>.text-center / .text-right</code> as
              needed to change the alignment of your blockquote.
            </b-card-text>
            <blockquote class="blockquote">
              <p class="mb-0">
                Design is not just what it looks like and feels like. Design is how it works.
              </p>
            </blockquote>
          </b-card-body>
        </b-card>
      </b-col>
      <!--/ default -->

      <!-- naming a source -->
      <b-col md="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title>
              Naming a source <small class="text-muted">Default</small>
            </b-card-title>
          </b-card-header>
          <b-card-body>
            <b-card-text>
              Add a <code class="highlighter-rouge">&lt;footer class="blockquote-footer"&gt;</code> for identifying the
              source. Wrap the name of the source work in <code class="highlighter-rouge">&lt;cite&gt;</code>.
            </b-card-text>

            <blockquote class="blockquote">
              <p class="mb-0">
                Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done
                something wonderful, that's what matters to me.
              </p>
              <footer class="blockquote-footer">
                Steve Jobs
                <cite title="Source Title">Entrepreneur</cite>
              </footer>
            </blockquote>
          </b-card-body>
        </b-card>
      </b-col>
      <!--/ naming a source -->

      <!-- blockquotes styling -->
      <b-col md="6">
        <b-card>
          <b-card-title>
            Blockquotes styling <small class="text-muted">Default</small>
          </b-card-title>
          <b-card-text>
            Add a <code class="highlighter-rouge">.border-{left/right}-{color} .border-{left/right}-3</code> helper
            classes, where color can be any color from Vuexy Admin color palette.
          </b-card-text>
          <blockquote class="blockquote pl-1 border-left-primary border-left-3">
            <p class="mb-0">
              Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving
              your other innovations.
            </p>
            <footer class="blockquote-footer">
              Steve Jobs
              <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>
          <blockquote class="blockquote pr-1 mt-2 text-right border-right-primary border-right-3">
            <p class="mb-0">
              Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving
              your other innovations.
            </p>
            <footer class="blockquote-footer">
              Steve Jobs
              <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <!--/ blockquotes styling -->

      <!-- blockquotes avatar -->
      <b-col md="6">
        <b-card>
          <b-card-title>Blockquotes with avatar Default</b-card-title>
          <b-card-text>
            Blockquotes with avatar. it use Media Object. You can customize image type, border alignment &amp; style.
          </b-card-text>
          <blockquote class="blockquote pl-1 border-left-primary border-left-3">
            <b-media no-body>
              <b-media-aside class="mr-1">
                <b-img
                  :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"
                  alt="Generic placeholder image"
                  height="64"
                  width="64"
                />
              </b-media-aside>
              <b-media-body>
                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
              </b-media-body>
            </b-media>
            <footer class="blockquote-footer text-right">
              Steve Jobs
              <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>
          <b-card-text class="mt-2">
            Blockquotes with avatar rounded image example
          </b-card-text>
          <blockquote class="blockquote mt-1">
            <b-media no-body>
              <b-media-aside class="mr-1">
                <b-img
                  rounded="circle"
                  :src="require('@/assets/images/portrait/small/avatar-s-3.jpg')"
                  alt="Generic placeholder image"
                  height="64"
                  width="64"
                />
              </b-media-aside>
              <b-media-body>
                Sometimes life is going to hit you in the head with a brick. Don't lose faith.
              </b-media-body>
            </b-media>
            <footer class="blockquote-footer text-right">
              Steve Jobs
              <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <!--/ blockquotes avatar -->
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardHeader, BCardBody, BCardText, BCardTitle, BMedia, BMediaAside, BMediaBody, BImg,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BImg,
    BCardHeader,
    BCardBody,
    BCardText,
    BCardTitle,
    BMedia,
    BMediaAside,
    BMediaBody,
  },
}
</script>
