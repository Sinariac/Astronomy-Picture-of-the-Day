## Astronomy Picture of the Day 🌌

Projeto desenvolvido baseado no site APOD: Astronomy Picture of the Day, fornecido pela NASA e Michigan Technological University (MTU), onde o usuário pode visualizar uma fotografia astronômica do dia e também buscar imagens astronômicas para datas específicas.

Além de HTML 5 e CSS para estilização, utilizei JavaScript e a lib jQuery para fazer chamadas assíncronas da API da NASA.
O método ajax() é chamado a primeira vez quando a página é carregada, solicitando a imagem astronômica do dia, usando a URL da API. Os dados de resposta preenchem o título, a imagem do dia e a descrição.

Criei uma variável chamada "data" dentro da função "buscaAPI()", com um manipulador de evento de click atribuido ao HTML que possibilita que o usuário busque por uma data específica, e em seguida, fiz uma segunda chamada no método ajax() para a mesma API, que recebe o parâmetro "date" na URL, com a data que o usuário preencheu.
As respostas das duas chamadas ajax() são manipuladas pela função "success()".

No fim, este código permite que o usuário visualize a "Astronomy Picture of the Day", e também busque imagens astronômicas pela data que desejar, tudo isso utilizando a API da NASA e a lib jQuery para fazer as chamadas assíncronas.




##


Developed by Sinária Carvalho 💛
