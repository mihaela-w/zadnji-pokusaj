import React from "react"
 
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import PageContent from "../modules/PageContent"



//promjena za branch




const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <TitlePage />
    <PageContent />
  </HeaderFooterLayout>
)
 
export default IndexPage