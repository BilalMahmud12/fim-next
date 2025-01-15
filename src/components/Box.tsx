"use client";

import {
  flex,
  color,
  space,
  border,
  layout,
  flexbox,
  compose,
  position,
  FlexProps,
  typography,
  ColorProps,
  SpaceProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  TypographyProps
} from "styled-system";
import styled from "styled-components";
import { isValidProp } from "@utils/utils";

interface BoxProps
  extends LayoutProps,
  ColorProps,
  PositionProps,
  SpaceProps,
  FlexProps,
  BorderProps,
  FlexboxProps,
  TypographyProps {
  cursor?: string;
  transition?: string;
  className?: string
}

const Box = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<BoxProps>(
  ({ cursor = "unset", transition, className, theme }) => ({
    cursor,
    transition,
    className,
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography)
);

export default Box;
