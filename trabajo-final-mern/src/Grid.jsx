import { Grid } from '@chakra-ui/react'
import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

const Grid = () => {
    return (
        <div>
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
        </div>
    );
}

export default Grid