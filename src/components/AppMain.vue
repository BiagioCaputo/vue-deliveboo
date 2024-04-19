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
                    <h1 class="jumbo-title">Consegna di cibo a domicilio e molto altro</h1>
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

        <section class="top-restaurant">
            <h1 class="text-center my-5">
                I migliori ristoranti della tua città
                <i class="fa-solid fa-utensils"></i>
            </h1>

            <!--img e label dinamici-->
            <div class="text-center container-rest">
                <div class="row flex-container">
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    <div class="col flex-item">
                        <div class="round-img"></div>
                    </div>
                    
                </div>

            </div>

        </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: fit-content;

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
            width: 70%;
            margin: 0 auto;
            font-size: 3.5rem;
            font-weight: 700;
        }
    }

  }

  /* Input mail */
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
  

  /* Section Top Restaurant */
  .top-restaurant{
    margin-bottom: 50px;
    h1{
        font-weight: 700;
    }

    .container-rest{
        width: 70%;
        margin: 0 auto;
    }

    .row.flex-container{
        display: flex;
        margin: 0 -2rem;
        flex-wrap: wrap;

        .col.flex-item{
            margin: 2rem;
            flex-basis: calc(100% / 4 - 4rem);

            display: flex;
            justify-content: center;
        }
    }

    .round-img{
        width: 150px;
        height: 150px;
        background-color: #FFC244;
        border-radius: 50% 60% 50% 80%;
    }
}
}

</style>