<template>
    <div class="image"></div>
    <div class="center">
      <p class="title">Velkommen til Henriettes Eventyr - Sådan Spiller Du:</p>
  
      <p>For at starte spillet skal du taste "start".</p>
  
      <p>Henriettes Eventyr er et interaktivt tekstbaseret spil, hvor du træder ind i Henriettes verden og udforsker hendes hjem og eventyr. Her er nogle vigtige instruktioner for at komme i gang:</p>
  <br>
      <p>Spilpersonen - Henriette:</p>
      <p>Du spiller som Henriette, hovedpersonen i spillet, og dine valg vil forme hendes oplevelse.</p>
  <br>
      <p>Gamemaster (Styren af spillet):</p>
      <p>Spillet styres af mig, din gamemaster. Jeg beskriver scenarier og svarer på dine handlinger.</p>
  <br>
      <p>Mål i spillet:</p>
      <p>Henriettes mål og opgaver vil afsløre sig, efterhånden som du udforsker hendes verden.</p>
  <br>
      <p>Sådan Spiller Du:</p>
      <p>Du kan interagere med spillet ved at skrive tekstkommandoer i chatboksen.</p>
      <p>Spørg om, hvad du vil gøre, udforsk rum, og træf valg, som du synes passer til Henriettes historie.</p>
  <br>
      <p><b>Pointsystem:</b></p>
      <p>Du kan tjene point for at udføre gode handlinger og løse opgaver.</p>
      <p>Point vil blive tilføjet til dit pointtæller, som kan ses i spillet.</p>
  <br> 
      <p><b>Irrelevante Spørgsmål:</b></p>
      <p>Hvis du stiller spørgsmål, der ikke er relevante for spillet, vil svaret være: "Det er ikke relevant for spillet."</p>
  <br> 
      <p><b>Brug Hjælpesiden:</b></p>
      <p>Hvis du nogensinde er i tvivl eller har brug for hjælp, kan du besøge hjælpesiden for at få instruktioner og tips.</p>
  
      <br>
      <p><b>Start Spillet:</b></p>
      <p>Spillet begynder, når du skriver noget i chatboksen, og jeg byder dig velkommen til Henriettes Eventyr.</p>
  
      <p>Så gå videre, udforsk Henriettes verden, og lad eventyret begynde!</p>
    </div>
  </template>
  
  <style scoped>
  .center {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 4rem;
  }
  
  .title {
    font-size: 2rem;
    font-family: 'Rock Salt', cursive;
    text-shadow: 1px 1px 2px black;

  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image {
    background-image: url('/public/im3.png.png');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -50;
}

p {
    margin: 0rem;
}


  </style>
