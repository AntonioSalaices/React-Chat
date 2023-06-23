export interface CardProps {
  /**
   * Unique identifier for every card
   */
  key?: number | string;
  /**
   *  URL to display image
   */
  url?: string;
  /**
   *  Description to use it in alt attribute
   */
  description?: string;
}
