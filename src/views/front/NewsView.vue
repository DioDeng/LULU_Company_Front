<template>
  <a href="#" class="header__backtop anchorLink">back to top</a>
</template>

<style lang="scss" scoped>
.header__backtop {
  color: #000000;
  display: block;
  font-size: 0;
  letter-spacing: 0;
  line-height: 0px;
  position: absolute;
  text-indent: 0;
  top: 240px;
  height: 34px;
  left: calc(50% - 28px);
  width: 56px;
}
.header__backtop:before {
  background-color: #1a1a1a;
  content: "";
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.header__backtop:after {
border-color: #1a1a1a;
border-style: solid;
border-width: 1px 1px 0 0;
content: "";
display: block;
height: 50px;
left: calc(50% - 25px);
pointer-events: none;
position: absolute;
top: 18px;
transform: translate(0) rotate(-45deg);
width: 50px;
}
</style>
