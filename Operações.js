   
      document.querySelectorAll('form span').forEach(item => {
        item.addEventListener('click', (e) => {
           addVal(item.innerHTML);
        })
      });
      
     function addVal(valor) {
     if(valor=='CE')
          document.Calculadora.expressao.value ='';
     else if(valor =='=')
       try{
          document.Calculadora.expressao.value = eval(document.Calculadora.expressao.value.replaceAll(',','.')).toString().replaceAll('.',',');
       } catch(e) {
         document.Calculadora.expressao.value = '';
       }
      else
          document.Calculadora.expressao.value += valor;
     }
     
     