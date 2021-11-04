<template>
  <section id="description-list-alignment">
    <div class="group-area mt-1">
      <h4>Description list alignment</h4>
      <p>
        Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins).
        For longer terms, you can optionally add a <code class="highlighter-rouge">.text-truncate</code> class to
        truncate the text with an ellipsis.
      </p>
      <hr>
    </div>

    <b-row class="match-height">
      <!-- Description lists horizontal -->
      <b-col md="8">
        <b-card no-body>
          <b-card-header>
            <b-card-title>
              Description lists <small class="text-muted">Horizontal</small>
            </b-card-title>
          </b-card-header>
          <b-card-body>
            <dl class="row">
              <dt class="col-sm-3">
                Description lists
              </dt>
              <dd class="col-sm-9">
                A description list is perfect for defining terms.
              </dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">
                Euismod
              </dt>
              <dd class="col-sm-9">
                Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
              </dd>
            </dl>
            <dl class="row">
              <dt />
              <dd class="col-sm-9 ml-auto">
                Donec id elit non mi porta gravida at eget metus.
              </dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">
                Malesuada porta
              </dt>
              <dd class="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd class="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus.
              </dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">
                Nesting
              </dt>
              <dd class="col-sm-9">
                <dl class="row">
                  <dt class="col-sm-4">
                    Nested definition list
                  </dt>
                  <dd class="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </b-card-body>
        </b-card>
      </b-col>
      <!--/ Description lists horizontal -->

      <!-- Description lists vertical-->
      <b-col md="4">
        <b-card>
          <b-card-title>Description lists <small class="text-muted">Vertical</small></b-card-title>
          <dl>
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Euismod</dt>
            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio.</dd>
            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
          </dl>
        </b-card>
      </b-col>
      <!--/ Description lists vertical-->

      <!-- Description lists horizontal -->
      <b-col cols="12">
        <b-card>
          <b-card-title>Description lists <small class="text-muted">Horizontal</small></b-card-title>
          <b-card-text>
            Description lists with right aligned text in <code>&lt;dt&gt;</code> tag using <code>.text-right</code>
          </b-card-text>
          <dl class="row">
            <dt class="col-sm-3 text-right">
              Description lists
            </dt>
            <dd class="col-sm-9">
              A description list is perfect for defining terms.
            </dd>
          </dl>
          <dl class="row">
            <dt class="col-sm-3 text-right">
              Euismod
            </dt>
            <dd class="col-sm-9">
              Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
            </dd>
          </dl>
          <dl class="row">
            <dt />
            <dd class="col-sm-9 ml-auto">
              Donec id elit non mi porta gravida at eget metus.
            </dd>
          </dl>
          <dl class="row">
            <dt class="col-sm-3 text-right">
              Malesuada porta
            </dt>
            <dd class="col-sm-9">
              Etiam porta sem malesuada magna mollis euismod.
            </dd>
          </dl>
          <dl class="row">
            <dt class="col-sm-3 text-right text-truncate">
              Truncated term is truncated
            </dt>
            <dd class="col-sm-9">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus.
            </dd>
          </dl>
          <dl class="row">
            <dt class="col-sm-3 text-right">
              Nesting
            </dt>
            <dd class="col-sm-9">
              <dl class="row">
                <dt class="col-sm-4">
                  Nested definition list
                </dt>
                <dd class="col-sm-8">
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
                </dd>
              </dl>
            </dd>
          </dl>
        </b-card>
      </b-col>
      <!--/ Description lists horizontal -->
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardTitle, BCardText, BCardHeader, BCardBody,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardTitle,
    BCardText,
    BCardHeader,
    BCardBody,
  },
}
</script>
