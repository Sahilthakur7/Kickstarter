import React from 'react';
import Layout from '../../components/Layout';
import { Form , Button, Input } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends React.Component {
    state = {
        minimumContribution:''
    }
    
    changeContribution = (e) => {
        this.setState({
            minimumContribution: e.target.value
        })
    }

    onSumbit = async (e) => {
        e.preventDefault();

        const accounts = await web3.eth.getAccounts();

        await factory.methods.createCampaign(this.state.minimumContribution).send({
            from: accounts[0]            
        });
    }

    render(){
        return(
            <Layout>
                <h3>Create New Campaign</h3>

                <Form onSumbit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label="wei" labelPosition="right" value={this.state.minimumContribution}
                        onChange = {this.changeContribution}/>
                    </Form.Field>
                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;
