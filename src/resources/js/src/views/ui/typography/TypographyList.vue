<template>
  <section id="lists">
    <div class="group-area mt-1">
      <h4>Lists</h4>
      <p>
        All lists - <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, and <code>&lt;dl&gt;</code> - have their
        margin-top removed and a <code>margin-bottom: 1rem</code>. Nested lists have no <code>margin-bottom</code>.
      </p>
      <hr>
    </div>
    <b-row class="match-height">
      <!-- Lists Unstyled -->
      <b-col md="4">
        <b-card title="Lists Unstyled">
          <b-card-text>
            Use class <code>.list-unstyled</code> for Lists Unstyled. It remove the default
            <code class="highlighter-rouge">list-style</code> and left margin on list items (immediate children only).
            <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class
            for any nested lists as well.
          </b-card-text>
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </b-card>
      </b-col>
      <!--/ Lists Unstyled -->

      <!-- Lists Unordered -->
      <b-col md="4">
        <b-card>
          <b-card-title>
            Lists Unordered <small class="text-muted">Default</small>
          </b-card-title>
          <b-card-text>
            List of items in which the order does not explicitly matter. Use <code>.list-style-circle</code> or
            <code>.list-style-square</code> class in unordered list to add circle or square bullet points.
          </b-card-text>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </b-card>
      </b-col>
      <!--/ Lists Unordered -->

      <!-- Lists Ordered -->
      <b-col md="4">
        <b-card>
          <b-card-title>Lists Ordered <small class="text-muted">Default</small></b-card-title>
          <b-card-text>
            List of items in which the order does explicitly matter. Use <code>&lt;ol type="1|a|A|i|I"&gt;</code>, The
            type attribute specifies the kind of marker to use in the list.
          </b-card-text>
          <ol>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Nulla volutpat aliquam velit
              <ol>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ol>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ol>
        </b-card>
      </b-col>
      <!--/ Lists Ordered -->

      <!-- Lists icons -->
      <b-col md="6">
        <b-card title="Lists icons">
          <b-card-text>
            list of terms with icons, use <code>.list-style-icons</code> class. You can use any icon from Vuexy Admin
            icon types.
          </b-card-text>
          <ul class="list-style-icons">
            <li><feather-icon icon="ArrowRightIcon" />Facilisis in pretium nisl aliquet</li>
            <li>
              <feather-icon icon="ArrowRightIcon" />Nulla volutpat aliquam velit
              <ul class="list-style-icons">
                <li><feather-icon icon="ChevronRightIcon" />Phasellus iaculis neque</li>
                <li><feather-icon icon="ChevronRightIcon" />Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li><feather-icon icon="ArrowRightIcon" />Faucibus porta lacus fringilla vel</li>
            <li><feather-icon icon="ArrowRightIcon" />Aenean sit amet erat nunc</li>
          </ul>
        </b-card>
      </b-col>
      <!--/ Lists icons -->

      <!-- Inline Lists-->
      <b-col md="6">
        <b-card>
          <b-card-title>Inline Lists <small class="text-muted">Default</small></b-card-title>
          <b-card-text>
            Remove a list’s bullets and apply some light <code>margin</code> with a combination of two classes,
            <code>.list-inline</code> and <code>.list-inline-item</code>.
          </b-card-text>
          <b-card-text>
            Use inline numbers, alphabet, icons etc... for ordered Inline List.
          </b-card-text>
          <ul class="list-inline">
            <li class="list-inline-item">
              Chocolate
            </li>
            <li class="list-inline-item">
              Cake
            </li>
            <li class="list-inline-item">
              Ice-Cream
            </li>
          </ul>
          <ul class="list-inline">
            <li class="list-inline-item">
              1. Chocolate
            </li>
            <li class="list-inline-item">
              2. Cake
            </li>
            <li class="list-inline-item">
              3. Ice-Cream
            </li>
          </ul>
          <ul class="list-inline">
            <li class="list-inline-item">
              <feather-icon icon="DollarSignIcon" />
              <span>250</span>
            </li>
            <li class="list-inline-item">
              <feather-icon icon="DollarSignIcon" />
              <span>110</span>
            </li>
            <li class="list-inline-item">
              <feather-icon icon="DollarSignIcon" />
              <span>890</span>
            </li>
          </ul>
        </b-card>
      </b-col>
      <!--/ Inline Lists-->
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BCardTitle,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BCardTitle,
  },
}
</script>
