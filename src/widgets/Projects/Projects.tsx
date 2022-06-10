import React from 'react'
import { Box, SimpleGrid } from "@chakra-ui/layout"
import { ProjectCard, Title } from 'src/components'
import { Project } from 'src/services/app/types'

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Box mt={[10, 20]}>
      <section id='projects'>
        <Title title="Projects" />
        <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={3}>
          {projects?.map((p, i) =>
            <ProjectCard key={i} data={p} />
          )}
        </SimpleGrid>
      </section>
    </Box>
  )
}

export default Projects
