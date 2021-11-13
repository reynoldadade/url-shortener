<template>
  <div class="w-full h-full relative">
    <Header />
    <Hero />
    <Shortener
      :shorten-u-r-l="shortenURL"
      :loading="loading"
      :links="links"
      :selected-link="selectedLink"
      :copy-text="copyText"
    />
    <information />
    <boost />
    <Footer />
    <Overlay :show-overlay="loading" :overlay-text="loadingText" />
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Header from './header.vue'
import Hero from './hero.vue'
import Shortener from './shorterner.vue'
import information from './information.vue'
import boost from './boost.vue'
import Footer from './footer.vue'
import Overlay from './Overlay.vue'
export default {
  name: 'MainPage',
  components: {
    Header,
    Shortener,
    information,
    boost,
    Footer,
    Hero,
    Overlay,
  },
  data() {
    return {
      links: [],
      loading: false,
      loadingText: '',
      selectedLink: '',
    }
  },
  mounted() {
    // get saved links on page refresh
    const links = JSON.parse(localStorage.getItem('links'))

    if (links) {
      this.links = links
    }
  },
  methods: {
    // axios request to /shorten api
    async GET_shorten(url) {
      try {
        const response = await axios.get('https://api.shrtco.de/v2/shorten', {
          params: {
            url,
          },
        })
        return response.data
      } catch ({ response }) {
        return response.data
      }
    },
    // function that calls api function and manages return data
    async shortenURL(url) {
      this.loadingText = 'Getting your shortened link, please wait..'
      this.loading = true
      const response = await this.GET_shorten(url)
      if (response.ok) {
        this.links = [...this.links, response.result]
        localStorage.setItem('links', JSON.stringify(this.links))
        Swal.fire({
          title: 'Success!',
          text: `Link Generated`,
          icon: 'success',
        })
      } else {
        Swal.fire({
          title: 'Error!',
          text: `${response.error}`,
          icon: 'error',
        })
      }
      this.loading = false
    },

    // function to test returned data, accepts id of link
    copyText(id) {
      const r = document.createRange()
      r.selectNode(document.getElementById(id))
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(r)
      document.execCommand('copy')
      window.getSelection().removeAllRanges()
      this.selectedLink = id
    },
  },
}
</script>

<style></style>
