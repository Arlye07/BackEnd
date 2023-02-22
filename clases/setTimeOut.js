const asincrono = () => {
    setTimeout(()=>{console.log('continua asincrono')},2000);
}
console.log('inicia');
asincrono()
console.log('finaliza');