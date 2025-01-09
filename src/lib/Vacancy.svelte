<script>
   
    export let title, language, company, hours, city, href
</script>


<div>
    <h2 class="job-title">{title}</h2>
    <span class="company">{company}</span>
    <span class="language">{language}</span>
    <span class="workweek">{hours}</span>
    <span class="city" >{city}</span>

 
</div>


<style>

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 1.75em;
        padding-bottom: 10%;
        margin-bottom: 10%;
        border-bottom: 1px solid var(--black);
    }
    .job-title {
        width: 100%;
    }
    h2 {
        font-weight: 400;
        font-size: 2em;
    }
    .company, .language, .workweek, .city {
        width: 37.5%;
    }
    @media (min-width: 540px){
        .company, .language, .workweek, .city {
            width: 29%;
        }
    }
    @media (min-width: 560px){
        div {
            padding-bottom: 5%;
            margin-bottom: 5%;
        }
    }
    @media (min-width: 812px){
        div {
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
        }
        .job-title {
            width: 30%;
        }
        .company, .language{
            width: 10%;
        }
        .workweek, .city {
            width: 20%;
        }
    }
</style>
