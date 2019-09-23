import React from 'react';
import Button from '../components/Button/Button';
import Box from '../components/Box/Box';

const Container = ({ children }) => (
    <Box mb={8}>
        {React.Children.map(children, child =>
            React.cloneElement(child, { mr: 4, ...child.props })
        )}
    </Box>
);

const Heading = ({ children, fontSize = 12 }) => (
    <Box as="h2" fontSize={fontSize} fontWeight='bold' mb={4}>
        {children}
    </Box>
);

const primaryVariants = ['primary.base', 'primary.outlined', 'primary.ghost'];
const secondaryVariants = ['secondary.base', 'secondary.outlined', 'secondary.ghost'];
const variants = [...primaryVariants, ...secondaryVariants];
const sizes = ['sm', 'md', 'lg'];

const Home = () => (
    <Box display="flex" justifyContent="center" mt={8}>
        <Box>
            <Heading fontSize={32}>Corners</Heading>
            <Container>
                <Heading>Default</Heading>
                {variants.map(variant => (
                    <Button variant={variant}>{variant.split('.')[1]}</Button>
                ))}
            </Container>

            <Container>
                <Heading>Squared</Heading>
                {variants.map(variant => (
                    <Button variant={variant} squared>
                        {variant.split('.')[1]}
                    </Button>
                ))}
            </Container>

            <Container>
                <Heading>Rounded</Heading>
                {variants.map(variant => (
                    <Button variant={variant} rounded>
                        {variant.split('.')[1]}
                    </Button>
                ))}
            </Container>

            <Heading fontSize={32}>Sizes</Heading>
            {sizes.map(size => (
                <Container>
                    <Heading>Size: {size}</Heading>
                    {variants.map(variant => (
                        <Button variant={variant} size={size}>
                            {variant.split('.')[1]}
                        </Button>
                    ))}
                </Container>
            ))}
        </Box>
    </Box>
);

export default Home;
