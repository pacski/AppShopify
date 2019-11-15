import { Page, EmptyState, Layout, } from "@shopify/polaris";
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';


const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';


class Index extends React.Component {
   state = { open: false };
   render() {
     return (
  <Page>
    <TitleBar
       primaryAction={{
         content: 'Select products',
       }}
     />
      <ResourcePicker
           resourceType="Product"
           showVariants={false}
           open={this.state.open}
           onSelection={(resources) => this.handleSelection(resources)}
           onCancel={() => this.setState({ open: false })}
         /> 
    <Layout>
    <EmptyState
      heading="Discount your products temporarily"
      action={{
        content: 'Select products',
        onAction: () => this.setState({ open: true }),
      }}
      image={img}
      >
      <p>Select products to change their price temporarily.</p>
    </EmptyState>
    </Layout>
    
  </Page>
    );
   }
   handleSelection = (resources) => {
         this.setState({ open: false })
         console.log(resources)
       };
}

export default Index;