// --- 1. Utgå ifrån array nedanför. ---
// Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?

let names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]); 
// skriver ut "Maradona", eftersom arrayens index börjar på 0 skrivs 4e positionen ut

// --- 2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden? ---
names.push("Drogba");
// Svar: den returnerar 7

// --- 3. Lägg nu till namnet "Figo" i börja av arrayen. 
//Vilken metod använder du för att göra det och vad är returnvärdet av den metoden?
names.unshift("Figo");
// Svar: den returnerar 8

// --- 4. Ta nu bort det sista namnet från array med pop(). Logga ut returvärdet av den metoden. ---
let lastName = names.pop();
console.log(lastName);

// --- 5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen
// till början av arrayen? Visa i kod samt förklara varför du gör som du gör. ---
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

// --- 6. Vid det här laget hoppas jag att du märkt att de metoderna som du har använt påverkar ursprungs-arrayn,
//alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar
//arrayen med en const-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?

