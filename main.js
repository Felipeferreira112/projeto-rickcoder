var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://rickandmortyapi.com/api/episode');
xhr.send();
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        resultado = JSON.parse(xhr.response);
        console.log(resultado)
        console.log(resultado.results[0].name)

        nomes = document.getElementById('titulo')
        nomes.innerHTML = resultado.results[0].name


        nomes = document.getElementById('titulo1')
        nomes.innerHTML = resultado.results[1].name

        nomes = document.getElementById('titulo2')
        nomes.innerHTML = resultado.results[2].name

        nomes = document.getElementById('titulo3')
        nomes.innerHTML = resultado.results[3].name
        nomes = document.getElementById('titulo4')
        nomes.innerHTML = resultado.results[4].name

        nomes = document.getElementById('titulo5')
        nomes.innerHTML = resultado.results[5].name

        nomes = document.getElementById('titulo6')
        nomes.innerHTML = resultado.results[6].name

        nomes = document.getElementById('titulo7')
        nomes.innerHTML = resultado.results[7].name


        
        lancamento = document.getElementById('lancamentos')
        lancamento.innerHTML = resultado.results[0].air_date
        lancamento = document.getElementById('lancamentos1')
        lancamento.innerHTML = resultado.results[1].air_date
        lancamento = document.getElementById('lancamentos2')
        lancamento.innerHTML = resultado.results[2].air_date
        lancamento = document.getElementById('lancamentos3')
        lancamento.innerHTML = resultado.results[3].air_date
        lancamento = document.getElementById('lancamentos4')
        lancamento.innerHTML = resultado.results[4].air_date
        lancamento = document.getElementById('lancamentos5')
        lancamento.innerHTML = resultado.results[5].air_date
        lancamento = document.getElementById('lancamentos6')
        lancamento.innerHTML = resultado.results[6].air_date
        lancamento = document.getElementById('lancamentos7')
        lancamento.innerHTML = resultado.results[7].air_date




    }else{
        console.log("erro!")
    }
}