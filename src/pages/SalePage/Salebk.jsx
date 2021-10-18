import React from 'react'

import { Wrapper, Content, ContentColumn } from './styles'
import ProductPage from './ProductsPage'
import ItemsSoldPage from './ItemsSoldPage'

const SalePage = () => {
  return (
    <Wrapper>
      <Content>
        <ContentColumn>
          <ProductPage />
        </ContentColumn>
        <ContentColumn>
          <ItemsSoldPage />
        </ContentColumn>
      </Content>
    </Wrapper>
  )
}

export default SalePage
