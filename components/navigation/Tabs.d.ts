/** Segmented pill tabs (hive cells); controlled via value/onChange. Roving tabindex; Arrow/Home/End keys move focus and selection. */
export interface TabsProps {
  items: {
    id: string;
    label: string;
    /** Optional DOM id for the tab button (pair with a tabpanel's aria-labelledby) */
    tabId?: string;
    /** Optional id of the tabpanel this tab controls (aria-controls) */
    panelId?: string;
  }[];
  /** id of the active tab */
  value: string;
  onChange?: (id: string) => void;
  size?: 'sm' | 'md' | 'lg';
  /** Accessible name for the tablist */
  'aria-label'?: string;
  style?: React.CSSProperties;
}
