/**
 * Nombre del pais devuelto por la API de Rest Countries.
 */
export interface CountryName {
  /** Nombre comun del pais. */
  common: string;
  /** Nombre oficial del pais. */
  official: string;
}

/**
 * Informacion de banderas de un pais.
 */
export interface CountryFlags {
  /** URL de la bandera en formato PNG. */
  png: string;
  /** URL de la bandera en formato SVG. */
  svg: string;
  /** Texto alternativo de la bandera (si existe). */
  alt?: string;
}

/**
 * Modelo principal de pais usado por el modulo `countries`.
 */
export interface Country {
  /** Informacion de nombres del pais. */
  name: CountryName;
  /** Capitales del pais reportadas por la API. */
  capital?: string[];
  /** Region geografica del pais. */
  region: string;
  /** Poblacion total del pais. */
  population: number;
  /** Recursos de imagen de bandera del pais. */
  flags: CountryFlags;
  /** Codigo alpha-2 del pais. */
  cca2: string;
}
