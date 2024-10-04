
<article>
    <slot name="job-title"/>
    <slot name="language"/>
    <slot name="company"/>
    <slot name="workweek-indication"/>
    <slot name="city" class="city"/>
    <slot name="link" class="link"/>
</article>

<style>

article {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto auto;
    gap: 2em 0;
    align-items: center;
    margin-bottom: 15%;
    padding-bottom: 15%;
    border-bottom: 1px solid black;
}

article:last-child {
    border-bottom: none;
}

@media (min-width: 620px){
    article {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 7.5%;
        padding-bottom: 7.5%;
        
    }

}

@media (min-width: 820px){
    article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 4.5%;
        padding-bottom: 4.5%;
    }
}

@media (min-width: 1024px){
    article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2.5%;
        padding-bottom: 2.5%;
    }
}


</style>