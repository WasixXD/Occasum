<script>
    import Card from "./components/card.svelte"
   


    let result
    async function getContent() {

        let url = "https://not-occasum.onrender.com/img"
        let response = await fetch(url)
        result  = await response.json()
        
        
    }


    

    window.addEventListener("load", getContent)
    
</script>
<link rel="stylesheet" href="css/global.css">

              
    {#if !!result}
        {#each result as post}
            <Card path={post.link} alt={post.author} text={post.subtitle} date={post.date} author={post.author}></Card>
        {/each}
        
    {/if}





<style> 
    
</style>
