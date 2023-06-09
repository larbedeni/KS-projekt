<template>
    <footer class="footer">
        <p>2023 Edminor | Web by Larisa Bedeniković</p>
        <a href="">info@edminorpottery.com</a>
    </footer>
</template>


<style scoped>
.footer {
    padding-left: 20px;
    padding-right: 20px;
    height: 4vh;
    width: 100%;
    max-width: 2000px;
    display: flex;
    background-color: #282828;
    justify-content: space-between;
    color: white;
    font-family: 'Jura', sans-serif;
    position: fixed;
    bottom: 0;
    font-weight: 300;
    font-size: 0.9em;
}

footer {
    padding-left: 20px;
    padding-right: 20px;
    height: 4vh;
    width: 100%;
    max-width: 2000px;
    display: flex;
    background-color: #282828;
    justify-content: space-between;
    color: white;
    font-family: 'Jura', sans-serif;
    position: relative;
    font-weight: 300;
    font-size: 0.9em;
}

footer p {
    display: flex;
    align-items: center;

}

footer a {
    text-decoration: none;
    color: white;
    font-style: italic;
}

.dark-background .footer {
    border: 1px white;
    border-style: solid;
    position: sticky;
    bottom: 0;
}
</style>
