<script>

export default {
    name: 'AppHeader'
}
</script>

<template>
  <header>
    <div class="container h-100">
        <div class="logo">
            <h1 class="logo-text">DeliveBoo

                <img src="/img/glovo_logo.png" alt="Logo" class="logo-img">
            </h1>
        </div>
    </div>
  </header>
</template>

<style lang="scss" scoped >

header {
    height: 140px;
    background-color: #FFC244;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    .logo{
        height: 100%;
        display: flex;
        align-items: center;

        
        .logo-text{
            font-family: "Quicksand", sans-serif;
            color: #00A082;
            font-weight: 700;
            font-size: 3rem;

            .logo-img{
                height: 40px;
                position: relative;
                bottom: 25px;
                right: 35px;
            }
        }
    }
}
</style>