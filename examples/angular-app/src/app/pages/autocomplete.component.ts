import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements AfterViewInit {
  // Riferimenti al DOM
  @ViewChild('autoBase') autoBase!: ElementRef;

  @ViewChild('autoPlaceholder') autoPlaceholder!: ElementRef;

  @ViewChild('autoRequired') autoRequired!: ElementRef;

  @ViewChild('autoMinlength') autoMinlength!: ElementRef;

  @ViewChild('autoDisabled') autoDisabled!: ElementRef;

  @ViewChild('autoHiddenLabel') autoHiddenLabel!: ElementRef;

  @ViewChild('autoDefaultStr') autoDefaultStr!: ElementRef;

  @ViewChild('autoDefaultObj') autoDefaultObj!: ElementRef;

  @ViewChild('autoAsync') autoAsync!: ElementRef;

  @ViewChild('autoAlimento') autoAlimento!: ElementRef;

  @ViewChild('autoFormRegione') autoFormRegione!: ElementRef;

  @ViewChild('autoFormProvincia') autoFormProvincia!: ElementRef;

  formOutput = '';

  // Dati
  italianRegions = [
    { value: 'abruzzo', label: 'Abruzzo' },
    { value: 'basilicata', label: 'Basilicata' },
    { value: 'calabria', label: 'Calabria' },
    { value: 'campania', label: 'Campania' },
    { value: 'emilia-romagna', label: 'Emilia Romagna' },
    { value: 'friuli-venezia-giulia', label: 'Friuli Venezia Giulia' },
    { value: 'lazio', label: 'Lazio' },
    { value: 'liguria', label: 'Liguria' },
    { value: 'lombardia', label: 'Lombardia' },
    { value: 'marche', label: 'Marche' },
    { value: 'molise', label: 'Molise' },
    { value: 'piemonte', label: 'Piemonte' },
    { value: 'puglia', label: 'Puglia' },
    { value: 'sardegna', label: 'Sardegna' },
    { value: 'sicilia', label: 'Sicilia' },
    { value: 'toscana', label: 'Toscana' },
    { value: 'trentino-alto-adige', label: 'Trentino Alto Adige' },
    { value: 'umbria', label: 'Umbria' },
    { value: 'valle-d-aosta', label: "Valle d'Aosta" },
    { value: 'veneto', label: 'Veneto' },
  ];

  cities = [
    { value: 'milano', label: 'Milano' },
    { value: 'roma', label: 'Roma' },
    { value: 'napoli', label: 'Napoli' },
    { value: 'torino', label: 'Torino' },
    { value: 'palermo', label: 'Palermo' },
    { value: 'genova', label: 'Genova' },
    { value: 'bologna', label: 'Bologna' },
    { value: 'firenze', label: 'Firenze' },
    { value: 'bari', label: 'Bari' },
    { value: 'catania', label: 'Catania' },
    { value: 'venezia', label: 'Venezia' },
    { value: 'verona', label: 'Verona' },
    { value: 'messina', label: 'Messina' },
    { value: 'padova', label: 'Padova' },
    { value: 'trieste', label: 'Trieste' },
    { value: 'brescia', label: 'Brescia' },
    { value: 'parma', label: 'Parma' },
    { value: 'taranto', label: 'Taranto' },
    { value: 'prato', label: 'Prato' },
    { value: 'modena', label: 'Modena' },
    { value: 'reggio-calabria', label: 'Reggio Calabria' },
    { value: 'reggio-emilia', label: 'Reggio Emilia' },
    { value: 'perugia', label: 'Perugia' },
    { value: 'ravenna', label: 'Ravenna' },
    { value: 'livorno', label: 'Livorno' },
    { value: 'cagliari', label: 'Cagliari' },
    { value: 'foggia', label: 'Foggia' },
  ];

  provinces = [
    { value: 'milano', label: 'Milano' },
    { value: 'roma', label: 'Roma' },
    { value: 'napoli', label: 'Napoli' },
    { value: 'torino', label: 'Torino' },
    { value: 'palermo', label: 'Palermo' },
    { value: 'genova', label: 'Genova' },
    { value: 'bologna', label: 'Bologna' },
    { value: 'firenze', label: 'Firenze' },
    { value: 'bari', label: 'Bari' },
    { value: 'catania', label: 'Catania' },
  ];

  categories: {
    [key: string]: Array<{ value: string; label: string }>;
  } = {
    frutta: [
      { value: 'mela', label: 'Mela' },
      { value: 'pera', label: 'Pera' },
      { value: 'banana', label: 'Banana' },
      { value: 'arancia', label: 'Arancia' },
      { value: 'fragola', label: 'Fragola' },
      { value: 'kiwi', label: 'Kiwi' },
      { value: 'ananas', label: 'Ananas' },
      { value: 'mango', label: 'Mango' },
      { value: 'pesca', label: 'Pesca' },
      { value: 'albicocca', label: 'Albicocca' },
      { value: 'ciliegia', label: 'Ciliegia' },
      { value: 'uva', label: 'Uva' },
      { value: 'melone', label: 'Melone' },
      { value: 'anguria', label: 'Anguria' },
      { value: 'pompelmo', label: 'Pompelmo' },
      { value: 'mandarino', label: 'Mandarino' },
      { value: 'limone', label: 'Limone' },
      { value: 'prugna', label: 'Prugna' },
      { value: 'fico', label: 'Fico' },
      { value: 'melograno', label: 'Melograno' },
    ],
    verdura: [
      { value: 'carota', label: 'Carota' },
      { value: 'pomodoro', label: 'Pomodoro' },
      { value: 'lattuga', label: 'Lattuga' },
      { value: 'zucchina', label: 'Zucchina' },
      { value: 'melanzana', label: 'Melanzana' },
      { value: 'peperone', label: 'Peperone' },
      { value: 'cipolla', label: 'Cipolla' },
      { value: 'aglio', label: 'Aglio' },
      { value: 'patata', label: 'Patata' },
      { value: 'spinaci', label: 'Spinaci' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'cavolfiore', label: 'Cavolfiore' },
      { value: 'cavolo', label: 'Cavolo' },
      { value: 'sedano', label: 'Sedano' },
      { value: 'finocchio', label: 'Finocchio' },
      { value: 'cetriolo', label: 'Cetriolo' },
      { value: 'ravanello', label: 'Ravanello' },
      { value: 'rucola', label: 'Rucola' },
      { value: 'valeriana', label: 'Valeriana' },
      { value: 'barbabietola', label: 'Barbabietola' },
    ],
    cereali: [
      { value: 'riso', label: 'Riso' },
      { value: 'pasta', label: 'Pasta' },
      { value: 'pane', label: 'Pane' },
      { value: 'farro', label: 'Farro' },
      { value: 'orzo', label: 'Orzo' },
      { value: 'quinoa', label: 'Quinoa' },
      { value: 'avena', label: 'Avena' },
      { value: 'miglio', label: 'Miglio' },
      { value: 'grano-saraceno', label: 'Grano saraceno' },
      { value: 'segale', label: 'Segale' },
      { value: 'couscous', label: 'Couscous' },
      { value: 'bulgur', label: 'Bulgur' },
      { value: 'amaranto', label: 'Amaranto' },
      { value: 'mais', label: 'Mais' },
      { value: 'kamut', label: 'Kamut' },
    ],
    legumi: [
      { value: 'fagioli', label: 'Fagioli' },
      { value: 'lenticchie', label: 'Lenticchie' },
      { value: 'ceci', label: 'Ceci' },
      { value: 'piselli', label: 'Piselli' },
      { value: 'fave', label: 'Fave' },
      { value: 'soia', label: 'Soia' },
      { value: 'lupini', label: 'Lupini' },
      { value: 'fagioli-borlotti', label: 'Fagioli borlotti' },
      { value: 'fagioli-cannellini', label: 'Fagioli cannellini' },
      { value: 'fagioli-neri', label: 'Fagioli neri' },
      { value: 'cicerchie', label: 'Cicerchie' },
      { value: 'fagiolini', label: 'Fagiolini' },
    ],
    latticini: [
      { value: 'latte', label: 'Latte' },
      { value: 'yogurt', label: 'Yogurt' },
      { value: 'mozzarella', label: 'Mozzarella' },
      { value: 'parmigiano', label: 'Parmigiano' },
      { value: 'pecorino', label: 'Pecorino' },
      { value: 'gorgonzola', label: 'Gorgonzola' },
      { value: 'ricotta', label: 'Ricotta' },
      { value: 'burro', label: 'Burro' },
      { value: 'formaggio-spalmabile', label: 'Formaggio spalmabile' },
      { value: 'mascarpone', label: 'Mascarpone' },
      { value: 'fontina', label: 'Fontina' },
      { value: 'taleggio', label: 'Taleggio' },
      { value: 'grana-padano', label: 'Grana Padano' },
      { value: 'caciocavallo', label: 'Caciocavallo' },
    ],
  };

  selectedCategory = 'frutta';

  ngAfterViewInit() {
    // Usiamo setTimeout per assicurarci che il custom element sia "upgradato"
    // e pronto a ricevere proprietà complesse.
    setTimeout(() => {
      this.initComponents();
    }, 0);
  }

  initComponents() {
    // 1. Base
    if (this.autoBase) {
      this.autoBase.nativeElement.source = this.italianRegions;
    }

    // 2. Placeholder
    if (this.autoPlaceholder) {
      this.autoPlaceholder.nativeElement.source = this.italianRegions;
    }

    // 3. Required
    if (this.autoRequired) {
      this.autoRequired.nativeElement.source = this.italianRegions;
    }

    // 4. MinLength
    if (this.autoMinlength) {
      this.autoMinlength.nativeElement.source = this.italianRegions;
    }

    // 5. Disabled
    if (this.autoDisabled) {
      this.autoDisabled.nativeElement.source = this.italianRegions;
      this.autoDisabled.nativeElement.value = 'lombardia';
    }

    // 6. Hidden Label
    if (this.autoHiddenLabel) {
      this.autoHiddenLabel.nativeElement.source = this.italianRegions;
    }

    // 7. Default Stringa
    if (this.autoDefaultStr) {
      this.autoDefaultStr.nativeElement.source = this.italianRegions;
      this.autoDefaultStr.nativeElement.value = 'lombardia';
    }

    // 8. Default Oggetto
    if (this.autoDefaultObj) {
      this.autoDefaultObj.nativeElement.source = this.italianRegions;
      // defaultValue è impostato come attributo nel template HTML
    }

    // 9. Async Search
    if (this.autoAsync) {
      this.autoAsync.nativeElement.source = (query: string, populateResults: any) => {
        setTimeout(() => {
          const lower = query.toLowerCase();
          const results = this.cities
            .filter((c) => c.label.toLowerCase().includes(lower))
            .slice(0, 10);
          populateResults(results);
        }, 800);
      };
    }

    // 10. Alimento (dynamic categories)
    if (this.autoAlimento) {
      this.autoAlimento.nativeElement.source = this.categories[this.selectedCategory];
    }

    // 11. Form Regione
    if (this.autoFormRegione) {
      this.autoFormRegione.nativeElement.source = this.italianRegions;
    }

    // 12. Form Provincia
    if (this.autoFormProvincia) {
      this.autoFormProvincia.nativeElement.source = this.provinces;
    }
  }

  handleRequiredSubmit(event: Event) {
    event.preventDefault();
    // alert('Form valido!');
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data: any = {};
    formData.forEach((v, k) => (data[k] = v));
    this.formOutput = JSON.stringify(data, null, 2);
  }

  handleCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedCategory = select.value;
    if (this.autoAlimento) {
      this.autoAlimento.nativeElement.source = this.categories[this.selectedCategory];
      this.autoAlimento.nativeElement.value = '';
    }
  }
}
