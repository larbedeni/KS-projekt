<template>
    <nav id="navBar" class="nav-bar" :class="{'nav-bar-top': moveNavbarTop, 'nav-bar-dark': isNavbarDark}">
      <router-link :to="route.to" class="nav-link" v-for="route in navRoutes">
          <p class="num" :class="{active: isActiveRoute(route.name)}">
              {{ route.num }}
          </p>
          <p>{{ route.title }}</p>
      </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
      return {
          navRoutes: [
              {
                  name: "home",
                  to: "/",
                  title: "Home",
                  num: "01",
              },
              {
                  name: "about",
                  to: "/about",
                  title: "About",
                  num: "02",
              },
              {
                  name: "workshops",
                  to: "/workshops",
                  title: "Workshops",
                  num: "03",
              },
              {
                  name: "contact",
                  to: "/contact",
                  title: "Contact",
                  num: "04",
              },
          ]
      };
  },
  computed: {
      currentRouteName() {
          return this.$route.name;
      },
      moveNavbarTop() {
          // Returns true if the current path/route is inside the array of views
          // where we want to have navbar on the top and with a dark theme.
          // All route names are in src/router/index.js
          // We could also do it with: return this.currentRouteName != "home"
          return ["about", "workshops", "contact"].includes(this.currentRouteName);
      },
      isNavbarDark() {
          return ["about", "workshops"].includes(this.currentRouteName);
      },
  },
  methods: {
      isActiveRoute(routeName) {
          return this.currentRouteName === routeName;
      },
  },
    watch:{
        $route (to, from){
            if (this.isNavbarDark) {
                document.body.classList.add('dark-background')
            } else {
                document.body.classList.remove('dark-background')

            }
        }
    }
}

</script>

<style scoped>

.nav-bar{
  height: 10vh;
  text-align: center;
  align-items: center;
  position: fixed;
  bottom: 4vh;
  width: 100%;
  max-width: 2000px;
  color: black;
  display: flex;
  justify-content: space-around;
  z-index: 999;
  border: 1px black;
  border-style: solid;

}

.nav-bar-dark,
.nav-bar-dark a.nav-link {
  color: white;
  border-color: white;
  background-color: #131313;
}

.nav-bar-dark a.nav-link .num.active {
  border: 1px white;
  border-style: solid;
  border-radius: 3px;
}

.nav-bar-top {
  top: 0;
  bottom: auto;
}

.nav-link{
  display: flex;
  flex-direction: column;
  color: black;
  text-decoration: none;
  text-align: center;
}

a{
  display: flex;
  align-items: center;
  font-family: 'Jura', sans-serif;;
}

a .num{
  display: flex;
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
}

.nav-bar a:hover{
  font-weight: 500;
}

a .active{
  border: 1px black;
  border-style: solid;
  border-radius: 3px;
}

a .active:hover{
  border: 2px black;
  border-style: solid;
}
</style>
