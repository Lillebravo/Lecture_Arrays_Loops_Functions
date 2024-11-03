// 1. Utgå ifrån array nedanför.
// Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?

let names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]);
// skriver ut "Maradona", eftersom arrayens index börjar på 0 skrivs 4e positionen ut

// 2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden? ---
names.push("Drogba");
// Svar: den returnerar 7

// 3. Lägg nu till namnet "Figo" i börja av arrayen.
//Vilken metod använder du för att göra det och vad är returnvärdet av den metoden?
names.unshift("Figo");
// Svar: den returnerar 8

// 4. Ta nu bort det sista namnet från array med pop(). Logga ut returvärdet av den metoden. ---
let lastName = names.pop();
console.log(lastName);

// 5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen
// till början av arrayen? Visa i kod samt förklara varför du gör som du gör.
names = ["Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
names.splice(0, 0, "Ronaldo"); // Skapar en kopia av ronaldo och sätter det på position 0
names.pop(); // Tar bort Ronaldo som låg i slutet av arrayen

console.log(names);

// 6. Vid det här laget hoppas jag att du märkt att de metoderna som du har använt påverkar ursprungs-arrayn,
//alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar
//arrayen med en const-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?

// Svar: eftersom en array är en reference kan vi ändra på det som finns intuti arrayen. Om en array liknas med en låda,
// kan vi inte ändra på själva lådan, men vi kan ändra på vad som finns i den.

// 7. Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet,
// och vad innebär det?
const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];
const messiExists = players.includes("Messi");
console.log(messiExists);
// Svar: returnerar falskt, eftersom includes() returnerar en boolean som är sann eller falsk

// 8. Kontrollera om "Zlatan" finns i "players"-arrayen med includes(). Om han finns, logga ut en bekräftande text, t.ex.
//"Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."
const zlatanExists = players.includes("Zlatan");
if (zlatanExists) {
  console.log("Zlatan är med i listan!");
} else {
  console.log("Zlatan är inte med i listan.");
}

// 9. Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?
const posOfMaradona = players.indexOf("Maradona");
console.log(posOfMaradona);
// Svar: den skriver ut 5, eftersom arrayen börjar räkna från 0 ligger maradona på plats 5(6).

// 10. Använd indexOf() för att försöka hitta indexet för "Messi" i "players". Vad returnerar indexOf() när elementet
//inte finns i arrayen, och hur kan den informationen vara användbar?
const posOfMessi = players.indexOf("Messi");
console.log(posOfMessi);
// Svar: den kommer returnera -1 eftersom Messi inte finns med i arrayen. Vi kan använda den informationen för att lägga till Messi
// t.ex. if posOfMessi = -1 => players.push("Messi");

// 11. Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ).
// Använd join() för att göra detta och logga resultatet.
const stringOfPlayers = players.join(", ");
console.log(stringOfPlayers);

// 12. Använd join() för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?
const stringWithMinusPlayers = players.join(" - ");
console.log(stringWithMinusPlayers);

// 13. Använd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice()
// fungerar i detta fall.
players.splice(1, 2);
console.log(players);

// 14. Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och
// vad returnerar splice()?
const spliceReturn = players.splice(2, 0, "Ronaldinho");
console.log(players);
console.log(spliceReturn);
// Svar: Den kommer lägga in Ronaldinho mellan Ronaldo och Romario, splice returnerar en tom array eftersom vi inte tog bort några
//element

// 15. Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.
const indexOfRonaldo = players.indexOf("Ronaldo");
players.splice(indexOfRonaldo, 1);
console.log(players);

// 16. Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna. Logga ut den nya arrayen
// och förklara varför slice() inte påverkar den ursprungliga arrayen.
const newListOfPlayers = players.slice(0, 3);
console.log(newListOfPlayers);
// Svar: Slice returnerar en kopia av den delen av arrayen som du är intresserad av, den påverkar alltså inte ursprungs-arrayen
// utan endast kopierar den del av innehåller man är intresserad av

// 17. Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "players". Vad innehåller den nya
// arrayen, och vad blir kvar i "players"?
const newerListOfPlayers = players.slice(2, players.length - 1);
console.log(newerListOfPlayers);
// Svar: Den nya arrayen innehåller Romario, det som blir kvar i players är: Zlatan, Ronaldinho, Romario eftersom den är oförändrad

// 18. Använd metoden with() för att ersätta spelaren på indexposition 1 i "players" med "Mbappé". Vad returnerar with()-metoden och
// påverkas den ursprungliga arrayen?
const updatedPlayers = players.with(1, "Mbappé");
console.log(updatedPlayers);
console.log(players);
// Svar: with()-metoden returnerar en kopia av ursprungliga arrayen fast med en ändring på index 1 till Mbappé istället för Ronaldinho.
// Den ursprungliga arrayen påverkas ej.

// 19. Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.
const numbers = [5, 8, 12, 20, 3];
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

//20. Använd en for-loop för att summera alla tal i arrayen numbers ovan. Logga ut summan efter att loopen har körts klart.
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
console.log("= " + sum);

// 21. Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.
let biggestNr = 0;
for (let index = 0; index < numbers.length; index++) {
  if (biggestNr < numbers[index]) {
    biggestNr = numbers[index];
  }
}
console.log("Biggest number = " + biggestNr);

// 22. Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers
// multiplicerat med 2.
let doubledNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  doubledNumbers[index] = numbers[index] * 2;
}
console.log("doubled numbers are: " + doubledNumbers);

// 23. Använd en for-loop för att räkna ut medelvärdet av talen i numbers. Logga ut medelvärdet.
let avgValue = 0;
for (let index = 0; index < numbers.length; index++) {
  avgValue += numbers[index];
}
avgValue /= numbers.length;
console.log("Average value = " + avgValue);

// 24. Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.
let lowestValue = 0;
for (let index = 0; index < numbers.length; index++) {
  if (index == 0 && numbers[index] > lowestValue) {
    lowestValue = numbers[index];
  } else if (lowestValue > numbers[index]) {
    lowestValue = numbers[index];
  }
}
console.log("Lowest value = " + lowestValue);

// 25. Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva talen från arrayen nedan.
// Använd en for-loop och en if-sats.
const mixedNumbers = [3, -5, 12, -1, 8, -6];
let positiveNumbers = [];
for (let index = 0; index < mixedNumbers.length; index++) {
  if (mixedNumbers[index] >= 0) {
    positiveNumbers.push(mixedNumbers[index]);
  }
}
console.log("Mixed numbers: " + mixedNumbers);
console.log("Positive numbers: " + positiveNumbers);

// 26. Utgå från arrayen mixedNumbers nedan. Skriv en for-loop utan att använda index, där du loggar varje positivt tal.
for (const number of mixedNumbers) {
  if (number > 0) {
    console.log("Positive number: " + number);
  }
}

// 27. Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.
function showPositiveNumbers() {
  let loopCounter = 0;
  console.log("27. Numbers: " + numbers);
  while (loopCounter < numbers.length) {
    if (numbers[loopCounter] > 10) {
      break;
    }
    console.log("Numbers[" + loopCounter + "]: " + numbers[loopCounter]);
    loopCounter++;
  }
}
showPositiveNumbers();

// 28. Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen.
// Logga antalet.
function countNegativeNumbers() {
  console.log("Mixed numbers: " + mixedNumbers);
  let loopCounter = 0;
  let nrOfNegativeNumbers = 0;
  while (true) {
    if (mixedNumbers[loopCounter] < 0) {
      nrOfNegativeNumbers++;
      loopCounter++;
    } else if (loopCounter == mixedNumbers.length) {
      break;
    } else {
      loopCounter++;
    }
  }
  console.log(
    "The amount of negative numbers in mixedNumbers = " + nrOfNegativeNumbers
  );
}
countNegativeNumbers();

// 29. Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess
// längd (antal bokstäver).
const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
for (let index = 0; index < words.length; index++) {
  console.log(
    "Word[" +
      index +
      "]" +
      words[index] +
      " is: " +
      words[index].length +
      " characters long."
  );
}

// 30. Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord.
// Logga ut den nya strängen.
let newString = "";
for (let index = 0; index < words.length; index++) {
  newString += words[index].charAt(0);
}
console.log(newString);

// 31. Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.
function logNrsInNumbersUntilSum(maxSum = 0) {
  let sum = 0;
  let loopCounter = 0;
  console.log("Numbers: " + numbers);

  while (true) {
    console.log("Numbers[" + loopCounter + "] = " + numbers[loopCounter]);
    sum += numbers[loopCounter];
    loopCounter++;

    if (sum > maxSum) {
      break;
    }
  }
}
logNrsInNumbersUntilSum(25);

// 32. Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.
function sumAllNrsInMixedNumbers() {
  console.log("Mixed numbers: " + mixedNumbers);
  let sumOfNrs = 0;

  for (const number of mixedNumbers) {
    sumOfNrs += number;
  }
  console.log("The sum of mixedNumbers = " + sumOfNrs);
}
sumAllNrsInMixedNumbers();

// 33. Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta
// temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.
const temperatures = [15, 22, 19, 30, 28, 18, 25];
let highestTemp = 0;
let indexOfHiTmp = 0;
console.log("The temperatures are: " + temperatures);
for (let index = 0; index < temperatures.length; index++) {
  if (highestTemp < temperatures[index]) {
    highestTemp = temperatures[index];
    indexOfHiTmp = index;
  }
}
console.log(
  "The highest temperature is: " +
    highestTemp +
    " at temperatures[" +
    indexOfHiTmp +
    "]"
);

// 34. Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än fem bokstäver.
console.log("Words contains: " + words);
let nrOfWordsWithMoreThan5Chars = 0;
for (let index = 0; index < words.length; index++) {
  if (words[index].length > 5) {
    nrOfWordsWithMoreThan5Chars++;
  }
}
console.log(
  "The amount of words with more than 5 characters: " +
    nrOfWordsWithMoreThan5Chars
);

// 35. Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.
function findOddNumber() {
  console.log("Numbers contains: " + numbers);
  let loopCounter = 0;

  while (loopCounter < numbers.length) {
    if (numbers[loopCounter] % 2 !== 0) {
      console.log(
        "The first odd number was at numbers[" +
          loopCounter +
          "] = " +
          numbers[loopCounter]
      );
      break;
    }
    loopCounter++; // Increment the counter only if the number is not odd
  }
}
findOddNumber();
