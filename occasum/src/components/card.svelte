<script>
    export let path
    export let alt
    export let text
    export let author
    export let date
</script>



<div class="container principal is-flex is-flex-direction-column color border m-5 my-5" >

    <div class="head">
        <figure class="image is-square">
            <img src={path} alt={alt} class="p-5">
        </figure>
    </div>
    <div class="body color m-2 container has-text-centered is-align-items-center is-flex ">
        <div class="block frase is-small container">
            <p class="is-size-6">
                {text}

            </p>
        </div>
    </div>

    <div class="footer is-flex is-flex-direction-row color has-text-centered is-flex-wrap-wrap mt-6">
        <div class="date container color ">
            {date}
        </div>
        <div class="author container color">
            {author}
        </div>
    </div>
</div>





<style> 
    
    
    .color {
        background-color: white;
    }

    .border {
        border-radius: .4rem;
        border: 1px solid black;
    }

    .frase {
        width: 20vw;
    
    }

    .frase p {
        font-size: 1rem;
    }
</style>