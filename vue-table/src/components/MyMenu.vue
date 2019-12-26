
<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#/home">Home</b-nav-item>
        <b-nav-item href="#/about">About</b-nav-item>
        <b-nav-item href="#/crudtable1">Crud-Table 1</b-nav-item>
        <b-nav-item href="#/crudtable2">Crud-Table 2</b-nav-item>
        <b-nav-item href="#/playPage1">playPage1</b-nav-item>
        <b-nav-item href="#/playPage2">playPage2</b-nav-item>
        <!-- Navbar dropdowns -->
        <!--
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        -->

        <!--
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#/settings">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        -->
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'myMenu'
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
