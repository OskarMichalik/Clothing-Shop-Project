# Project
/							- Home
/{id}							- Detale przedmiotu
/selected-category/{slugCategory}			- Jeden z głównych kategorii
/selected-category/{slugCategory}/{slugCategoryDown}	- Jeden z pomniejszych kategorii
/search-input/{daneWyszukiwania}			- Wynik wyszukiwania



BAZA DANYCH
node db/initdb.js	- inicjalizuje baze danych
node db/removedb.js	- usuwa baze danych
node db/removeBuyers.js	- usuwa osoby które coś kupiły
node db/showBuyers.js	- pokazuje osoby które coś kupiły
node db/showItems.js	- pokazuje przemioty

STORE
context do navigacji i wybranyej kategorii

