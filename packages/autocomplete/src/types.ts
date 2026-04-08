export interface AutocompleteOption {
  value: string;
  label: string;
}

export type AutocompleteSource =
  | AutocompleteOption[]
  | ((query: string, callback: (results: AutocompleteOption[]) => void) => void);
