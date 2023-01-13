function vinculo(pagina) {
    let a = document.createElement('a');
    a.target = "_blank";


    switch (pagina) {
        case "caja":
            a.href="https://jhovannyvivas.github.io/caja_de_comentarios_simulada/";
            
            break;
        case "consejos":
            a.href="https://jhovannyvivas.github.io/advice-generator-app/";
            
            break;
        case "secuencia":
            a.href="https://jhovannyvivas.github.io/repite-los-pasos/";
            
            break;
        case "tarjeta":
            a.href="https://jhovannyvivas.github.io/product-preview-card-component/";
            
            break;
        case "universo":
            a.href="https://universo-3jx2.vercel.app/";
            
            break;
    
        default:
            break;
    }



    a.click();
}