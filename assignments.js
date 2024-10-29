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
names = [
    "Figo",
    "Zlatan",
    "Beckham",
    "Zidane",
    "Maradona",
    "Pele",
    "Ronaldo",
  ];
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
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
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
const newerListOfPlayers = players.slice(2, players.length-1);
console.log(newerListOfPlayers);
// Svar: Den nya arrayen innehåller Romario, det som blir kvar i players är: Zlatan, Ronaldinho, Romario eftersom den är oförändrad

// 18. 