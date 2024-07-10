<template>
  <footer
    class="flex md:justify-between border-top text-menu-text font-fira_retina"
  >
    <!-- social icons -->
    <div class="w-full flex justify-between md:justify-start">
      <div id="social-icons" class="flex">
        
      </div>
    </div>

    <!-- github user -->
    <NuxtLink
      :to="social.github.url"
      target="_blank"
      class="hidden md:flex items-center px-5 border-left"
    >
      @{{ social.github.user }}
      <img src="/icons/social/github.svg" />
    </NuxtLink>
  </footer>
</template>

<style>
footer {
  height: 40px;
  min-height: 40px;
  font-size: 13px;
}

footer a:hover {
  background-color: #1e2d3d74;
}

#social-icons > a {
  border-right: 1px solid #1e2d3d;
  height: 100%;
  width: 50px;
}

#social-icons > a > img {
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
  margin: auto;
  opacity: 0.4;
}

footer > a > img {
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
  margin-left: 0.5rem; /* 8px */
}

#social-icons > a:hover img {
  opacity: 1;
}

@media (max-width: 768px) {
  #social-title {
    border-right: none;
  }

  #social-icons > a {
    border-right: none;
    border-left: 1px solid #1e2d3d;
  }

  #social-icons > a > img {
    width: 1.5rem; /* 20px */
    height: 1.5rem; /* 20px */
  }
}
</style>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      route: this.$route.path,
    };
  },
  setup() {
    return {
      social: useRuntimeConfig().dev.contacts.social,
    };
  },
};
</script>
