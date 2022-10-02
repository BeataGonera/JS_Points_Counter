# Projekt DOM API

Dzisiaj będziemy robić kilka zadań na przećwiczenie manipulacji DOMem. Zadania robimy indywidualnie bądź grupowo (jak wolicie). Style css się nie liczą (nie musi to ładnie wyglądać) byle było czytelne.

## Zadania
1. Stworzyć 2 liczniki wyświetlające wynik meczu koszykówki dla każdej z drużyn (zaczynając od wyniku `0 : 0`). Nazwijmy te drużyny `lewa` i `prawa`. Dla każdej z nich dodać po 2 przyciski: `rzut za 2` i `rzut za 3`, które odpowiednio będą zwiększać wynik danej drużyny o ilość punktów odpowiadającego rzutu.
2. Dodać do powyższej strony pod spodem sekcję przyciskiem `Wyświetl wynik`, który na naciśnięcie wyświetli gdzieś obok aktualny wynik z powyższego zadania. Na ponowne kliknięcie wynik ma się podmienić na nowy aktualnie wyświetlany.
3. Dodać do powyższej strony pod spodem sekcję z wyświetlaniem dodawanych komentarzy. Ma się pojawić input z możliwością wpisania tam komentarza, przycisk obok, który zapisze dany komentarz i wyświetli go pod inputem. Każdy następny dodany komentarz ma się wyświetlać na górze listy dodanych komentarzy.
4. Dodać do powyższej strony pod spodem pustą tablicę z 2 kolumnami (id i name) oraz przycisk `Dodaj` obok. Na naciśnięcie przycisku do tablicy ma być dodany element z id zwiększanym o 1 przy każdym nowym elemencie zaczynając od 1 przy pierwszym dodanym elemencie oraz nazwie która będzie wylosowana przy pomocy Math.random() pomiędzy 3 wartościami `['Easy', 'Medium', 'Hard']`. Tutaj przyda się metoda `insertRow()` na tablicy (szczególy tutaj: https://www.w3schools.com/jsref/met_table_insertrow.asp)