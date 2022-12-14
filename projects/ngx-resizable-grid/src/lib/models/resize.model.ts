export type ResizeXDir = 'left' | 'right' | 'none';
export type ResizeYDir = 'top' | 'bottom' | 'none';

export interface IResizeLayoutConfig {
  rows: IResizeRowConfig[];
  /**number of pixels of spacing between columns */
  spacing?: number;
}

export interface IResizeRowConfig {
  cols: IResizeColConfig[];
  height?: number;
  minHeight?: number;
}

export interface IResizeColConfig {
  /**the percentage of width allocated to this column */
  flex: number;
  rows?: IResizeRowConfig[];
  key?: string;
  /**the minimum width allowed this column to be resized to in pixels */
  minWidth?: number;
}

export class ColResizeEvent {
  index!: number;
  last!: boolean;
  newWidth!: number;
}
