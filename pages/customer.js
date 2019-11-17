import { Card, Layout, Page } from '@shopify/polaris';
import CustomersList from '../components/CustomersList';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
       fetchOptions: {
         credentials: 'include'
       },
     });




class Customer extends React.Component {
    state = {};
  
    render() {
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