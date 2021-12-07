# Bring me cookies!!!

<!-- markdown-link-check-disable-next-line -->
Spróbujmy zrekonstruować znaną grę z gatunku `idle games` - [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/)

Zmodyfikujemy trochę jej zasady, ponieważ wersja oryginalna nie ma końca - jest to klasyczny pożeracz czasu wymagający tylko regularnego klikania w ciasteczko.

## Fabuła

Odziedziczyliśmy starą ciastkarnię. Mamy do dyspozycji:

- starego ciastomistrza (taki ziomek co umie robić ciasto)
- stary piec,
- 100kg mąki,
- 50 paczek na ciastka,
- magiczną recepturę na ciastka, dzięki której możemy z 10kg mąki (bez jakichkolwiek innych składników) wyprodukować 20 ciastek / jedną kulę ciasta.

## Cel gry

Celem gry jest wyprodukowanie i sprzedaż jak największej liczby ciastek przed bankructwem.

## Proces

Proces produkcji ciastek będzie złożony.
Żeby wyprodukować ciastko musimy:

- przygotować kulę ciasta
- ulepić ciastka z tego ciasta
- włożyć je do pieca

Ciastka sprzedajemy w paczkach po 20 sztuk.

## Implementacja

### Zadanie 1

Potrzebujemy kontrolkę do lepienia ciasta i licznik ulepionych ciastowych kul.

a) Przygotuj przycisk z etykietą "Ulep ciasto".

b) Niech nad przyciskiem wyświetla się poziomy "pasek postępu" pokazujący na jakim etapie lepienia ciasta
jesteśmy. Niech pasek ma wymiary 100px szerokości i 10px wysokości i szare tło.

c) Niech w momencie kliknięcia w przycisk pasek stopniowo zacznie zapełniać sie na zielono od lewej strony. Pełne zazielenienei paska powinno nastąpić po 4 sekundach. Etykieta na przycisku powinna zmieniać się na "zatrzymaj lepienie".

d) Niech nad kontrolką do lepienia ciasta wyświetla się napis: "Liczba ulepionych ciastowych kul: 0". Po zapełnieniu się paska postępu liczba powinna zwiększyć się o 1, a pasek postępu powinien wrócić na "pozycję 0".

e) Spraw, żeby ponowne kliknięcie w przycisk zatrzymywało pasek postępu. Niech kolejne zaś wznawia jego animację i tak na przemian. (Efekt play/pause)

### Zadanie 2

Ciasto możemy lepić tylko, jeżeli mamy składniki.

a) Niech nad napisem "Liczba ulepionych ciastowych kul" wyświetlał się napis "Ilość mąki: 100kg".

b) Niech rozpoczęcie lepienia kolejnej kuli z ciasta będzie możliwe tylko jeżeli mamy co najmniej 10kg mąki.

c) Niech ilość mąki zmniejsza się o 10kg w momencie, gdy zaczynamy produkować kolejną kulę.

d) Jeżeli wydamy polecenie lepienia ciasta, ale skończą nam się składniki, to niech obok przycisku pojawia się czerwony napis "Za mało mąki".

### Zadanie 3

Z ciasta trzeba ulepić ciastka.

a) Niech pod przyciskiem "Ulep ciasto" wyświetla się tyle okrągłych, żółtych kul o średnicy 50px ile wynosi liczba ulepionych ciastowych kul.

b) Niech pod kulami pojawia się napis "Liczba ulepionych ciastek: 0"

c) Niech kliknięcie w kulę zmniejsza ją o 5px i zwiększa liczbę ulepionych ciastek o 1

d) Gdy kula zniknie (jej rozmiar wynosi 0px) niech zaktualizuje to liczbę ulepionych ciastowych kul (-1)

### Zadanie 4

Ciastka trzeba włożyć do pieca. Piec mieści max 9 ciastek.

a) Niech pod napisem "Liczba ulepionych ciastek" pojawia się przycisk "Włoż jedno ciastko do pieca"

b) Niech poniżej pojawia się napis "Liczba ciastek w piecu: 0/9"

c) Niech kliknięcie w przycisk zwiększa licznik ciastek w piecu i zmniejsza licznik ulepionych ciastek.

d) Niech przy próbie wrzucenia ciastka do pełnego pieca pojawia się alert "Piec jest pełen".

e) Jeżeli nie mamy tyle ciastek, żeby piec się zapełnił wyświelmy alert z tekstem "Robiliśmy co w naszej mocy, ale mamy za mało ciastek"

### Zadanie 5

Lubimy patrzeć jak ciastka się pieką. Piec chodzi bez przerwy.

a) Niech stan pieca będzie zobrazowany gridem o wymiarach 3x3

b) Niech w momencie włożenia ciastka do pieca pierwsze wolne miejsce na gridzie zostanie zapełnione żółtym kołem.

c) Niech każde ciastko zmienia swój kolor w zależności od czasu, który siedzi w piecu. 

 - 0-3 sekundy (żółty)
 - 3-6 sekundy (pomarańczowy)
 - 6-9 sekundy (brązowy)
 - 9-12 sekund (czarny)

d) Jeżeli ciastko siedzi w piecu więcej niż 12 sekund niech wyparuje

### Zadanie 6

Gotowe! Sprzedajemy

a) Niech pod piecem wyświetla się napis "Liczba gotowych ciastek: 0"

b) Niech kliknięcie w ciastko w piecu zwiększa licznik gotowych ciastek, ale:

  - jeżeli ciastko jest czarne, żółte lub pomarańczowe, to kliknięcie w nie po prostu usuwa je z pieca
  - tolerujemy tylko brązowe ciastka

c) Niech pod "Liczba gotowych ciastek" wyświetla się napis "Zarobiliśmy: 0 PLN"

d) Niech co losowy odstęp czasu (3-6 sekund) liczba gotowych ciastek zmniejsza się o losową liczbę (1-10) 

- za każde ciastko zarobimy 5 PLN
- jeżeli sprzedajemy > 5 ciastek na raz, to za każde zarabiamy 4 PLN (promocja)

e) Nie zapomnijmy zaktualizować licznika PLNów ;)

### Zadanie 7

Mąka by się przydała

a) Dodaj przycisk "Zakup mąkę"

b) Niech kliknięcie zmniejsza licznik PLN o 50 i zwiększa licznik mąki o 100

Smacznego :D
