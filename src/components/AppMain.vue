<script>
export default {
    name: 'AppMain'
}
</script>

<template>
     <main>
        <!--Componente Jumbotron-->
        <div class="jumbotron">
            <div class="jumbo-content container">
                <div class="box-img"></div>
                <div class="text-center">
                    <h1 class="jumbo-title">Consegna di cibo a domicilio</h1>
                    <p class="jumbo-subtitle">Ordina dai tuoi ristoranti preferiti, in pochi minuti a casa tua.</p>
                    <div class="input-group mb-3">
                        <span class="input-group-text" type="text">@</span>
                        <input type="text" class="form-control" placeholder="Inserisci la tua mail">
                    </div>
                </div>
            </div>
        </div>
        <img src="/img/jumbotron-wave-desktop.svg" alt="footer-wave">


        <!---------------------------->
    <h1 class="text-center my-5">DeliveBoo <i class="fa-solid fa-utensils"></i></h1>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 800px; /* costruzione */

    /*Wave img */
    img{
        width: 100%;
    }

  .jumbotron{
    height: 600px; /*Costruzione*/
    background-color: #FFC244;
    padding-top: 200px;

    
    .jumbo-content{
        width: 70%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;


        .box-img{
            width: 300px;
            height: 300px;
            border: 2px solid #00A082;
        }

        .jumbo-title{
            font-size: 3.5rem;
            font-weight: 700;
        }
    }

  }
  .input-group{
    width: 80%;
    margin: 0 auto;

    span{
        background-color: #00A082;
        border-color: #00A082;
        color:white;
        font-weight: 600;
    }
  }
  
}
</style>