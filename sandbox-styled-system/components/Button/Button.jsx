import React from 'react';
import Box from '../Box/Box';
import { useTheme } from 'emotion-theming';
import get from 'lodash.get';

const createStyles = ({ variant, theme, options }) => {
    const { space, fontSizes, colors, radii, fontWeights } = theme;

    const borderRadius = options.rounded
        ? radii.full
        : options.squared
        ? radii.none
        : radii.lg;

    const fontSize = options.size === 'sm'
        ? fontSizes.sm
        : options.size === 'lg'
        ? fontSizes.lg
        : fontSizes.md;

    const fontWeight = options.size === 'sm'
        ? fontWeights.normal
        : options.size === 'lg'
            ? fontWeights.bold
            : fontWeights.semibold;

    const px = options.size === 'sm'
        ? space[6]
        : options.size === 'lg'
        ? space[10]
        : space[8];

    const py = options.size === 'sm'
        ? space[2]
        : options.size === 'lg'
            ? space[6]
            : space[4];

    const baseline = {
        fontSize,
        fontWeight,
        px,
        py,
        borderWidth: 1,
        borderColor: colors.transparent,
        borderRadius,
        bg: colors.transparent,
        outline: 'none',
        transition: 'all 250ms ease 0s',
    };

    const activeBoxShadow = 'rgba(66, 153, 225, 0.6) 0px 0px 0px 3px';

    const createBase = colorVariant => ({
        ...baseline,
        bg: colors[colorVariant][500],
        color: colors.white,
        _hover: {
            background: colors[colorVariant][600]
        },
        _active: {
            background: colors[colorVariant][700],
            boxShadow: activeBoxShadow,
        }
    });

    const createOutlined = colorVariant => ({
        ...baseline,
        color: colors[colorVariant][500],
        borderColor: colors[colorVariant][500],
        _hover: {
            color: colors[colorVariant][600],
            background: colors[colorVariant][50]
        },
        _active: {
            background: colors[colorVariant][100],
            boxShadow: activeBoxShadow,
        }
    });

    const createGhost = colorVariant => ({
        ...baseline,
        color: colors[colorVariant][500],
        _hover: {
            background: colors[colorVariant][50]
        },
        _active: {
            background: colors[colorVariant][100],
            boxShadow: activeBoxShadow,
        }
    });

    const styles = {
        primary: {
            base: createBase('primary'),
            outlined: createOutlined('primary'),
            ghost: createGhost('primary'),
        },
        secondary: {
            base: createBase('secondary'),
            outlined: createOutlined('secondary'),
            ghost: createGhost('secondary'),
        },
    };

    return get(styles, variant) || get(styles, 'primary.base');
};

const Button = ({ children, variant, rounded, squared, size, ...props }) => {
    const theme = useTheme();
    const variantStyles = createStyles({
        variant,
        theme,
        options: { rounded, squared, size },
    });

    return (
        <Box as="button" {...variantStyles} {...props}>
            {children}
        </Box>
    );
};

Button.defaultProps = {
    variant: 'primary.base',
    rounded: false,
    squared: false,
    size: 'md',
};

export default Button;
