 





    var typed = new Typed('#element', {
      strings: ['<i>Create </i> Our Blog.',"Login For More Features","Create read and grow"],
      typeSpeed: 60,
      backDelay: 900,
      loop:true
    });



    const darkModeCall=()=>{
      const body=document.querySelector('html');
      html.classList.toggle('dark');
    }

    document.querySelector("#dark-mode-toggle").addEventListener("click",darkModeCall)