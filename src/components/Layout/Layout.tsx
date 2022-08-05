import { Header } from '@/src/components/layouts/Header'
import { PageContent } from '@/src/components/layouts/PageContent'
import { Footer } from '@/src/components/layouts/Footer'
import { Layout, Inner, Container } from './styles'

export const Layout: React.FC= () => (
  <Layout>
    <Header />
    <Container>
      <Inner>
        <PageContent>Portfolio</PageContent>
        {/*<ScrollButtonTop />*/}
          <Footer />
      </Inner>
    </Container>
  </Layout>
)
