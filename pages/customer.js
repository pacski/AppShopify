import { Card, Layout, Page } from '@shopify/polaris';
import CustomersList from '../components/CustomersList';




class Customer extends React.Component {
    state = {open: false};
  
    render() {
        const emptyState = false;
        return (
                    <Page>
                      <Layout>
                          
                            <CustomersList />
                         
                      </Layout>
                    </Page>
                  );
          
      ;
    }
  }
  
  export default Customer;