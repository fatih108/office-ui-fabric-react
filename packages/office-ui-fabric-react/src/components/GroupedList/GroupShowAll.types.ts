import { ITheme, IStyle } from '../../Styling';
import { IGroupDividerProps } from './GroupedList.types';
import { IStyleFunctionOrObject } from '../../Utilities';

export interface IGroupShowAllProps extends IGroupDividerProps {
  /**
   * Theme provided by Higher Order Component
   */
  theme?: ITheme;

  /**
   * Style function to be passed in to override the themed or default styles
   */
  styles?: IStyleFunctionOrObject<IGroupShowAllStyleProps, IGroupShowAllStyles>;

  /**
   * The Show All link text.
   * @default 'Show All'
   */
  showAllLinkText?: string;
}

export type IGroupShowAllStyleProps = Required<Pick<IGroupShowAllProps, 'theme'>>;

export interface IGroupShowAllStyles {
  root: IStyle;
}
