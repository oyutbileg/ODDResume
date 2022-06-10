import React, { useEffect, useState } from 'react'
// Hooks
import { useColorMode } from '@chakra-ui/color-mode'
// Icons
import { FaHandPointUp } from 'react-icons/fa'
import { Button } from '@chakra-ui/react'

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 20) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 20) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop);
  });

  const { colorMode } = useColorMode()

  return (
    <>
      <Button
        display={showScroll ? 'flex' : 'none'}
        position="fixed"
        bottom="50px"
        right="50px"
        color={colorMode === 'light' ? '#1A202C' : 'white'}
        bg={colorMode === 'light' ? 'white' : 'rgba(255, 255, 255, 0.08)'}
        aria-label="Scroll Top Button"
        onClick={scrollTop}
        title="Go to top"
        _hover={{
          background: colorMode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.05)',
          transition: 'all 0.2s ease-in-out',
        }}
        outline="none"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        py='1.5rem'
        animation="fadeIn 0.3s"
        transition="opacity 0.4s"
        borderRadius="0.5rem"
        fontSize="2rem"
        border="none"
      >
        <FaHandPointUp />
      </Button>
    </>
  )
}

export default ScrollTop
