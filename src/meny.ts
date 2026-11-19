// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from './pris'
import type { Ratt, OrderRad } from './typer'
// Gissning = vegetariskaRatter ska plocka ut det vegitariska alternativen, och behålla orginalen. så filter blir det!
// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
    // TODO
    return meny.filter((rattNamn) => rattNamn.vegetarisk)
}

// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
    // TODO
    return meny.map((rattNamn) => rattNamn.namn)
}

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
    // TODO
    return meny.map(
        (rattNamn) => `${rattNamn.namn} – ${formateraPris(rattNamn.pris)}`
    )
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
    // TODO
    return meny.find((rattNamn) => rattNamn.id === id)
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
    // TODO
    let bast: Ratt | undefined = undefined
    for (const r of meny) {
        if (bast === undefined || r.pris < bast.pris) {
            bast = r
        }
    }
    return bast
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
    // TODO
    return [...meny].sort((a, b) => a.pris - b.pris)
}

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
    // TODO
    return order.reduce((summa, rad) => {
        const ratt = hittaRatt(meny, rad.id)
        if (ratt === undefined) {
            return summa
        }
        return summa + ratt.pris * rad.antal
    }, 0)
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
    // TODO
    return meny.reduce<Record<string, number>>((antal, r) => {
        if (antal[r.kategori] === undefined) {
            antal[r.kategori] = 1
        } else {
            antal[r.kategori] += 1
        }
        return antal
    }, {})
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
    // TODO
}
