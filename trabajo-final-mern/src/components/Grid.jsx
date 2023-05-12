import { Box} from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Grid } from '@chakra-ui/react'
import { Popover } from "@chakra-ui/react";
import { PopoverTrigger } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { PopoverContent } from "@chakra-ui/react";
import { PopoverArrow } from "@chakra-ui/react";
import { PopoverCloseButton } from "@chakra-ui/react";
import { PopoverHeader } from "@chakra-ui/react";
import { PopoverBody } from "@chakra-ui/react";


export default function Images() {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Grid templateColumns='repeat(5, 1fr)' gap={6} flexWrap={'wrap'} justifyContent={'space-around'}>
      <Box as="button" maxW='' borderWidth='10px' borderRadius='lg' flexWrap={'wrap'} justifyContent={'space-around'} m={'15px'} >
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
  
          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
      <Popover>
      <PopoverTrigger>
        <Button mt='10px'>Agregar al Carrito</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Agregado!</PopoverHeader>
        <PopoverBody>Se agrego ${'Comida'}</PopoverBody>
      </PopoverContent>
    </Popover>
        </Box>
      </Box>
      </Grid>
    )
  }