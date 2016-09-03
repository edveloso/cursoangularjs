ng-include

Trata o valor de uma expressão como o path de um arquivo HTML.
Ele separa em pedaçoes menores os arquivos extensos.
ng-include sempre espera uma variável, caso queira passar uma literal é necessário passar dentro das aspas simples.

exemplo:

<div ng-include="main.template" > </div>
<div ng-include="'pag.html'" > </div>




