export default function initBikeSlide() {
  const radio = document.querySelector('.manual-btn');
  if(radio){
    let cont = 1;
    document.getElementById('radio1').checked = true;
  
    setInterval(() => {
      proximaBike();
    }, 5000);
  
    function proximaBike() {
      cont++;
  
      if (cont > 4) {
        cont = 1;
      }
      document.getElementById('radio' + cont).checked = true;
    }
  }
}