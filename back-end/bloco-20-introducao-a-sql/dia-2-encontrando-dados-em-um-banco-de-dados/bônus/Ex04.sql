-- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.

USE PiecesProviders;
SELECT * from Provides
WHERE provider = "HAL"
order by price desc;