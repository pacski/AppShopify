import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card,
    ResourceList,
    Stack,
    TextStyle,
    Thumbnail, } from '@shopify/polaris';
import store from 'store-js';

const GET_CUSTOMERS_BY_ID = gql`
query {  customers (first:10){
      edges {
        node {
          displayName
          email
        }
      }
    }
  }
`;

class CustomersList extends React.Component {
   render() {
     return (
        <Query query={GET_CUSTOMERS_BY_ID} variables={{ ids: store.get('ids') }}>
         {({ data, loading, error }) => {
           if (loading) return <div>Loading…</div>;
           if (error) return <div>{error.message}</div>;
           console.log(data);
           return (
             <Card>
               <p>stuff here</p>
             </Card>
           );
         }}
       </Query>
     );
   }
 }
 
  export default CustomersList;