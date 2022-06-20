import React from 'react'
import { Grid, GridItem, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

interface SProps {
  size: number
}

const Dynamic: React.FC<SProps> = ({ size = 2 }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={3}>
      {[...new Array(size)].map((_i, idx) => <GridItem key={`skeleton-${idx}`} >
        <Box padding='6' boxShadow='lg'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={2} spacing='4' />
        </Box>
      </GridItem>
      )}
    </Grid>
  );
}

export default Dynamic
