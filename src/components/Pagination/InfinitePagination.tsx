import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import ButtonLoader from '../Loader/ButtonLoader'

interface IProps {
  loading: boolean
  loadMore: () => void
}

const InfinitePagination: React.FC<IProps> = ({ loading, loadMore }) => {
  return (
    <Flex mt={8} align="center" justify="center">
      {loading ? (
        <ButtonLoader size="48" loading={loading} />
      ) : (
        <Button onClick={loadMore}>More</Button>
      )}
    </Flex>
  )
}

export default InfinitePagination
