// Estructura unificada: Datos colectivos anteriores + Nuevos premios individuales solicitados
const mundialData = [
    { year: "2022", host: "Qatar", campeon: "Argentina", resultado: "3 (4) - 3 (2)", subcampeon: "Francia", mvp: "Lionel Messi (ARG)", bota: "Kylian Mbappé (FRA)", goles: 8, guante: "Emiliano Martínez (ARG)", joven: "Enzo Fernández (ARG)", fairplay: "Inglaterra" },
    { year: "2018", host: "Rusia", campeon: "Francia", resultado: "4 - 2", subcampeon: "Croacia", mvp: "Luka Modrić (CRO)", bota: "Harry Kane (ENG)", goles: 6, guante: "Thibaut Courtois (BEL)", joven: "Kylian Mbappé (FRA)", fairplay: "España" },
    { year: "2014", host: "Brasil", campeon: "Alemania", resultado: "1 - 0 (t.s.)", subcampeon: "Argentina", mvp: "Lionel Messi (ARG)", bota: "James Rodríguez (COL)", goles: 6, guante: "Manuel Neuer (GER)", joven: "Paul Pogba (FRA)", fairplay: "Colombia" },
    { year: "2010", host: "Sudáfrica", campeon: "España", resultado: "1 - 0 (t.s.)", subcampeon: "Países Bajos", mvp: "Diego Forlán (URU)", bota: "Thomas Müller (GER)", goles: 5, guante: "Iker Casillas (ESP)", joven: "Thomas Müller (GER)", fairplay: "España" },
    { year: "2006", host: "Alemania", campeon: "Italia", resultado: "1 (5) - 1 (3)", subcampeon: "Francia", mvp: "Zinedine Zidane (FRA)", bota: "Miroslav Klose (GER)", goles: 5, guante: "Gianluigi Buffon (ITA)", joven: "Lukas Podolski (GER)", fairplay: "Brasil / España" },
    { year: "2002", host: "Corea/Japón", campeon: "Brasil", resultado: "2 - 0", subcampeon: "Alemania", mvp: "Oliver Kahn (GER)", bota: "Ronaldo (BRA)", goles: 8, guante: "Oliver Kahn (GER)", joven: "Landon Donovan (USA)", fairplay: "Bélgica" },
    { year: "1998", host: "Francia", campeon: "Francia", resultado: "3 - 0", subcampeon: "Brasil", mvp: "Ronaldo (BRA)", bota: "Davor Šuker (CRO)", goles: 6, guante: "Fabien Barthez (FRA)", joven: "Michael Owen (ENG)", fairplay: "Francia" },
    { year: "1994", host: "EE.UU.", campeon: "Brasil", resultado: "0 (3) - 0 (2)", subcampeon: "Italia", mvp: "Romário (BRA)", bota: "H. Stoichkov (BUL) / O. Salenko (RUS)", goles: 6, guante: "Michel Preud'homme (BEL)", joven: "Marc Overmars (NED)", fairplay: "Brasil" },
    { year: "1990", host: "Italia", campeon: "Alemania Fed.", resultado: "1 - 0", subcampeon: "Argentina", mvp: "Salvatore Schillaci (ITA)", bota: "Salvatore Schillaci (ITA)", goles: 6, guante: "L. G. Conejo (CRC) / S. Goycochea (ARG)", joven: "Robert Prosinečki (YUG)", fairplay: "Inglaterra" },
    { year: "1986", host: "México", campeon: "Argentina", resultado: "3 - 2", subcampeon: "Alemania Fed.", mvp: "Diego Maradona (ARG)", bota: "Gary Lineker (ENG)", goles: 6, guante: "Jean-Marie Pfaff (BEL)*", joven: "Enzo Scifo (BEL)", fairplay: "Brasil" },
    { year: "1982", host: "España", campeon: "Italia", resultado: "3 - 1", subcampeon: "Alemania Fed.", mvp: "Paolo Rossi (ITA)", bota: "Paolo Rossi (ITA)", goles: 6, guante: "Dino Zoff (ITA)*", joven: "Manuel Amoros (FRA)", fairplay: "Brasil" },
    { year: "1978", host: "Argentina", campeon: "Argentina", resultado: "3 - 1 (t.s.)", subcampeon: "Países Bajos", mvp: "Mario Kempes (ARG)*", bota: "Mario Kempes (ARG)", goles: 6, guante: "Ubaldo Fillol (ARG)*", joven: "Antonio Cabrini (ITA)*", fairplay: "Argentina" },
    { year: "1974", host: "Alemania", campeon: "Alemania Fed.", resultado: "2 - 1", subcampeon: "Países Bajos", mvp: "Johan Cruyff (NED)*", bota: "Grzegorz Lato (POL)", goles: 7, guante: "Sepp Maier (GER)*", joven: "Władysław Żmuda (POL)*", fairplay: "Alemania Fed." },
    { year: "1970", host: "México", campeon: "Brasil", resultado: "4 - 1", subcampeon: "Italia", mvp: "Pelé (BRA)*", bota: "Gerd Müller (GER)", goles: 10, guante: "L. Mazurkiewicz (URU)*", joven: "Teófilo Cubillas (PER)*", fairplay: "Perú" },
    { year: "1966", host: "Inglaterra", campeon: "Inglaterra", resultado: "4 - 2 (t.s.)", subcampeon: "Alemania Fed.", mvp: "Bobby Charlton (ENG)*", bota: "Eusébio (POR)", goles: 9, guante: "Gordon Banks (ENG)*", joven: "Franz Beckenbauer (GER)*", fairplay: "-" },
    { year: "1962", host: "Chile", campeon: "Brasil", resultado: "3 - 1", subcampeon: "Checoslovaquia", mvp: "Garrincha (BRA)*", bota: "Garrincha / Vavá / Ivanov / Albert / Jerković / Sánchez", goles: 4, guante: "Viliam Schrojf (TCH)*", joven: "Florian Albert (HUN)*", fairplay: "-" },
    { year: "1958", host: "Suecia", campeon: "Brasil", resultado: "5 - 2", subcampeon: "Suecia", mvp: "Didi (BRA)*", bota: "Just Fontaine (FRA)", goles: 13, guante: "Harry Gregg (NIR)*", joven: "Pelé (BRA)*", fairplay: "-" },
    { year: "1954", host: "Suiza", campeon: "Alemania Fed.", resultado: "3 - 2", subcampeon: "Hungría", mvp: "Ferenc Puskás (HUN)*", bota: "Sándor Kocsis (HUN)", goles: 11, guante: "Gyula Grosics (HUN)*", joven: "Enis Gabor (TUR)*", fairplay: "-" },
    { year: "1950", host: "Brasil", campeon: "Uruguay", resultado: "2 - 1", subcampeon: "Brasil", mvp: "Zizinho (BRA)*", bota: "Ademir (BRA)", goles: 8, guante: "Roque Máspoli (URU)*", joven: "Michael Troche (USA)*", fairplay: "-" },
    { year: "1938", host: "Francia", campeon: "Italia", resultado: "4 - 2", subcampeon: "Hungría", mvp: "Leônidas (BRA)*", bota: "Leônidas (BRA)", goles: 7, guante: "F. Plánička (TCH)*", joven: "Alfredo Foni (ITA)*", fairplay: "-" },
    { year: "1934", host: "Italia", campeon: "Italia", resultado: "2 - 1 (t.s.)", subcampeon: "Checoslovaquia", mvp: "Giuseppe Meazza (ITA)*", bota: "Oldřich Nejedlý (TCH)", goles: 5, guante: "Ricardo Zamora (ESP)*", joven: "Alfréd Schaffer (HUN)*", fairplay: "-" },
    { year: "1930", host: "Uruguay", campeon: "Uruguay", resultado: "4 - 2", subcampeon: "Argentina", mvp: "José Nasazzi (URU)*", bota: "Guillermo Stábile (ARG)", goles: 8, guante: "E. Ballestrero (URU)*", joven: "Alberto Zozaya (ARG)*", fairplay: "-" }
];

const tableBody = document.getElementById('awards-table');
const searchInput = document.getElementById('search');

// Función encargada de renderizar las filas en la tabla
function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="year-cell">${item.year} <span class="badge">${item.host}</span></td>
            <td><strong>${item.campeon}</strong></td>
            <td>${item.resultado}</td>
            <td>${item.subcampeon}</td>
            <td class="section-divider">${item.mvp}</td>
            <td>${item.bota} <span class="badge badge-goals">${item.goles} G</span></td>
            <td>${item.guante}</td>
            <td>${item.joven}</td>
            <td>${item.fairplay}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Escuchador de eventos para filtrar dinámicamente en tiempo real
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = mundialData.filter(item => {
        return item.year.toLowerCase().includes(value) ||
               item.host.toLowerCase().includes(value) ||
               item.campeon.toLowerCase().includes(value) ||
               item.subcampeon.toLowerCase().includes(value) ||
               item.mvp.toLowerCase().includes(value) ||
               item.bota.toLowerCase().includes(value) ||
               item.guante.toLowerCase().includes(value) ||
               item.joven.toLowerCase().includes(value) ||
               item.fairplay.toLowerCase().includes(value);
    });
    renderTable(filteredData);
});

// Carga inicial de la tabla al abrir el sitio
renderTable(mundialData);